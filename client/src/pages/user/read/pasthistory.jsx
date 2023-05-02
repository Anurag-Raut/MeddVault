import { Grid, input } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const dis = [
    "Cancer",
    "dsv",
    "arberb",
    "abab",
    "aergaerg",
    "aasg",
    "agawg",
    "rsgva",
    "asga",
    "arga",
  ];
function FamilyMedHistory({data,handleFind,setCode}){
    console.log(data);
    return (
        <div>
        {
            data!==''?
        <div
        class='container'
          style={{
            height: "69vh",
            margin: "10%",
            width: "100%",
            // display: "flex",
            // justifyContent: "space-around",
            // alignItems: "space-around",
            // flexDirection: "column",
            overflow: "auto",
          }}
        >
          <div style={{ width: "100%",marginBottom:'50px' }}>
          <h2 class=" font-bold text-4xl mb-5">Past Diseases : </h2>
    
            <div class="grid grid-cols-4 gap-4">
        {dis.map((p, index) => {
            return (
             
              <div >
                <input
                  style={{ width: "50px" }}
                  type="checkbox"
                  class="btn-check"
                  id={`btn-check-outlined${index}`}
                  autocomplete="off"
                  checked={data.disarr[index]}
                />
                <label
                  class="btn btn-outline-primary"
                  for={`btn-check-outlined${index}`}
                >
                  {p}
                </label>
                <br />
              </div>
            );
          })}
</div>
          </div>
          <div style={{width: "100%"}}>
          <h2 class=" font-bold text-4xl mb-5">Extra Information : </h2>
            <div style={{height:'100%',width: "100%"}}>
              {data?.pastdata?.map((p, index) => {
      
                return (
                  <div class="d-flex" style={{justifyContent:'space-around',marginBottom:'40px'}}>
                    
                    <div  class='flex items-center '>
        <h2 class=" font-bold text-4xl ">Disease : </h2>
          <h3 class=' ml-5 text-4xl'>{p?.name}</h3>
        </div>   
        <div  class='flex items-center '>
        <h2 class=" font-bold text-4xl ">Suffering : </h2>
          <h3 class=' ml-5 text-4xl'>{p?.suff}</h3>
        </div>   
                  
                  
                  </div>
                );
              })}
             
            </div>
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
        }
        </div>

    );


}
export default FamilyMedHistory;