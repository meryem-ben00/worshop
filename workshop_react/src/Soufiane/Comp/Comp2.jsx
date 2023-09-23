import React from 'react';
import arrowRight from '../Images/Right-2.png';
import avatar from '../Images/Avatar (1).png';

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
              <td className='py-4 flex items-center '> <img src={avatar} alt='' /> Soufiane</td>
              <td className='py-4'>12233</td>
              <td className='py-4'>soufina@gmail.com</td>
              <td className='py-4'>0998798778878</td>
              <td className='py-4'>2039</td>
              <td className='py-4'>
                <span
                  className={`inline-block py-1 rounded-md  text-[#5F8D4E] px-3 bg-[#F4FFF3]`}
                >
                  Approved
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
