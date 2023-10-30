import React from 'react'
import AreaChart from './Visitors/area/AreaChart'
import LineChart from './Visitors/line/LineChart'
import BarChart from './Visitors/bar/BarChart'
import PieChart from './Visitors/pie/PieChart'
import PatientAreaChart from './Patient/PatientAreaChart';
import PatientOverviewChart from './Patient/PatientOverviewChart';
import ActivityChart from './Patient/ActivityChart';
import PatientData from './Patient/PatientData';

function Dashboard() {
  
  return (
    <div>
    <div className='bg-[#1E2E5C] gap-[30px] px-[30px] py-[30px] grid grid-rows-12 h-[960px]'>
        <div className='grid grid-cols-4 gap-[50px] h-[50px] mb-[60px] row-span-2'>
            <div className='bg-white rounded-[6px]'>
              <PieChart />
            </div>
            <div className='bg-white rounded-[6px]'>
              <BarChart />
            </div>
            <div className='bg-white rounded-[6px]'>
              <LineChart />
            </div>
            <div className='bg-white rounded-[6px]'>
                <AreaChart />
            </div>
        </div>
        <div className='grid grid-cols-12 grid-cols-1 gap-[30px] h-[350px] row-span-5'>
          <div className='bg-white div1 col-span-5 overflow-auto rounded-[6px]'><PatientAreaChart /></div>
          <div className='bg-white div2 col-span-7 overflow-auto rounded-[6px]'><PatientOverviewChart /></div>
        </div>
        <div className='grid grid-cols-12 gap-[30px] h-[350px] row-span-5 mb-[35px]'>
          <div className='bg-white div1 col-span-5 rounded-[12px]'><ActivityChart /></div>
          <div className='bg-white div2 col-span-7 rounded-[12px]'><PatientData /></div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard