import React, { useState } from "react";
import { useStateContext } from "../../context/ind";
import ReadContent from "../user/readcontent";
import AddReport from "./addReport";

function UserInfo({data}){
    const { addPatient,getAllPatients,contract,getPatient,getPublicInfo,addReport,connect } = useStateContext();
    const [displayPrivate,setdisplayPrivate]=useState({});
    
    const handleFind = async (uid,code)=>{
     
        // console.log(uid,'dsvsv')
        const obj=await getPatient(uid,code);
        if(obj===''){
            alert('invalid key')
        }
        setdisplayPrivate(obj)
        // setdisplay(obj);
    }
    const [selected,setselected]=useState(0);

    return (
        <div style={{width:'100vw',height:'100vh',display:"flex"}} >
             
       <ReadContent member={1} muid={data.uid} />
 


        </div>
    );


}
export default UserInfo;