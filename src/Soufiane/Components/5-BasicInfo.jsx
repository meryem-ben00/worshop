import Polygon from '../Images/Polygon 1.png';
import Calender from '../Images/Calender.png';

const BasicInfo = () => {
  return (
    <div className='w-[1200px] mx-auto mt-[80px] font-[Poppins] text-white'>
      <p className='mb-[60px]'>Basic information</p>
      <div className='flex gap-20'>
          <div className=''>
              <div className=' w-[544px] relative '>
                <p className='text-[#5F8D4E] mb-2'>User type</p>
                <input className='border p-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] ' type="text" value={"Select user type"}/>
                <img className='absolute right-4 bottom-[53px]' src={Polygon} alt="" />
              </div>
              <div className=' w-[544px] '>
                <p className='text-[#5F8D4E] mb-2'>First name</p>
                <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
              </div>
              <div className='w-[544px]'>
                <p className='text-[#5F8D4E] mb-2'>Laste name</p>
                <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
              </div>
              <div className=' w-[544px]'>
                <p className='text-[#5F8D4E] mb-2'>Email adress</p>
                <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
              </div>
          </div>
          <div className=''>
              <div className=' w-[544px] relative  '>
                  <p className='text-[#5F8D4E] mb-2'>Gender</p>
                  <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] ' type="text" value={"Select user type"}/>
                  <img className='absolute right-4 bottom-[53px]' src={Polygon} alt="" />
              </div>
              <div className=' w-[544px] '>
                  <p className='text-[#5F8D4E] mb-2'>Designation</p>
                  <input className='border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
              </div>
              <div className=' w-[544px] relative '>
                  <p className='text-[#5F8D4E] mb-2'>Date of birth</p>
                  <input className='border p-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]' type="text" value={"Select user type"}/>
                  <img className='absolute right-2.5 bottom-[47px]' src={Calender} alt="" />
              </div>
          </div>
      </div>
    </div>
  );
}

export default BasicInfo;
