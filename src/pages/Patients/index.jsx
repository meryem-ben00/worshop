import React from "react";
import Pagination from "../../components/Pagination";
import HeaderPatients from "../../components/HeaderPatients";
import Patients from "./Patients";
import data from "./dataTest";
import "./Patients.css";

const RegisterPatient = () => {
  return (
    <>
      <div className="mt-10 mb-5">
        <HeaderPatients />
        <Patients data={data} />
        <Pagination />
      </div>
    </>
  );
};

export default RegisterPatient;
