import React , {useState} from "react";
import NavBar from "../Navbar/NavBar";
import Form1 from "./Form1";
import Step from "./Step";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Allform from "./AllForm";


const Doctor = ()=>{

    const [step,setStep]=useState(1)


return(


<div style={{backgroundColor:"#1d2e5c",backgroundSize:"cover"}}>
<NavBar/>
<svg onClick={()=>setStep(step-1)} style={{position:"fixed",top:"12%",right:"5%"}} class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
  </svg>
<div style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginTop:"10%"}}>
<Step step={step} />
{(step==1) && <Form1 setStep={setStep} />}
{(step==2) && <Form2 setStep={setStep} />}
{(step==3) && <Form3 setStep={setStep} />}
{(step==4) && <Allform setStep={setStep} />}



</div>

</div>



)






}



export default Doctor