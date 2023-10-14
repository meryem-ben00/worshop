import React from 'react';
import { Link } from "react-router-dom";


const BtnNextStep = ({direction}) => {
  return (
    <div>
      <Link to={direction} className=' text-[#FFFFFF] flex justify-center items-center bg-[#5F8D4E] w-[133px] h-[52px]  fixed right-[387px] bottom-[40px] rounded font-semibold'><p>NEXT STEP</p></Link>
    </div>
  );
}

export default BtnNextStep;
