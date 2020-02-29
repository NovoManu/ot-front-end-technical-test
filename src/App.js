import React, { useState, useEffect } from 'react'
import "./App.css"
import { Http } from './http/Http'

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

  return (
    <div className="App">
      <p>
        Feel free to edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
