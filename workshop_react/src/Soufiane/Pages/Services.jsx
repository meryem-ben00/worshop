import React from "react";
import CServices from "../Components/8-CServices";
import Steps from "../Components/4-Steps";
import BtnNextStep from "../Components/6-BtnNextStep";
const Services = () => {
  return (
    <div>
      <Steps border3={"border-lime-800"} text3={"text-[#5F8D4E]"} />
      <CServices />
      <BtnNextStep direction={"/review"} />
    </div>
  );
};

export default Services;
