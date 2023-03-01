import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useStateContext } from "../../context/ind";

import { Web3Storage } from "web3.storage";
import { useAuth0 } from "@auth0/auth0-react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { app, database, storage } from '../../firebaseConfig.js'
import { setDoc ,collection, addDoc, getDocs,getDoc, doc, updateDoc, deleteDoc ,onSnapshot,query,where} from "firebase/firestore";
async function getdoc(docRef) {
  const docSnap = await getDoc(docRef);
  return docSnap;
}
function WriteContent() {
    // let db_connect = dbo.getDb("emrdb");
    const { loginWithRedirect ,isAuthenticated,user} = useAuth0();
    const curr_auth_id=user?.sub?.substring(14);
    const collectionRef = collection(database, 'users')
    // user.data=uuidv4();
    // console.log(user);
  const { connect, address } = useStateContext();
  const [display, setdisplay] = useState({});
  
  const [uid, setuuid] = useState('');
  useEffect(()=>{
    const docRf = doc(database, "users", `${user?.sub?.substring(14)}`);
    getdoc(docRf).then((df)=>{
      console.log(df.data());
      setuuid(df?.data()?.uid)

    })
  },[])

  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2MmMzMzA3OTkxRmM0Nzg0NzNmMmMwMDFmNzBCMGFFQTE2ZjM0NzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzczNDIxNDI0NTAsIm5hbWUiOiJzdG9yZTIifQ.K2OCaGVt86PlyD7Tyq71NMCrxwuxK9xmflbYNe0_cIo",
  });

  const { addPatient, getAllPatients, contract, getPatient,getMembers,getPublicInfo } =
    useStateContext();
  const [parray, setparray] = useState([]);
const [memberids,setmemberids]=useState([]);
  useEffect(() => {
    // console.log(address);
  }, [address]);

  async function check(uuid) {
    console.log(uuid);
    const obj = await getPublicInfo(uuid);
    // console.log(obj);
    setdisplay(obj);
    return obj;
  }

  // console.log(display.imageUrl);

  const handleAddUser = async (e) => {
    e.preventDefault();
  
    // await setDoc(doc(database, "users", uuid), {
    //   id
    // });
   
    var name = document.getElementById("name-text").value;
    var code = document.getElementById("code-text").value;
    // console.log(name,code,uuid)
    // var a = await check(uid);
    // // console.log(a);
    // if (a === "") {
    // } else {
    //   alert("data already exist");
    //   return;
    // }

    // const fileInput = document.querySelector('input[type="file"]');
    // const rootCid = await client.put(fileInput.files);
    // const imageURL =
    //   "https://" + rootCid + ".ipfs.w3s.link/" + fileInput.files[0].name;

    // // console.log(imageURL);
    // console.log(name, code, imageURL);

    // await addPatient(name, code, imageURL,uid,uid);
    await updateDoc(doc(database, "users", curr_auth_id), {
      name:name,
    });
    // setuuid(uid);
  };
  const handleAddMember = async (e) => {
    e.preventDefault();
    var uuid=uuidv4();
   
    var name = document.getElementById("member-name-text").value;
    var code = document.getElementById("code-text").value;
    var a = await check(uuid);
    // console.log(a);
    if (a === "") {
    } else {
      alert("data already exist");
      return;
    }

    const fileInput = document.querySelector('input[type="file"]');
    const rootCid = await client.put(fileInput.files);
    const imageURL =
      "https://" + rootCid + ".ipfs.w3s.link/" + fileInput.files[0].name;

      const p=await getPublicInfo(uid);
      var puid=p.uid;
      

    await addPatient(name, code, imageURL,puid,uuid);
  };




  const handleGetMemebers=async()=>{
    // var code = document.getElementById("code-text").value;
    const p=await getPublicInfo(uid);
    console.log(p,'pppppppppppppppppppppppppppppppppppppppp');
    console.log(uid);
    await getMembers(p.uid).then((res)=>{
      // console.log(res.farray,res.patient);
    setparray(res.farray);
    setmemberids(res.patient);

    })
    
    // console.log(parray,'parray');
   

  }
  console.log(memberids,'hhemliiiiiiiiiiii');

  return (
    <div >
      <div>
        <button
          class="connect"
          style={{ height: "100px", width: "100px" }}
          onClick={() => {
            connect();
          }}
        ></button>
        <h1>HEllo</h1>
        <form onSubmit={handleAddUser}>
          name
          <input id="name-text" type="text" />
          code
          <input id="code-text" type="text" />
          <input id="file-text" type="file" />
          <button
            type="submit"
            style={{ height: "40px", width: "40px" }}
          ></button><br />
          {uid}
        </form>

        <form onSubmit={handleAddMember}>
          name
          <input id="member-name-text" type="text" />
          code
          
    
          <button
            type="submit"
            
          >AddFamilyMember</button>
        </form>
      </div>
      <div>
        <button onClick={handleGetMemebers}>
            Show Members
        </button>
      {parray?.map((p,index)=>{
        // console.log(p);
        return <div class='d-flex'>

        <h1>{p.name}</h1>
        <h2>{memberids[index]}</h2>
        </div>
      
      })}


      </div>
    </div>
  );
}
export default WriteContent;
