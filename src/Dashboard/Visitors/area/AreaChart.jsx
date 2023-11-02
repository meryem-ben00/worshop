import React from 'react'
import { Line } from 'react-chartjs-2'
// import Chart from 'chart.js/auto';
import "../Visitors.css"

function AreaChart() {
  return (
    <div className="p-3 area_chart">
      <div className="text-1xl font-bold pl-2">
        <h1>Visitors</h1>
      </div>

      <div className="grid grid-cols-2 items-center mb-1 px-2">
        <div>
          <span className="text-1xl font-bold visitor_number">2,479</span>
        </div>
        <div className='ml-[20px]'>
          <Line
            data={{
              labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
              datasets: [{
                fill: true,
                label: 'My First Dataset',
                data: [0, 20, 20, 50, 30, 10, 50, 37, 37, 0, 0, 10, 10, 50, 35, 10, 50, 37, 37, 0],
                backgroundColor: [
                  'rgb(160,181,229)',
                ],
                borderColor: [
                  'rgb(97,100,192)',
                ],
                borderWidth: 1,
                pointBackgroundColor: ["orange", "", "", "rgb(97,100,192)", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "orange"],
                pointRadius: [2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                pointBorderWidth: 0,
              }]
            }}
            width={30}
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
        <span className="bar block h-[6px] rounded-lg overflow-hidden"><span className="h-[6px] float-left percentage_area"></span></span>
      </div>
    </div>
  )
}

export default AreaChart

