import React from 'react'
import DataTableRow from './DataTableRow'
import './DataTable.scss'

function DataTable({ data }) {

  const createHeaders = () => {
    const headers = ['', 'Symbol', 'Gene ID', 'Gene Name', 'Overall Association Score']
    return headers.map((header, index) => (
      <th className="table__col" key={index}>{header}</th>
    ))
  }

  const createRows = () => {
    return data.map((gene, index) => (
      <DataTableRow gene={gene} key={gene.id} chartType={index % 2 === 0 ? 'bar' : 'radar'} />
    ))
  }

  return (
    <div>
      <h1>Genes Associated with lung carcinoma</h1>
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            {createHeaders()}
          </tr>
        </thead>
        <tbody>
          {createRows()}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
