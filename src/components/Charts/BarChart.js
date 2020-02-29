import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart({ data }) {
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
          display: true,
          padding: 0,
          beginAtZero: true,
          maxTicksLimit: 5,
          min: 0
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
          display: true,
          padding: 0,
          beginAtZero: true,
          min: 0
        },
        scaleLabel: {
          display: false
        }
      }]
    },
  }
  return (
    <Bar data={data} options={options} height={300} />
  )
}

export default BarChart
