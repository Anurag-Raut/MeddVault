import React, { useState } from "react";
import { useStateContext } from "../../context/ind";

function UserInfo({data}){
    const { addPatient,getAllPatients,contract,getPatient,getPublicInfo,addReport } = useStateContext();
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

    return (
        <div>
            
        <input type="text" id='code-text-box' placeholder="enter code" />
        <button onClick={async()=>{ await handleFind(data.uid,document.getElementById('code-text-box').value);}}>
          get details
        </button>
        {
            displayPrivate?.imageURL?
            <div>
                 <h1>{data?.name}</h1>
          <a target="_blank" href={displayPrivate?.imageURL} >document</a>
            </div>
           
          :
          null

        }

            {/* <button onClick={async()=>{ await addReport(data.uid,document.getElementById('code-text-box').value,'hemlu')}}> */}

            {/* </button> */}

        </div>
       



    );


}
export default UserInfo;