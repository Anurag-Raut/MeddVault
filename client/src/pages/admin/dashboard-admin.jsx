import React, { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { app, database, storage } from '../../firebaseConfig.js'
import { useEffect } from "react";
import { setDoc ,collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";
import { getPublicInfo } from "../../function/public.js";
import { useStateContext } from "../../context/ind";
import { useNavigate } from "react-router-dom";
function AdminDash({display,setdisplay}){
    const [data,setdata]=useState([]);
    const [uuid,setuuid]=useState('');
    const navigate=useNavigate();
    const [displayPrivate,setdisplayPrivate]=useState({});
      const { addPatient,getAllPatients,contract,getPatient,getPublicInfo } = useStateContext();
    var messageref = collection(database, `/users`);
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }
   
      const handleFindPublicInfo = async (uid)=>{
     
        const obj=await getPublicInfo(uid);
        if(obj===''){
            alert('invalid key')
        }
        // console.log(obj);
        setdisplay(obj);

        
    } 
    
      
   
    useEffect(
        () => {
          // console.log(chatInd)
    
          const q = query(messageref);
          onSnapshot(q, (data) => {
            let temp = [];
            let ids = [];
            data.docs.map((item) => {
              temp.push({ ...item.data() });
              
              //   console.log(dataId)
            });
            setdata(temp);
            
          });
    
          //   dummy.current.scrollIntoView({ behavior: 'smooth' });
        },
       []
        
      );
      const handleOnSelect = async(item) => {
        // the item selected
        setuuid(item.uid);
        await handleFindPublicInfo(item.uid);
        navigate('userInfo')
        
        
       
       
      }
      const handleOnFocus = () => {
        console.log('Focused')
      }
      const formatResult = (item) => {
        return (
          <>
            {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
            <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
          </>
        )
      }

      const handleFind = async (uid,code)=>{
     
        console.log(uid,'dsvsv')
        const obj=await getPatient(uid,code);
        if(obj===''){
            alert('invalid key')
        }
        console.log(obj);
        setdisplayPrivate(obj)
        // setdisplay(obj);
    }



      

    return (
    <div>
       

        <ReactSearchAutocomplete
            items={data}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ keys: ["name"] }}
            onFocus={handleOnFocus}
            
          />
          <h1>
          {display.name}
        
          
          </h1>
         
         

    </div>);
}

export default AdminDash;