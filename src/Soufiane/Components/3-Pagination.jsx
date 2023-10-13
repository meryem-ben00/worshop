import React from 'react';
import Vector from '../Images/Vector.png';
import Right from '../Images/Right2.png';
import Date from '../Images/Date.png';

const Pagination = () => {
  return (
    <div>
      <div className='flex gap-3 items-center w-fit mx-auto'>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10 items-center'>
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10 items-center'>
        <img src={Vector} alt="" />
        </button>
        <button className='bg-[#2E8544] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10'>
          1
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10'>
          2
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10'>
          3
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10 items-center'>
          <img src={Date} alt="" />
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10'>
          10
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10 items-center'>
        <img src={Right} alt="" />
        </button>
        <button className='bg-[#FFFFFF] text-[#333333] inline-flex py-2 px-3.5 rounded-md h-10  items-center'>
          <img src={Right} alt="" />
          <img src={Right} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Pagination;
