import React from "react";



const Form1=(props)=>{


return(


<form style={(props.inside!=0)?{width:"70%",marginLeft:"auto",marginRight:"auto"}:null} >
  
  <h3 className="text-white text-xl mb-5">Basic Information</h3>
 
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
    
<label for="countries" class="text-green-600 block mb-2 text-sm font-sm">User Type</label>
<select id="countries" class="bg-transparent shadow border text-gray-400 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  <option selected>Select user Type</option>
  <option value="t1">Type1</option>
</select>

    
    </div>
    <div class="relative z-0 w-full mb-6 group">
        
        
    <label for="countries" class="text-green-600 block mb-2 text-sm font-sm">Gender</label>
<select id="countries" class="bg-transparent shadow border text-gray-400 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
  <option selected>Select gender</option>
  <option value="t1">Type1</option>
</select>

        
        
        </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">

    <label for="first_name" class="text-green-600 block mb-2 text-sm font-sm">First name</label>
    <input type="text" id="first_name" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your first name"  />
           
       
    </div>
    <div class="relative z-0 w-full mb-6 group">

    <label for="first_name" class="text-green-600 block mb-2 text-sm font-sm">Designation</label>
    <input type="text" id="first_name" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Designation"  />
           
       
    </div>



  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">

    <label for="first_name" class="text-green-600 block mb-2 text-sm font-sm">Last name</label>
    <input type="text" id="first_name" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your last name"  />
           
       
    </div>
    <div class="relative z-0 w-full mb-6 group">

    <label for="first_name" class="text-green-600 block mb-2 text-sm font-sm">Date of birth</label>
    <input type="date" id="first_name" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Select your date of birth"  />
           
       
    </div>



  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full  group">

    <label for="first_name" class="text-green-600 block  text-sm font-sm">Email adress</label>
    <input type="text" id="first_name" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your email adress"  />
           
       
    </div>
   



  </div>


  {props.inside!=0?<button onClick={()=>props.setStep(2)} style={{float:'right'}} type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Next Step</button>
  :null}
</form>




)

}


export default Form1