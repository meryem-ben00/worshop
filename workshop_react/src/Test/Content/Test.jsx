import React from "react";
import HeaderTest from "../Header/HeaderTest";
import FooterTest from "../Footer/FooterTest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faXmark,
  faGripVertical,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

function Test() {
  return (
    <div className="bg-[#1E2E5C] w-[100%]">
      <HeaderTest />
      <div className="ml-[18%] mt-[25px] w-[70%]">
        <div className="grid grid-cols-1 gap-[20px]">
          <div className="w-[90%] h-[303px] rounded-[26px] bg-[#DEDEDE]/60">
            <div className="flex justify-between items-center px-[40px] py-[20px]">
              <div className="flex gap-[20px] items-center">
                <FontAwesomeIcon
                  icon={faBorderNone}
                  className="text-[25px] text-[#1E2E5C]"
                />
                <h2 className="text-[25px] text-[white]">Test #1</h2>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-[25px] text-[#1E2E5C]"
              />
            </div>
            <div className="flex justify-center mb-[10px]">
              <input
                type="text"
                className="w-[90%] h-[68px] rounded-[6px] pb-[19px] pl-[15px] text-[black]"
                value="Test......"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-[20px] mb-[10px]">
                <div className="flex gap-[15px] items-center pl-[80px]">
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    className="text-[25px] text-[#1E2E5C]"
                  />
                  <span className="text-[22px] text-[#1E2E5C] font-semibold">
                    A
                  </span>
                </div>
                <div className="relative w-[78%]">
                  <input
                    type="text"
                    className="w-full h-[48px] rounded-[6px] text-[black] pl-[25px]"
                    value="Test...."
                  />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[25px] text-[#1E2E5C] absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="flex gap-[15px] items-center pl-[80px]">
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    className="text-[25px] text-[#1E2E5C]"
                  />
                  <span className="text-[22px] text-[#1E2E5C] font-semibold">
                    B
                  </span>
                </div>
                <div className="relative w-[78%]">
                  <input
                    type="text"
                    className="w-full h-[48px] rounded-[6px] text-[black] pl-[25px]"
                  />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[25px] text-[#1E2E5C] absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="grid justify-items-end">
                <div className="flex items-center gap-[10px] text-[white] pr-[40px] pt-[10px]">
                  <h2>Add more</h2>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="text-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[303px] rounded-[26px] bg-[#DEDEDE]/60 mb-[10px]">
            <div className="flex justify-between items-center px-[40px] py-[20px]">
              <div className="flex gap-[20px] items-center">
                <FontAwesomeIcon
                  icon={faBorderNone}
                  className="text-[25px] text-[#1E2E5C]"
                />
                <h2 className="text-[25px] text-[white]">Test #1</h2>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-[25px] text-[#1E2E5C]"
              />
            </div>
            <div className="flex justify-center mb-[10px]">
              <input
                type="text"
                className="w-[90%] h-[68px] rounded-[6px] pb-[19px] pl-[15px] text-[black]"
                value="Test......"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-[20px] mb-[10px]">
                <div className="flex gap-[15px] items-center pl-[80px]">
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    className="text-[25px] text-[#1E2E5C]"
                  />
                  <span className="text-[22px] text-[#1E2E5C] font-semibold">
                    A
                  </span>
                </div>
                <div className="relative w-[78%]">
                  <input
                    type="text"
                    className="w-full h-[48px] rounded-[6px] text-[black] pl-[25px]"
                    value="Test...."
                  />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[25px] text-[#1E2E5C] absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="flex gap-[15px] items-center pl-[80px]">
                  <FontAwesomeIcon
                    icon={faGripVertical}
                    className="text-[25px] text-[#1E2E5C]"
                  />
                  <span className="text-[22px] text-[#1E2E5C] font-semibold">
                    B
                  </span>
                </div>
                <div className="relative w-[78%]">
                  <input
                    type="text"
                    className="w-full h-[48px] rounded-[6px] text-[black] pl-[25px]"
                  />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[25px] text-[#1E2E5C] absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="grid justify-items-end">
                <div className="flex items-center gap-[10px] text-[white] pr-[40px] pt-[10px]">
                  <h2>Add more</h2>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="text-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTest />
    </div>
  );
}

export default Test;
