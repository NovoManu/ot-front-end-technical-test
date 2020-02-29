import React, { useState, useEffect } from 'react'
import "./App.scss"
import { Http } from './utils/http/Http'
import { DataTable, DataLoadingPlaceholder } from './components'
import { normalizeData } from './utils/functions'

const http = new Http()

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data: serverData } = await http.fetch('')
      const normalizedData = normalizeData(serverData)
        .sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA)
        .slice(0, 5)
      setData(normalizedData)
    }
    fetchData()
  }, [])

  const content = data.length
    ? <DataTable data={data} />
    : <DataLoadingPlaceholder />

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App;
