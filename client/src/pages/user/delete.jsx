import React, { useState } from "react";
import { useStateContext } from "../../context/ind";

function Delete(){
    const {connect,address}=useStateContext();
    const { addPatient,getAllPatients,contract,getPatient,deletePatient } = useStateContext();
    const [code,setcode]=useState('');
    async function handleDelete(){
        const a=await deletePatient(code);
        // console.log(a);
        if(a===1){
            alert('Patient Deleted')
        }
        else{
            alert('Patient Not found')
        }
    }
    return (
        <div>
             {/* <button class='connect' style={{height:'100px',width:'100px'}} onClick={()=>{connect()}}>

</button> */}
             <input onChange={(e)=>{setcode(e.target.value)}} type="text" />
        <button onClick={handleDelete}>

        </button>

        </div>
       


    );

}
export default Delete;