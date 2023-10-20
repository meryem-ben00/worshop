import React from "react";
import Pagination from "../../components/Pagination";
import HeaderPatients from "../../components/HeaderPatients";
import Patients from "./Patients";
import data from "./dataTest";
import "./Patients.css";

const RegisterPatient = () => {
  return (
    <div className="w-[100%]">
      <div className="mt-2 mb-2">
        <HeaderPatients />
        <Patients data={data} />
        <Pagination />
      </div>
    </div>
  );
};

export default RegisterPatient;
