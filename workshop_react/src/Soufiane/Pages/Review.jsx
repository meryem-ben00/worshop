import React from "react";
import Steps from "../Components/4-Steps";
import Polygon from "../Images/Polygon 1.png";
import Calender from "../Images/Calender.png";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div>
      <Steps border4={"border-lime-800"} text4={"text-[#5F8D4E]"} />
      <div className="relative  h-[1500px]">
        <div className=" w-[1200px] p-[20px]	mx-auto mt-[80px] font-[Poppins] text-white border-[1px]">
          <p className="mb-[60px]">Basic information</p>
          <div className="flex gap-20">
            <div className="">
              <div className=" w-[510px] relative ">
                <p className="text-[#5F8D4E] mb-2">User type</p>
                <input
                  className="border p-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] "
                  type="text"
                  value={"Select user type"}
                />
              </div>
              <div className=" w-[510px] ">
                <p className="text-[#5F8D4E] mb-2">First name</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Your first name"}
                />
              </div>
              <div className="w-[510px]">
                <p className="text-[#5F8D4E] mb-2">Laste name</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Your last name"}
                />
              </div>
              <div className=" w-[510px]">
                <p className="text-[#5F8D4E] mb-2">Email adress</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Your email adress"}
                />
              </div>
            </div>
            <div className="w-[100%]">
              <div className=" w-[100%] relative  ">
                <p className="text-[#5F8D4E] mb-2">Gender</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] "
                  type="text"
                  value={"Select gender"}
                />
              </div>
              <div className=" w-[100%] ">
                <p className="text-[#5F8D4E] mb-2">Designation</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Select user type"}
                />
              </div>
              <div className=" w-[100%] relative ">
                <p className="text-[#5F8D4E] mb-2">Date of birth</p>
                <input
                  className="border p-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Select your date of birth "}
                />
                <img
                  className="absolute right-2.5 bottom-[47px]"
                  src={Calender}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1200px] p-[20px] mx-auto border-[1px] text-white flex font-[Poppins]   ">
          <div className="b w-[50%]">
            <p className="mb-[60px] font-semibold text-[23px]">Details</p>
            <div>
              <p className="text-[#5F8D4E] mb-2">Adress</p>
              <input
                className="border pl-5 rounded w-[80%]  h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                type="text"
                value={"Adress"}
              />
            </div>
            <div>
              <p className="text-[#5F8D4E] mb-2">Zip Code</p>
              <input
                className="border pl-5 rounded w-[80%] h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                type="text"
                value={"Zipe Code"}
              />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="mt-[93px]">
              <p className="text-[#5F8D4E] mb-2">Phone Number</p>
              <input
                className="border pl-5 rounded w-[90%] h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                type="text"
                value={"Phone Number"}
              />
            </div>
          </div>
        </div>

        <div className=" w-[1200px] p-[20px] 	mx-auto border-[1px] font-[Poppins] text-white">
          <p className="mb-[60px]">Services</p>
          <div className="flex gap-20">
            <div className="">
              <div className=" w-[510px] relative ">
                <p className="text-[#5F8D4E] mb-2">Doctor Type</p>
                <input
                  className="border p-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] "
                  type="text"
                  value={"Select user type"}
                />
                <img
                  className="absolute right-4 bottom-[53px]"
                  src={Polygon}
                  alt=""
                />
              </div>
              <div className=" w-[510px] ">
                <p className="text-[#5F8D4E] mb-2">Speciality</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Select user type"}
                />
              </div>
            </div>
            <div className="w-[100%]">
              <div className=" w-[100%] relative  ">
                <p className="text-[#5F8D4E] mb-2">Gender</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px] "
                  type="text"
                  value={"Select user type"}
                />
                <img
                  className="absolute right-4 bottom-[53px]"
                  src={Polygon}
                  alt=""
                />
              </div>
              <div className=" w-[100%] ">
                <p className="text-[#5F8D4E] mb-2">Designation</p>
                <input
                  className="border pl-5 rounded w-full h-[45px] mb-8 bg-transparent border border-[#C9C9C9] text-[15px]"
                  type="text"
                  value={"Select user type"}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link
            to={"/patients"}
            className=" text-[#FFFFFF] flex justify-center items-center bg-[#5F8D4E] w-[133px] h-[52px]  absolute right-[50px] bottom-[50px] rounded font-semibold"
          >
            <p>Done</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;
