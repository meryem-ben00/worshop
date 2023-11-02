import React from 'react';
import { RiArrowUpSFill } from 'react-icons';
import { Line } from 'react-chartjs-2';

function PatientAreaChart() {

  return (
    <div className='p-3'>
      <div className='flex justify-between items-center mb-[5px]'>
        <h1 className='text-[14px] font-bold'>New Patient</h1>
        <div className='flex justify-between items-center'>
          <p className='text-[#83BEA3] text-[7px] pr-[20px]'>25% Higher than last month</p>
        </div>
      </div>
      <div className='flex justify-around items-center px-[60px] mb-[10px]'>
        <div>
          <div className='grid grid-rows'>
            <h2 className='text-[10px] font-extralight'>Overall Growth</h2>
            <span className='text-[12px] font-bold'>35.80%</span>
          </div>
        </div>
        <div>
          <div className='grid grid-rows'>
            <h2 className='text-[10px] font-extralight'>Monthly</h2>
            <span className='text-[12px] font-bold'>42.20%</span>
          </div>
        </div>
        <div>
          <div className='grid grid-rows'>
            <h2 className='text-[10px] font-extralight'>Day</h2>
            <span className='text-[12px] font-bold'>5.50%</span>
          </div>
        </div>
      </div>
      <div className="patient_area_chart">
        <div className="grid grid-cols-2 items-center">
          <div className='w-[500px] pr-[30px]'>
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
                datasets: [
                  {
                    fill: true,
                    label: 'My First Dataset',
                    data: [10, 28, 67, 30, 44, 50, 40],
                    backgroundColor: ['rgb(95,195,176, 0.2)'],
                    borderColor: ['rgb(95,195,176)'],
                    borderWidth: 4,
                    pointBorderWidth: 0,
                    tension: 0.5,

                  },
                  {
                    fill: true,
                    label: 'My Second Dataset',
                    data: [30, 40, 27, 50, 22, 63, 80],
                    backgroundColor: ['rgb(153,155,156,0.2)'],
                    borderColor: ['rgb(153,155,156)'],
                    borderWidth: 4,
                    pointBorderWidth: 0,
                    tension: 0.5,


                  }
                ]
              }}
              width={300}
              height={250}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
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
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 100,
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

export default PatientAreaChart;
