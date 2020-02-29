import React from 'react'
import { Radar } from 'react-chartjs-2'

function RadarChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        maxTicksLimit: 5,
        padding: 0,
        beginAtZero: true,
        gridLines: {
          display: true,
          lineWidth: 0.5,
          zeroLineColor: 'rgba(0, 0, 0, 0.25)'
        },
        ticks: {
          display: false
        },
        scaleLabel: {
          display: false
        }
      }],
      xAxes: [{
        maxTicksLimit: 5,
        padding: 0,
        beginAtZero: true,
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        },
        scaleLabel: {
          display: false
        }
      }],
      tooltip: {
        mode: 'nearest',
        intersect: false,
        position: 'nearest'
      }
    },
  }
  return (
    <Radar data={data} options={options} height={300} />
  )
}

export default RadarChart
