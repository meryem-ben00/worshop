import React from 'react'
import { Line } from 'react-chartjs-2'
// import Chart from 'chart.js/auto';
import "../Visitors.css"


function LineChart() {
  return (
    <div className="p-3">
      <div className="text-1xl font-bold pl-2">
        <h1>Today's Visitors</h1>
      </div>

      <div className="grid grid-cols-2 items-center mb-1 px-2">
        <div>
          <span className="text-1xl font-bold visitor_number">25</span>
        </div>
        <div className='ml-[40px]'>
          <Line
            data={{
              labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
              datasets: [{
                fill: true,
                label: 'My First Dataset',
                data: [0, 35, 27, 35, 38, 50, 30, 37, 50, 5, 7, 35, 38, 50, 30, 37, 50, 5, 7],
                backgroundColor: [
                  'transparent',
                ],
                borderColor: [
                  'rgb(116,118,200)',
                ],
                borderWidth: 1,
                pointBackgroundColor: ["orange", "", "", "", "", "orange", "", "", "", "", "", "", "", "", "", "", "", "", "orange"],
                pointRadius: [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                pointBorderWidth: 0,
              }]
            }}
            width={20}
            height={45}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>

      <div className="py-[5px]">
        <span className="bar block h-[6px] rounded-lg overflow-hidden"><span className="h-[6px] float-left percentage_line"></span></span>
      </div>
    </div>
  )
}

export default LineChart

