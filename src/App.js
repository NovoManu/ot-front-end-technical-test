import React, { useState, useEffect } from 'react'
import "./App.scss"
import { Http } from './utils/http/Http'
import { DataTable, DataLoadingPlaceholder } from './components'

const http = new Http()

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data: serverData } = await http.fetch('')
      setData(serverData)
    }
    fetchData()
  }, [])

  const content = !data
    ? <DataTable data={data} />
    : <DataLoadingPlaceholder />

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
