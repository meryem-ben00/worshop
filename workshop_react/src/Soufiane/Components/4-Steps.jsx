import Arrow from '../Images/Arrow 1.png';
const Steps = ({border=null , border2=null, text = 'text-[#C9C9C9]' , text2 = 'text-[#FAFAFA]'  }) => {
  return (
    <div>
      <div className='flex flex-col pr-[60px] mt-[30px]'>
        <img className='self-end mr[60px]' src={Arrow} alt="" />
      </div>
      <div className='w-8/12 mx-auto flex justify-center justify-around mt-[90px]'>
          <p className={` ${text} border-b-4 ${border}  w-[250px] relative pl-[15px] text-base `	 }>
            <span className='absolute left-0 bottom-2 text-[25px]	'>1</span>
            Basic information
          </p>
          <p className={`${text2} w-[250px] border-b-4 ${border2} relative pl-[18px] text-base	 `}>
            <span className='absolute left-0 bottom-2 text-[25px]'>2</span>
            Enter Details
          </p>
          <p className='text-[#C9C9C9] w-[250px] border-b-4 #FAFAFA relative pl-[18px] text-base	 '>
            <span className='absolute left-0 bottom-2 text-[25px]'>3</span>
            Select Services
          </p>
          <p className='text-[#C9C9C9] w-[250px] border-b-4 border-{#FAFAFA} relative pl-[20px] text-base '>
            <span className='absolute left-0 bottom-2 text-[25px]'>4</span>
            Review and Submit
          </p>
      </div>
    </div>
  );
}

export default Steps;
