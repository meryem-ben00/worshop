import Steps from "../Components/4-Steps";
import BasicInfo from "../Components/5-BasicInfo";
import Btn from "../Components/6-BtnNextStep";
const AddNewUser = () => {
  return (
    <div>
      <Steps border={"border-lime-800"} text={"text-[#5F8D4E]"} />
      <BasicInfo />
      <Btn direction={"/details"} />
    </div>
  );
};

export default AddNewUser;
