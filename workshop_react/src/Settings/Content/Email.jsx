import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Email() {
  return (
    <div className='bg-[#1E2E5C] h-[150vh]'>
        <Header />
        <div className='ml-[18%] mt-[70px] mb-[190px] w-[70%]'>
        <div className='grid grid-cols-1 gap-[60px] my-[30px]'>
            <div>
                <label className='text-white block'>Recent Email</label>
                <input type="text" className='w-[55%] h-[52px] rounded-[8px] mt-[10px]'/>
            </div>
            <div>
                <label className='text-white block'>New Email</label>
                <input type="text" className='w-[55%] h-[52px] rounded-[8px] mt-[10px]'/>
            </div>
            <div>
                <label className='text-white block'>Confirm Email</label>
                <input type="text" className='w-[55%] h-[52px] rounded-[8px] mt-[10px]'/>
            </div>

        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Email