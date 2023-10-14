import React from 'react';
import icon from '../Images/Add-user.png'
import { Link } from "react-router-dom";

const Comp1 = ({children}) => {
  return (
    <div className='w-[1536px] mt-4 mx-auto flex items-center text-white justify-between' >
        <div>
          <h3>List of {children}</h3>
          <p>345 available {children}</p>
        </div>
        <Link to={"/add"} className='bg-[#5F8D4E] flex items-center rounded-[6px] font-[500] text-xs h-10 w-40 py-2.5 px-5 '>
          <img className='inline-block	mr-[3px]' src={icon} alt='' />
          Add new doctor
        </Link>
    </div>
  );
}

export default Comp1;
