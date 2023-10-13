import Arrow from '../Images/Arrow 1.png';
import { Link } from "react-router-dom";
const Steps = ({back=null, border=null , border2=null, border3=null, text = 'text-[#C9C9C9]' , text2 = 'text-[#FAFAFA]' , text3='text-[#FAFAFA]' , text4='text-[#FAFAFA]', border4=null }) => {
  return (
    <div className='w-full'>
      <Link className='flex flex-col pr-[60px] '>
        <img className='self-end mr[60px]' src={Arrow} alt="" />
      </Link>
      <div className='w-full mx-auto flex justify-center justify-around mr-[300px] mt-[90px]'>
          <p className={` ${text} border-b-4 ${border}  w-[250px] relative pl-[15px] text-base `	 }>
            <span className='absolute left-0 bottom-2 text-[25px]	'>1</span>
            Basic information
          </p>
          <p className={`${text2} w-[250px] border-b-4 ${border2} relative pl-[18px] text-base	 `}>
            <span className='absolute left-0 bottom-2 text-[25px]'>2</span>
            Enter Details
          </p>
          <p className={`${text3} w-[250px] border-b-4 ${border3} relative pl-[18px] text-base	`}>
            <span className='absolute left-0 bottom-2 text-[25px]'>3</span>
            Select Services
          </p>
          <p className={`${text4} w-[250px] border-b-4 ${border4} relative pl-[20px] text-base `}>
            <span className='absolute left-0 bottom-2 text-[25px]'>4</span>
            Review and Submit
          </p>
      </div>
    </div>
  );
}

export default Steps;
