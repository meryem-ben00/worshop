import React from "react";



const Form2=(props)=>{


return(


<form style={(props.inside!=0)?{width:"70%",marginLeft:"auto",marginRight:"auto"}:null}>
  
<h3 className="text-white text-xl mb-5">Details</h3>
 
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
    
    <label for="Adress" class="text-green-600 block mb-2 text-sm font-sm">Adress</label>
    <input type="text" id="Adress" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Adress"  />
           

    
    </div>
    <div class="relative z-0 w-full mb-6 group">
        
        
    <label for="Phone" class="text-green-600 block mb-2 text-sm font-sm">Phone Number</label>
    <input type="text" id="Phone" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Phone Number"  />
           

        
        
        </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">

    <label for="Zip" class="text-green-600 block mb-2 text-sm font-sm">Zip Code</label>
    <input type="text" id="Zip" class="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Zip Code"  />
           
       
    </div>


  </div>




  {props.inside!=0?<button onClick={()=>props.setStep(3)} style={{float:'right'}} type="button" class="text-white mt-40 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Next Step</button>
  :null}
  </form>




)

}


export default Form2