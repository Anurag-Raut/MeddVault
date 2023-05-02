
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ind";
// import useAuth0 from "@auth0/auth0-react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { app, database, storage } from '../../firebaseConfig.js';
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import { setDoc ,collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
async function getdoc(docRef) {
    const docSnap = await getDoc(docRef);
    return docSnap;
  }
function Delete({member,muid,update,setupdate,setisread}){
    
    const {connect,address}=useStateContext();
    const [uid,setuuid]=useState('');
    const { loginWithRedirect ,isAuthenticated,user} = useAuth0();
  
    const { addPatient,getAllPatients,contract,getPatient,deletePatient } = useStateContext();
    const [code,setcode]=useState('');
    useEffect(()=>{
        if(member){
         
         
 }
 else{
     const docRf = doc(database, "users", `${user?.sub?.substring(14)}`);
     getdoc(docRf).then((df)=>{
     //   console.log(df.data());
     var id=df?.data()?.uid?df?.data()?.uid:null;
       setuuid(df?.data()?.uid);
        //  if(id){
        //  handleFindPublicInfo(id);}
 
     })
     
 }
 
       },[])
       useEffect(()=>{
         if(member===1){
             setuuid(muid);
            //  handleFindPublicInfo(muid);
         }
 
       },[muid])

    async function handleDelete(){
        const a=await deletePatient(uid,code);
        // console.log(a);
       
        if(a===1){
            await deleteDoc(doc(database, "users", `${user?.sub?.substring(14)}`));
            setupdate(!update);
            setisread(1);
           toast.success('Patient Deleted')
        }
        else{
          toast.error('Patient Not Found')
        }
    }
    return (
       
           
        
            
      <form class='m-10' onSubmit={handleDelete}>
            

            <div>
        <h2 class=" font-bold text-3xl text-black">Code :</h2>
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
          onChange={(e)=>{setcode(e.target.value)}}
         
         
        />
        </div>
      </div>

            
          
        
      <motion.button
            type="button"
            className=" font-bold hover:text-white  h-[50px] border-2   border-solid border-teal-400 hover:bg-teal-400  mt-10 text-teal-300   w-[100px] rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleDelete}
          
          >
            Next
          </motion.button>
          <ToastContainer/>
        </form> 
  
        
        
   
      
       


    );

}
export default Delete;