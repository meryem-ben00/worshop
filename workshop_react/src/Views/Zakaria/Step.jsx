import React from "react";

const Step=(props)=>{



return(

<div style={{marginLeft:"auto",marginRight:"auto"}} className="flex flex-wrap  mb-6 mt-20">

<h3 style={(props.step==1)?{color:'green',borderColor:"green"}:null} className="text-white  text-lg w-52 ml-10 border-b-4 border-white">1 Basic Information</h3>
<h3 style={(props.step==2)?{color:'green',borderColor:"green"}:null} className="text-white  text-lg w-52 ml-10 border-b-4 border-white ">2 Enter Detaills</h3>
<h3 style={(props.step==3)?{color:'green',borderColor:"green"}:null} className="text-white  text-lg w-52 ml-10 border-b-4 border-white ">3 Select Services</h3>
<h3 style={(props.step==4)?{color:'green',borderColor:"green"}:null} className="text-white  text-lg w-52 ml-10 border-b-4 border-white ">4 Review and Submit</h3>



</div>


)

}



export default Step