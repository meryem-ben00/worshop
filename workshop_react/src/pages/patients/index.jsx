import React from "react";
import NavBar from "../../Views/Navbar/NavBar";
import Pagination from "../../components/Pagination";
import UserPatients from "./userPatients";
import "./patients.css";
import TitleComponent from "../../components/TitleComponent";
import data from "./dataTest";

const RegisterPatient = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-10">
        <TitleComponent />
        <UserPatients data={data} />
        <Pagination />
      </div>
    </>
  );
};

export default RegisterPatient;
