import React, { useState } from "react";


function Bar({activeStep,setActiveStep}){

   
    return(
        <div id='rem-div' style={{width:'15vw',height:'90vh',backgroundColor:"white",display:'flex',flexDirection:'column',justifyContent:"space-around",alignItems:'center'}}>
            <div style={{width:'15vw',height:'90vh',backgroundColor:"white",display:'flex',flexDirection:'column',justifyContent:"space-around",alignItems:'center'}} >
         
            <h5 onClick={()=>setActiveStep(0)}>
                Basic Info
            </h5>
            <h5 onClick={()=>setActiveStep(1)} >
                Contact Info
            </h5>

            <h5 onClick={()=>setActiveStep(2)} >
                Past Medical History
            </h5>

            <h5 onClick={()=>setActiveStep(3)} >
                Past Reports 
            </h5>
                   
            </div>
                
            
            </div>  
    );

}
export default Bar;