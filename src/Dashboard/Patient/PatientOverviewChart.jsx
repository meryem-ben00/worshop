import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';




function PatientOverviewChart() {
  return (
    <div className='p-3'>
      <div className='flex justify-between items-center mb-[10px]'>
        <div className='w-[350px] flex justify-between'>
          <h1 className='text-[18px] font-semibold text-[#4A4A4A] pl-[3px] mb-[4px]'>Patient Overview</h1>
          <div className='flex justify-between items-center gap-[50px]'>
            <div className='flex justify-around items-center gap-[5px]'>
              <div className='w-[8px] h-[8px] bg-[rgb(60,111,248)] rounded-full'></div>
              <p className='text-[12px]'>Male</p>
            </div>
            <div className='flex justify-between items-center gap-[5px]'>
              <div className='w-[8px] h-[8px] bg-[rgb(225,44,255)] rounded-full'></div>
              <p className='text-[12px]'>Female</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center pr-[20px]'>
          <div className="relative inline-block">
            <select
              className="block appearance-none w-[100px] text-[12px] bg-white cursor-pointer border border-gray-200 hover:border-gray-400 px-4 py-2 pr-8 rounded-[10px]  leading-tight focus:outline-none">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 text-[10px]">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="patient_overview_chart">
        <div className="grid grid-cols-2 items-center">
          <div className='w-[700px]'>
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    fill: false,
                    label: 'Male',
                    data: [1500, 4500, 2000, 2800, 3100, 4250, 2700, 5950, 4350, 7150, 5250, 7150],
                    backgroundColor: ['#3C6FF8'],
                    borderColor: ['rgb(95,195,176)'],
                    borderWidth: 3,
                    pointBorderWidth: 0,
                    tension: 0.5,

                  },
                  {
                    fill: false,
                    label: 'Female',
                    data: [3950, 6000, 4225, 3800, 5250, 1000, 2465, 3980, 3800, 3860, 4400, 3885],
                    backgroundColor: ['rgb(225,44,255)'],
                    borderColor: ['rgb(225,44,255,0.3)'],
                    borderWidth: 3,
                    pointBorderWidth: 0,
                    tension: 0.5,


                  },
                ]
              }}
              width={300}
              height={280}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                    labels: {
                      usePointStyle: true,
                    },
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
                scales: {
                  x: {
                    display: true,
                  },
                  y: {
                    display: true,
                    beginAtZero: false,
                    min: 0,
                    max: 8000,
                    stepSize: 2000,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientOverviewChart