import React from 'react';
import arrowRight from '../Images/Right-2.png';
import avatar from '../Images/Avatar (2).png';

const Comp2 = ({data}) => {
  return (
    <div className='py-8'>
      <table className='w-full'>
      <thead>
          <tr className='w-full rounded-md bg-[#FAFAFA] text-[#B5B5C3]'>
            <th className='rounded-tl-md rounded-bl-md  py-3'>Name</th>
            <th className='py-3'>ID</th>
            <th className='py-3'>Email</th>
            <th className='py-3'>Phone number</th>
            <th className='py-3'>Date added</th>
            <th className='py-3'>STATUS</th>
            <th className='rounded-tr-md rounded-br-md py-3'></th>
          </tr>
        </thead>
        <tbody className='text-center  '>
            {data.map((item) => {
              return(
                <tr className='text-white'>
              <td className='py-4 flex items-center  '> <img className='p-5' src={avatar} alt='' /> {item.name}</td>
              <td className='py-4'>{item.id}</td>
              <td className='py-4'>{item.email}</td>
              <td className='py-4'>{item.phoneNumber}</td>
              <td className='py-4'>{item.dateAdded}</td>
              <td className='py-4'>
                <span
                  className={`inline-block mx-auto  flex items-center 'text-[#5F8D4E] justify-center bg-[#F4FFF3]' text-[11px] font-medium	 rounded-md w-[74px] h-[26px] ${item.status === "declined" ? 'bg-[#FFE2E5] text-[#F64E60]' :'text-[#5F8D4E]  bg-[#F4FFF3]'}`}>
                  {item.status}
                </span>
              </td>
              <td className='py-4'>
                <button className='bg-[#FAFAFA] inline-flex p-2 rounded-md bg-[#FAFAFA] text-gray-700'>
                  <img src={arrowRight} alt=''  />
                </button>
              </td>
            </tr>
              )
            })}
          
        </tbody>
      </table>
    </div>
  );
}

export default Comp2;