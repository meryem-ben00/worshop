import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow";
import "./registerPatient.css";

const RegisterPatient = () => {
  return (
    <>
      <div className="bg-bgColor flex justify-center min-h-full mx-5">
        <div className="maxrp:mx-12 mx-48 mt-10 mb-10 w-full flex flex-col gap-4 max-w-[1077px]">
          <div className="relative mb-7">
            <Link to={"/"} className="absolute right-0">
              <Arrow />
            </Link>
          </div>

          <h1 className="text-[#fff] font-extrabold text-[31px]">
            OP - Register a patient
          </h1>

          <p className="text-[#fff] font-semibold text-[20px] text-end mb-6 mr-20">
            Id: {"#123"}
          </p>

          <form
            onSubmit={console.log("Test")}
            className="flex flex-col gap-6 maxrp:gap-12"
          >
            {" "}
            {/** add the onSubmit function */}
            <div className="flex maxrp:flex-col gap-12 justify-center items-center ">
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="name"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="date"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Date
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
            </div>
            <div className="flex maxrp:flex-col gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="age"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex flex-col px-7 gap-3 w-full maxrp:w-fit line">
                <label
                  htmlFor="gender "
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Gender
                </label>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <label className="text-white text-lg font-light">
                      Male
                    </label>
                    <input type="radio" id="male" name="gender" value="Male" />
                  </div>
                  <div className="flex gap-2">
                    <label className="text-white text-lg font-light">
                      Female
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                    />
                  </div>
                  <div className="flex gap-2">
                    <label className="text-white text-lg font-light">
                      Author
                    </label>
                    <input
                      type="radio"
                      id="author"
                      name="gender"
                      value="Author"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="bloodGroup"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Blood Group
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
            </div>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="houseAddress"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  House Address
                </label>
                <input
                  type="text"
                  name="houseAddress"
                  placeholder="name,house,city,..."
                  className="inputForm maxrp:max-w-lg betweenrp:w-[32rem] houseAddressInput py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light w-full"
                />
              </div>
            </div>
            <div className="flex maxrp:flex-col gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="phone"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="dateBirth"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Date or Birth
                </label>
                <input
                  type="text"
                  name="dateBirth"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
            </div>
            <div className="flex maxrp:flex-col gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full betweenrp:w-fit">
                <label
                  htmlFor="departement"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Departement
                </label>
                <input
                  type="text"
                  name="departement"
                  className="inputForm max-w-lg betweenrp:w-[32rem] py-2 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex justify-center items-center self-end w-full mt-3">
                <button
                  className="submitButton max-w-lg bg-[#2E8544] rounded-3xl text-2xl font-medium text-white w-full py-2"
                  onSubmit={console.log("Submitting")}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPatient;
