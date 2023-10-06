import React from "react";
import NavBar from "../../Views/Navbar/NavBar";
import "./registerPatient.css";

const RegisterPatient = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto  mt-20 ">
        <Comp1 />
        <Patients data={data} />
        <Pagination />
      </div>
    </>
  );
};

export default RegisterPatient;
