import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AccountSetting() {
  return (
    <div className="bg-[#1E2E5C]">
      <Header />
      <div className="ml-[18%] mt-[25px] w-[70%]">
        <div className="pb-[35px] border-b-2 border-solid">
          <p className="text-[white] text-[18px]">Your Profile Picture</p>
          <div className="w-[130px] h-[132px] rounded-[18px] bg-[white] mt-[5px] flex flex-col justify-center items-center text-[#585858] border-dashed border-[2px] border-[#585858]">
            <FontAwesomeIcon icon={faImage} className="text-[35px]" />
            <p className="text-center text-[12px] pt-[10px]">
              Upload your <br /> photo
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[30px] my-[30px]">
          <div>
            <label className="text-white">First Name</label>
            <input
              type="text"
              className="w-[100%] h-[52px] rounded-[8px] mt-[10px]"
            />
          </div>
          <div>
            <label className="text-white">Last Name</label>
            <input
              type="text"
              className="w-[100%] h-[52px] rounded-[8px] mt-[10px]"
            />
          </div>
          <div>
            <label className="text-white">Username</label>
            <input
              type="text"
              className="w-[100%] h-[52px] rounded-[8px] mt-[10px]"
            />
          </div>
          <div>
            <label className="text-white">phone number</label>
            <input
              type="text"
              className="w-[100%] h-[52px] rounded-[8px] mt-[10px]"
            />
          </div>
          <div>
            <label className="text-white">Occupation</label>
            <select
              name="occupation"
              className="w-[100%] h-[52px] rounded-[8px] mt-[10px]"
            >
              <option value="#"></option>
              <option value="#">occupation 1</option>
              <option value="#">occupation 2</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountSetting;
