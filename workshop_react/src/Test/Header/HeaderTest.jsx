import React from "react";

function HeaderTest() {
  return (
    <div>
      <div>
        <h1 className="text-[27px] font-semibold px-[40px] py-[20px] text-[white]">
          Create Test
        </h1>
      </div>
      <div className="ml-[18%] w-[700px]">
        <nav className="border-b-2 border-solid">
          <ul className="flex gap-[25px] text-[20px] text-[white] pb-[7px] pl-[10px]">
            <li className="text-[#2E8544]">ADHD</li>
            <li className="">Depression</li>
            <li className="">Anxiety</li>
            <li className="">Bipolar Disorder</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderTest;
