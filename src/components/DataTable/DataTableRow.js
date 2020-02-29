import React, { useState } from 'react'
import './DataTable.scss'
import { ChartDataHandler } from '../../utils/ChartDataHandler'
import BarChart from '../Charts/BarChart'
import RadarChart from '../Charts/RadarChart'

function DataTableRow({ gene, chartType }) {

  const [chartShowed, setChartShowed] = useState(false)

  const { id, name, symbol, score, datatypes } = gene

  const showChart = () => {
    setChartShowed(!chartShowed)
  }

  const getChartData = () => {
    const chart = new ChartDataHandler(datatypes)
    return chart.getChartData('bar')
  }

  const getChart = () => {
    const types = {
      bar: () => <BarChart data={getChartData()} />,
      radar: () => <RadarChart data={getChartData()} />
    }
    return types[chartType]()
  }

  return (
    <React.Fragment>
      <tr className="table__row">
        <td className="table__col" onClick={showChart}>
          <div className={chartShowed ? 'minus' : 'plus'} />
        </td>
        <td className="table__col">{symbol}</td>
        <td className="table__col">{id}</td>
        <td className="table__col">{name}</td>
        <td className="table__col">{score}</td>
      </tr>
      {chartShowed &&
        <tr className="table__row">
          <td colSpan="5" className="table__col">
            {getChart()}
          </td>
        </tr>
      }

    </React.Fragment>
  )
}

export default DataTableRow
