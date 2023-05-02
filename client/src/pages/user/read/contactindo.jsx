import { input } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function Contactinfo({data,handleFind,setCode}){
  
    return (
        data!==''
        ?

        <div
        style={{
          
          height: "69vh",
          margin: "10%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-around",
          flexDirection: "column",
        }}
      >
        <div  class='flex items-center '>
        <h2 class=" font-bold text-4xl ">Mobile Number : </h2>
          <h3 class=' ml-5 text-4xl'>{data?.contact}</h3>
        </div>
        <div class='container' style={{overflowX:"auto",MaxHeight:'50vh',width:'45vw'}} >
          <h3 class="label font-bold text-4xl "> Emergency Contact Info - </h3>
          
          
  
          
          
          {
              data.emergencyContact.map((n,index)=>{
                console.log(data);
                  return (

                      <div class='' style={{justifyContent:'space-between',alignItems:'center',marginTop:'30px'}}>
                          <h2 style={{marginBottom:"-10px",marginBottom:'10px'}}>{`${index+1}) `}</h2>
                          <div  class='flex items-center '>
        <h2 class=" font-bold text-4xl ">Contact : </h2>
          <h3 class=' ml-5 text-4xl'>{n?.val}</h3>
        </div>
        <div  class='flex items-center '>
        <h2 class=" font-bold text-4xl ">Relation : </h2>
          <h3 class=' ml-5 text-4xl'>{n?.relation}</h3>
        </div>
          
  
          </div>
          
  
                    
                      
          
  
                  );
              })
              
          }
        
        </div>
        
       
          
        
      </div>
      :

      <form onSubmit={handleFind}>
            

            <div>
        <h2 class="label font-bold text-3xl ">Code :</h2>
        <div class=" ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          inputProps={{
            style: {
              height: "30px",
              width: "35vw",
              fontSize: "20px",
            },
          }}
          id="code-box"
          label="Code"
          variant="standard"
          onChange={(e)=>{setCode(e.target.value)}}
         
         
        />
        </div>
      </div>

            
          
        
      <motion.button
            type="button"
            className=" font-bold hover:text-white  h-[50px] border-2   border-solid border-teal-400 hover:bg-teal-400  mt-10 text-teal-300   w-[100px] rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleFind}
          
          >
            Submit
          </motion.button>
            
        </form> 
    );


}
export default Contactinfo;