import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const Allform=()=>{

const [inside]=useState(0)

return(

<div style={{marginLeft:"auto",marginRight:"auto",width:"80%"}}  >

<div style={{width:"100%"}} className="border-2 p-5  ">
<svg style={{float:"right"}} class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
  </svg>
<Form1 inside={inside}/>
</div>

<div style={{width:"100%"}} className="border-2 border-t-0 p-5">
<Form2 inside={inside}/>
</div>


<div style={{width:"100%"}} className="border-2 border-t-0 p-5">
<Form3 inside={inside}/>
</div>



<button  style={{float:'right'}} type="button" class="text-white mt-4 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Done</button>


</div>








)





}
 
export default Allform