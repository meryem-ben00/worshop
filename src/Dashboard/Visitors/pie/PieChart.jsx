import React from 'react'
import { Pie } from 'react-chartjs-2'
// import Chart from 'chart.js/auto';
import "../Visitors.css"


function PieChart() {
  return (
    <div className="p-3">
      <div className="text-1xl font-bold pl-2">
        <h1>New Patients</h1>
      </div>

      <div className="grid grid-cols-2 items-center mb-1 px-2">
        <div>
          <span className="text-1xl font-bold visitor_number">125</span>
        </div>
        <div className='ml-[70px]'>
          <Pie
            data={{
              labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
              datasets: [{
                fill: true,
                label: 'My First Dataset',
                data: [25, 25, 50],
                backgroundColor: [
                  "#F1F2F7",
                  "#6EDAFD",
                  "#6164C1"
                ],
                borderColor: [
                  'transparent',
                ],
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
        <span className="bar block h-[6px] rounded-lg overflow-hidden"><span className="h-[6px] float-left percentage_pie"></span></span>
      </div>
    </div>
  )
}

export default PieChart

