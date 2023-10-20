import React from "react";
import Details from "../Components/7-Details";
import Steps from "../Components/4-Steps";
import Button from "../Components/6-BtnNextStep";
const EnterDetails = () => {
  return (
    <div>
      <Steps border2={"border-lime-800"} text2={"text-[#5F8D4E]"} />
      <Details />
      <Button direction={"/services"} />
    </div>
  );
};

export default EnterDetails;
