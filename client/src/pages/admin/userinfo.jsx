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
        console.log(obj);
        setdisplayPrivate(obj)
        // setdisplay(obj);
    }
    console.log(data,'dataaaa');
    const [selected,setselected]=useState(0);

    return (
        <div style={{width:'100vw',height:'100vh',display:"flex"}} >
             
        <div id='rem-div' style={{width:'14vw',height:'100vh',backgroundColor:"#0ad0b2",display:'flex',flexDirection:'column',justifyContent:"space-around"}}>
            <h5 onClick={()=>setselected(0)}>
                Read
            </h5>
            <h5 onClick={()=>setselected(1)} >
                add report
            </h5>
            
            <button onClick={connect}>
            connect
            </button>

            
                
            
            </div>  
    
            
            {selected===0?<ReadContent member={1} muid={data.uid} />
    :
    <AddReport uid={data.uid}/>
    }

        </div>
       



    );


}
export default UserInfo;