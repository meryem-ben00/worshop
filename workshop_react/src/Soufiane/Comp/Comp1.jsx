import React from 'react';
import icon from '../Images/Add-user.png'

const Comp1 = () => {
  return (
    <div className='w-1241 flex items-center text-white justify-between' >
        <div>
          <h3>List of doctors</h3>
          <p>345 available doctors</p>
        </div>
        <button className='bg-[#5F8D4E] flex items-center rounded-[6px] font-[500] text-xs h-10 w-40 py-2.5 px-5'> <img className='inline-block	mr-[3px]' src={icon} /> Add new doctor</button>
    </div>
  );
}

export default Comp1;
