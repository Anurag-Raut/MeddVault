import { defaultAbiCoder } from "ethers/lib/utils";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ind";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAuth0 } from "@auth0/auth0-react";
// import { user } from "firebase-functions/v1/auth";
import Avatar from "react-avatar";

function RightPanel({uid,update,setmuid,parray,setparray}){
    const {
        addPatient,
        getAllPatients,
        contract,
        getPatient,
        getMembers,
        getPublicInfo
      } = useStateContext();
   
    const [memberids, setmemberids] = useState([]);
    const { connect, address } = useStateContext();
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const handleGetMemebers = async () => {
        // var code = document.getElementById("code-text").value;
      
        const p = await getPublicInfo(uid);
       
        
        await getMembers(p?.uid).then((res) => {
          // console.log(res.farray,res.patient);
          setparray(res?.farray);
          setmemberids(res?.patient);
        });
    
  
      };

      useEffect(()=>{
  
        if(uid){
            handleGetMemebers();}
      },[update])
      useEffect(()=>{
  
        if(uid){
            handleGetMemebers();}
      },[uid]);
      useEffect(()=>{

        if(uid){
            handleGetMemebers();}
      },[address])
      useEffect(()=>{

        if(uid){
            handleGetMemebers();}
      },[user])
      setTimeout(()=>{
        if(parray===[]){
        handleGetMemebers();}
      },3000)

      

    return (
        <div style={{height:'100vh',width:'15vw',backgroundColor:'black',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{marginTop:'20px'}}>
            <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
            </div>
            <h1 class='font-bold text-3xl'>
                    Members
                </h1>
            <div style={{height:'40vh'}} >
                
            {
                parray.map((p,index)=>{
                    return(<Link to='member'> <h2 onClick={()=>{setmuid(memberids[index])}} style={{marginTop:'5vh'}}> <div class='w-[10vw] flex justify-between'>  <Avatar style={{marginLeft:'5px'}} size="2.5vw" round={true} name={p.name} /> <span class='font-bold text-2xl'> { p.name}</span></div></h2> </Link> )

                })
            }

        </div>


        </div>
        

    );
}
export default RightPanel;