import React from 'react';

const Details = () => {
  return (
    <div >
      <div className='w-[1200px] mx-auto mt-[80px] text-white flex font-[Poppins]   '>
          <div className='b w-[50%]'>
              <p className='mb-[60px] font-semibold text-[23px]'>Details</p>
              <div >
                  <p className='text-[#5F8D4E] mb-2'>Adress</p>
                  <input className='border pl-5 rounded w-[80%]  h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Adress"}/>
              </div>
              <div> 
                  <p className='text-[#5F8D4E] mb-2'>Zip Code</p>
                  <input className='border pl-5 rounded w-[80%] h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Zipe Code"}/>
              </div>
          </div>
          <div className='w-[50%]'>
              <div  className='mt-[93px]'>
                <p className='text-[#5F8D4E] mb-2'>Phone Number</p>
                <input className='border pl-5 rounded w-[90%] h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Phone Number"}/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Details;
