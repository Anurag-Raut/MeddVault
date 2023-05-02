import React, { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { app, database, storage } from '../../firebaseConfig.js'
import { useEffect } from "react";
import { setDoc ,collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";
import { getPublicInfo } from "../../function/public.js";
import { useStateContext } from "../../context/ind";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { motion } from "framer-motion";
import InputBox from "../../components/inputbox.jsx";
import { TextField } from "@mui/material";
import Tablee from "../../components/table.jsx";
import AddReport from "./addReport.jsx";
function AdminDash({display,setdisplay,setuidaddReport}){
    const [data,setdata]=useState([]);
    const [uuid,setuuid]=useState('');
 
    const navigate=useNavigate();
    const [displayPrivate,setdisplayPrivate]=useState({});
      const { addPatient,getAllPatients,contract,getPatient,getPublicInfo } = useStateContext();
    var collectionRef = collection(database, `/users`);
  
    const imagefunc = async (uid)=>{
     
      const obj=await getPublicInfo(uid);
     if(obj?.profile){
      return obj.profile;
     }
     else{
      return '';
     }
     

      
  } 
   
    async function funn (){
     
      // const q = query(messageref);
      // onSnapshot(q,(data,index) => {
      //   let temp = [];
      //   let ids = [];
       
      //   data.docs.map(async(item) => {
          
      //     temp.push({ ...item.data() });
          
      //     // console.log(item.data(),'chibedsgbrdsjkgb');
         
          
      //     //   console.log(dataId)
      //   });
      //   setdata([...temp]);
       
        
      // });
      const tempurl=await Promise.all(data.map(async(item,i)=>{
        var a=await imagefunc(item.uid);
        var temp=data;
        temp[i].profile=a;
        setdata(temp);
        return a;
       

      }))
     

    }

    async function findPatients(querytext=''){
      // console.log(querytext)
      const q = query(collectionRef, where('name', '>=', querytext), where('name', '<', querytext + '\uf8ff'));
      const querySnapshot = await getDocs(q);
      const tempdata=[];
      for (var i in querySnapshot.docs) {
        const doc = querySnapshot.docs[i]
        tempdata.push(...[{id:doc.id,data:doc.data()}]);
  }
  setdata(tempdata);


     
     
  

    }
    
    useEffect(()=>{
      findPatients('');
    },[])
      
  
   

      

    return (
    <motion.div  >
       <motion.div className="flex flex-col items-center"  >
       <InputBox  findPatients={findPatients} />
       <Tablee setuidaddReport={setuidaddReport}  data={data}/>
       
       
      
       </motion.div>

       
         
         
         

    </motion.div>);
}

export default AdminDash;