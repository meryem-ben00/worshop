import React from 'react';
import Polygon from '../Images/Polygon 1.png';

const CServices = () => {
  return (

    <div className=' w-[1200px] 	mx-auto mt-[80px] font-[Poppins] text-white'>
      <p className='mb-[60px]'>Services</p>
      <div className='flex gap-20'>
          <div className=''>
              <div className=' w-[510px] relative '>
                <p className='text-[#5F8D4E] mb-2'>Doctor Type</p>
                <input className='border p-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] ' type="text" value={"Select user type"}/>
                <img className='absolute right-4 bottom-[53px]' src={Polygon} alt="" />
              </div>
              <div className=' w-[510px] '>
                <p className='text-[#5F8D4E] mb-2'>Speciality</p>
                <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
              </div>
            
          </div>
          <div className='w-[100%]'>
              <div className=' w-[100%] relative  '>
                  <p className='text-[#5F8D4E] mb-2'>Gender</p>
                  <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] ' type="text" value={"Select user type"}/>
                  <img className='absolute right-4 bottom-[53px]' src={Polygon} alt="" />
              </div>
              <div className=' w-[100%] '>
                  <p className='text-[#5F8D4E] mb-2'>Designation</p>
                  <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
              </div>

          </div>
      </div>
    </div>
  );
}

export default CServices;
