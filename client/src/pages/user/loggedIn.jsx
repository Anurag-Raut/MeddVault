import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app, database, storage } from "../../firebaseConfig.js";
import {
  setDoc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Navbar from "./navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Delete from "./delete.jsx";
import ReadContent from "./readcontent.jsx";
import WriteContent from "./writecontent.jsx";
import { v4 as uuidv4 } from 'uuid';
async function getdoc(docRef) {
  const docSnap = await getDoc(docRef);
  return docSnap;
}

function LoggedInUser({id}) {
    // var uid=uuidv4();
    async function setdoc(id,uid) {
        await setDoc(doc(database, "users", id), {
          uid:uid,
        });
        const docRf = doc(database, "users", `${id}`);
         getdoc(docRf).then((df)=>{
           
            setdocref(df);
            if(df._document)
                setbool(1);
         });
        
      }
      const[bool,setbool]=useState(0);
  const [docref, setdocref] = useState();
  function dr(){
    // console.log(id);
    const docRef = doc(database, "users", `${id}`);
    const docf = getdoc(docRef).then(()=>{
        // setdocref(docf);
    });

    // if(docf.exists){
    //     return 1;
    // }
    return docf;


  }
  useEffect(()=>{
    const docRef = doc(database, "users", `${id}`);
    getdoc(docRef).then((docf)=>{
        console.log(docf)
        if(docf._document){
            setbool(1);
            setdocref(docf);
        }
        
    })
   

  },[])
//   console.log(id);
 
//   setdocref(docf);
  
  return (
    <div>
          <Navbar />
         {/* {console.log(docref?.exists)} */}
      {
        // console.log(user?.sub?.substring(14));
        // setid(user?.sub?.substring(14));
        // var id=user?.sub?.substring(14);
        // if(id && id!=='')
        // {
        
       
        bool===0? (
          // setfirst(0);
          <div>
            {/* <input type="text" /> */}
            <button onClick={() => setdoc(id,uuidv4())}> create new user</button>
            <input type="text" id="already-user-id" />
        
            <button onClick={() => setdoc(id,document.getElementById('already-user-id').value)}> already have an userid?</button>
            {
                
            // setdocref(dr())
            }
          </div>
        ) : (
          <div>
          
            <Routes>
              <Route path="/" element={<WriteContent  />} />
              <Route path="/read" element={<ReadContent />} />
              <Route path="/delete" element={<Delete />} />
            </Routes>

            {/* <WriteContent/> */}
          </div>
        )
      }
    </div>
  );
}
export default LoggedInUser;