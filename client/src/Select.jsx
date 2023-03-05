import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Delete from "./pages/user/delete";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app, database, storage } from "./firebaseConfig.js";
import { useNavigate } from "react-router-dom";
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
import Navbar from "./pages/user/navbar";
import ReadContent from "./pages/user/readcontent";
import WriteContent from "./pages/user/writecontent";
import { useAuth0 } from "@auth0/auth0-react";
import LoggedInUser from "./pages/user/loggedIn";
import AdminDash from "./pages/admin/dashboard-admin";
import { Link } from "react-router-dom";
import Admin from "./pages/admin/admin";
import { display } from "@mui/system";

function Select(){
    const navigate=useNavigate();

    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const [userbool,setuserbool]=useState(0);
    // var id = "";
    // if (isAuthenticated) {
    //   id = user?.sub?.substring(14);
    //   //  console
    // }
    return(
        <div>
       { userbool===0?

        <div  style={{width:'100%',height:'100vh',display:'flex',justifyContent:'space-around',alignItems:"center"}} >

            <Link onClick={()=>setuserbool(1)} >
        user
            </Link>
            <Link onClick={()=>setuserbool(2)}>
        admin
            </Link>
            
        </div>

        :
        userbool===1?(
        <LoggedInUser id={user?.sub?.substring(14)} />)
        :
        <Admin/>

}
</div>

    )
}
export default Select;