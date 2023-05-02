import React from "react";

function Basicinfo({data,member}){
    return (

        <div
        style={{
          height: "60vh",
          margin: "10%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-around",
          flexDirection: "column",
        }}
      >
        <div  class='flex items-center ' >
          <h2 class=" font-bold text-4xl ">Name : </h2>
          <h3 class=' ml-5 text-4xl'>{data?.name}</h3>
        </div>
        
  
  
  {
  member?
  <div class='flex items-center ' >
           <h2 class=" font-bold text-4xl ">Relation : </h2>
          <h3 class=' ml-5 text-4xl'>{data?.relation}</h3>
        </div>
  
  :
  null
  
  
  
  
  }
        
        <div  class='flex items-center '>
        <h2 class=" font-bold text-4xl ">Email : </h2>
          <h3 class=' ml-5 text-4xl'>{data?.email}</h3>
        </div>
  
   
  
        <div class='flex items-center ' >
        <h2 class=" font-bold text-4xl break-words ">Select Your Blood Group : </h2>
         
          <h3 class=' ml-5 text-4xl'>{data?.bloodgroup}</h3>
       
          
        </div>
      </div>

    );


}
export default Basicinfo;