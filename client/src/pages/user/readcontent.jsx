
import React, { useEffect } from "react";
import { useState } from "react";
// import { useStateContext } from './context';
import { useStateContext } from "../../context/ind";

// import { create } from 'ipfs-http-client'
// import { ImageUpload } from 'react-ipfs-uploader'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { app, database, storage } from '../../firebaseConfig.js'
import { setDoc ,collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";
import { Web3Storage } from 'web3.storage';
import { useAuth0 } from "@auth0/auth0-react";
async function getdoc(docRef) {
    const docSnap = await getDoc(docRef);
    return docSnap;
  }
function ReadContent(){
    const [imageUrl, setImageUrl] = useState('')
    const {connect,address}=useStateContext();
    const [display,setdisplay] =useState({});
    const [id,setid] =useState('');
    const [code,setCode]=useState('');
    const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2MmMzMzA3OTkxRmM0Nzg0NzNmMmMwMDFmNzBCMGFFQTE2ZjM0NzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzczNDIxNDI0NTAsIm5hbWUiOiJzdG9yZTIifQ.K2OCaGVt86PlyD7Tyq71NMCrxwuxK9xmflbYNe0_cIo' })
    const { loginWithRedirect ,isAuthenticated,user} = useAuth0();
    const { addPatient,getAllPatients,contract,getPatient,getPublicInfo } = useStateContext();
    const [parray,setparray]=useState([]);
    const [uid,setuuid]=useState('');
    useEffect(()=>{
       
        const docRf = doc(database, "users", `${user?.sub?.substring(14)}`);
        getdoc(docRf).then((df)=>{
        //   console.log(df.data());
        var id=df?.data()?.uid;
          setuuid(df?.data()?.uid);
          handleFindPublicInfo(id);
    
        })

      },[])
    const handleFind = async (e)=>{
        e.preventDefault();
        console.log(uid,'dsvsv')
        const obj=await getPatient(uid,code);
        if(obj===''){
            alert('invalid key')
        }
        console.log(obj);
        // setdisplay(obj);
    }

    const handleFindPublicInfo = async (uid)=>{
     
        const obj=await getPublicInfo(uid);
        if(obj===''){
            alert('invalid key')
        }
        // console.log(obj);
        setdisplay(obj);

        
    } 
    
   
    // console.log(display?.imageUrl);
  const [name, setname] = useState('');
    

     
   

     



    return(
        <div>
            <button class='connect' style={{height:'100px',width:'100px'}} onClick={()=>{connect()}}>

            </button>
            <h1>
                HEllo
            </h1>
      
        <form onSubmit={handleFind}>


        code<input onChange={(e)=>{setCode(e.target.value)}} type="text" />
        
        <button  type="submit" style={{height:'40px',width:'40px'}}></button>
            <h3>{display?.name}</h3>
            <a href={display.uid} alt="" >
                hemlu
                </a>
        </form>

      


        </div>

    )
}
export default ReadContent;





