import React from 'react'
import { Line } from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ActivityChart() {
  return (
    <div className='p-3'>
      <div className='flex justify-between items-center mb-[10px] px-[30px]'>
            <h1 className='font-bold pl-[3px]'>Activity</h1>
        <div className='flex justify-between items-center'>
        <div className="relative inline-block">
          <select
            className="block appearance-none font-bold w-[100px] text-[14px] bg-white cursor-pointer pl-8 py-2 leading-tight focus:outline-none">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center text-gray-400 text-[10px]">
          <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        </div>
      </div>
      <div className="activity_chart">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className='w-[700px] pl-[40px] pr-[70px]'>
            <Line 
              data={{
                labels: ["", "", "", "", "", "", "","","","",""],
                datasets: [
                  {
                    fill: true,
                    label: 'Last Month',
                    data: [6, 6.2, 7, 4, 4, 5, 4.8, 6.8],
                    backgroundColor: ['rgb(30,46,92,0.2)'],
                    borderColor: ['rgb(30,46,92)'],
                    borderWidth: 2,
                    pointBackgroundColor:['(rgb(30,46,92))'],
                    pointBorderWidth: 3,

                  },
                  {
                    fill: true,
                    label: 'This month',
                    data: [10,8.5,8.5,9,8.7,7,7.4,10],
                    backgroundColor: ['rgb(62,133,68,0.2)'],
                    borderColor: ['rgb(62,133,68)'],
                    borderWidth: 2,
                    pointBackgroundColor:['rgb(62,133,68)'],
                    pointBorderWidth: 3,
                  },
                ]
              }}
              width={300}
              height={250}
              options={{
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position : "bottom",
                        labels: {
                          usePointStyle: true,
                        },
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
                    beginAtZero: false,
                    min: 0,
                    max: 11,
                    stepSize: 1,
                  },
                },
              }}
            />
          </div>

        </div>
      </div>
      <div className='flex justify-center items-center gap-[50px]'>
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-[5px]'>
                    <div className='w-[7px] h-[7px] bg-[#1E2E5C] rounded-full'></div>
                    <p className='text-[11px] font-bold'>Last Month</p>
                </div>
                <span className='text-[11px] font-bold py-[3px]'>100K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-[5px]'>
                    <div className='w-[7px] h-[7px] bg-[#3E8544] rounded-full'></div>
                    <p className='text-[11px] font-bold'>Last Month</p>
                </div>
                <span className='text-[11px] font-bold py-[3px]'>100K</span>
              </div>

              
            </div>
    </div>
  )
}

export default ActivityChart