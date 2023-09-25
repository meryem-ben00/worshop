import React from 'react'
import "./Patients.css"

function PatientData() {
  return (
    <div>
        <div className='grid justify-items-end text-[13px] text-[#3C6FF8] px-8 pt-6'>
            <p className='cursor-pointer'>View all</p>
        </div>
        <div className=''>
        <h1 className='text-[18px] font-semibold text-[#4A4A4A] pl-[20px] mb-[4px]'>Patient Data</h1>
        </div>
    <div className="w-full">
    <div className="">
      <div className="">
        <div className="">
          <table className="text-left text-sm font-light w-full">
            <thead className="font-medium ">
              <tr className=''>
                <th scope="col" className="px-6 py-3">Patient name</th>
                <th scope="col" className="px-6 py-3">Date in</th>
                <th scope="col" className="px-6 py-3">Diagnostic</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="whitespace-nowrap px-6 py-3 font-bold text-[12px] flex items-center gap-[10px]">
                    <div className='w-[30px] h-[30px] bg-[#EEEFFF] rounded-[6px]'></div>
                    Mouken Omar
                </td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">Jun 18, 2023</td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">ADHD</td>
                <td className="whitespace-nowrap px-6 py-3 text-[#EC8C23]">Incoming</td>
                <td className="whitespace-nowrap px-6 py-3">
                    <div className='flex gap-[1px]'>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                    </div>
                </td>
              </tr>
              <tr className="">
              <td className="whitespace-nowrap px-6 py-3 font-bold text-[12px] flex items-center gap-[10px]">
                    <div className='w-[30px] h-[30px] bg-[#EEEFFF] rounded-[6px]'></div>
                    Mouken Omar
                </td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">Jun 18, 2023</td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">ADHD</td>
                <td className="whitespace-nowrap px-6 py-3 text-[#3C6FF8]">Confirmed</td>
                <td className="whitespace-nowrap px-6 py-3">
                    <div className='flex gap-[1px]'>
                            <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                            <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                            <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                    </div>
                </td>
              </tr>
              <tr className="">
              <td className="whitespace-nowrap px-6 py-3 font-bold text-[12px] flex items-center gap-[10px]">
                    <div className='w-[30px] h-[30px] bg-[#EEEFFF] rounded-[6px]'></div>
                    Mouken Omar
                </td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">Jun 18, 2023</td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">ADHD</td>
                <td className="whitespace-nowrap px-6 py-3 text-[#A9A9A9]">Cancelled</td>
                <td className="whitespace-nowrap px-6 py-3">
                    <div className='flex gap-[1px]'>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                    </div>
                </td>
              </tr>
              <tr className="">
              <td className="whitespace-nowrap px-6 py-3 font-bold text-[12px] flex items-center gap-[10px]">
                    <div className='w-[30px] h-[30px] bg-[#EEEFFF] rounded-[6px]'></div>
                    Mouken Omar
                </td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">Jun 18, 2023</td>
                <td className="whitespace-nowrap px-6 py-3 txt-light">ADHD</td>
                <td className="whitespace-nowrap px-6 py-3 text-[#3C6FF8]">Confirmed</td>
                <td className="whitespace-nowrap px-6 py-3">
                    <div className='flex gap-[1px]'>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                        <div className='w-[6px] h-[6px] border border-[2px] border-[#A9A9A9] p-[1px] rounded-full'></div>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default PatientData