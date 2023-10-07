import React from 'react';
import { Link } from "react-router-dom";


const BtnNextStep = ({direction}) => {
  return (
    <div className='flex justify-end '>
      <Link to={direction} className=' flex justify-center items-center	 bg-[#5F8D4E] w-[133px] h-[52px] mt-[70px] rounded font-semibold'><p>NEXT STEP</p></Link>
    </div>
  );
}

export default BtnNextStep;
