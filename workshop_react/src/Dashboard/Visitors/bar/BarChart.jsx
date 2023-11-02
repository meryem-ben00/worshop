import React from 'react'
import { Bar } from 'react-chartjs-2'
// import Chart from 'chart.js/auto';
import "../Visitors.css"



function BarChart() {
  return (
    <div className="p-3">
      <div className="text-1xl font-bold pl-2">
        <h1>old Patients</h1>
      </div>

      <div className="grid grid-cols-2 items-center mb-1 px-2">
        <div>
          <span className="text-1xl font-bold visitor_number">218</span>
        </div>
        <div className='ml-[40px]'>
          <Bar
            data={{
              labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
              datasets: [{
                fill: true,
                label: 'My First Dataset',
                data: [15, 18, 2, 30, 35, 7, 30, 42, 46, 50, 40, 15, 18, 2, 30, 35],
                backgroundColor: [
                  'rgb(110,218,253)',
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
        <span className="bar block h-[6px] rounded-lg overflow-hidden"><span className="h-[6px] float-left percentage_bar"></span></span>
      </div>
    </div>
  )
}

export default BarChart

