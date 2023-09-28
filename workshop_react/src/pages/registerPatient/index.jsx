import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Views/Navbar/NavBar";
import Arrow from "../../assets/icons/Arrow";
import "./registerPatient.css";

const RegisterPatient = () => {
  return (
    <>
      <NavBar />
      <div className="bg-bgColor h-fit flex items-center justify-center">
        <div className="mx-48 mt-10 mb-32 w-full flex flex-col gap-4 max-w-[1077px]">
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

          <form onSubmit={console.log("Test")} className="flex flex-col gap-5">
            {" "}
            {/** add the onSubmit function */}
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="name"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="inputForm max-w-lg py-3 pl-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="date"
                  className="text-white text-2xl font-semibold"
                >
                  Date
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  className="inputForm max-w-lg py-3 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
            </div>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full">
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
                  className="inputForm houseAddressInput py-3 pl-5 rounded-3xl text-white text-lg font-light w-full"
                />
              </div>
            </div>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="phone"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="inputForm max-w-lg py-3 pl-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="dateBirth"
                  className="text-white text-2xl font-semibold"
                >
                  Date or Birth
                </label>
                <input
                  type="text"
                  name="dateBirth"
                  className="inputForm max-w-lg py-3 pl-5 pr-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
            </div>
            <div className="flex gap-12 justify-center items-center">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="departement"
                  className="text-white text-2xl font-semibold ml-4"
                >
                  Departement
                </label>
                <input
                  type="text"
                  name="departement"
                  className="inputForm max-w-lg py-3 pl-5 rounded-3xl text-white text-lg font-light"
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#2E8544] rounded-3xl text-2xl font-medium text-white"
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
