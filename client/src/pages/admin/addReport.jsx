// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers-pro/DesktopDatePicker';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useStateContext } from "../../context/ind";
import { Datepicker, Input, initTE } from "tw-elements";
import { motion } from "framer-motion";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app, database, storage } from "../../firebaseConfig";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// initTE({ Datepicker, Input })
async function getdoc(docRef) {
  const docSnap = await getDoc(docRef);
  return docSnap;
}
function AddReport({ uid }) {
  const d = new Date();
let month = d.getMonth();
  const [data, setdata] = useState({ID:uid});
  const {
    addPatient,
    getAllPatients,
    contract,
    getPatient,
    getMembers,
    getPublicInfo,
    connect,
    addReport,
  } = useStateContext();
 
  return (
    <div
      style={{
        height: "60vh",
        margin: "10%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
        flexDirection: "column",
        color: "black",
      }}
    >
      <div class="mb-4 ml-3 flex">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          ID :
        </label>
        <div class="  ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="standard-basic"
            label="Name"
            variant="standard"
            defaultValue={uid}
            onChange={(e) => {
              var a = data;
              a.ID = e.target.value;
              setdata({ ...a });
            }}
          />
        </div>
      </div>
      <div class="mb-4 ml-3 flex">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          Name :
        </label>
        <div class="  ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          inputProps={{
            style: {
              height: "30px",
              width: "35vw",
              fontSize: "20px",
            },
          }}
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(e) => {
            var a = data;
            a.reason = e.target.value;
            setdata({ ...a });
          }}
        />
        </div>
      </div>

      <div class="mb-4 ml-3 flex">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          Age :
        </label>
        <div class="  ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          inputProps={{
            style: {
              height: "30px",
              width: "35vw",
              fontSize: "20px",
            },
          }}
          id="age"
          type="number"
          label="Name"
          variant="standard"
          onChange={(e) => {
            var a = data;
            a.reason = e.target.value;
            setdata({ ...a });
          }}
        />
        </div>
      </div>

      <div class="mb-4 ml-3 flex">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          Code :
        </label>
        <div class="  ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
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
          onChange={(e) => {
            var a = data;
            a.code = e.target.code;
            setdata({ ...a });
          }}
        />
      </div>
          </div>
          <div class="mb-4 ml-3 flex">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          Diagnosis :
        </label>
        <div class="  ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          inputProps={{
            style: {
              height: "30px",
              width: "35vw",
              fontSize: "20px",
            },
          }}
          id="standard-basic"
          label="Diagnosis"
          variant="standard"
          onChange={(e) => {
            var a = data;
            a.diagnosis = e.target.value;
            setdata({ ...a });
          }}
        />
      </div>
      </div>
      <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          Date Of Appointment :
        </label>
        <div class='w-[15vw]'>
        <Form.Control  type="date" name='date_of_birth'  onChange={(e)=>{
            var a=data;
            a.appDate=e.target.value;
            setdata({...a});
          }} />
        </div>
        
      
      <div>
      <motion.button
        id="addEC"
       
        onClick={async () => {
          console.log(data.ID);
          const docRf = doc(database, "users", `${data.ID}`);
          getdoc(docRf).then(async(df) => {
            await addReport(
              df?.data()?.uid,
              document.getElementById("code-box").value,
              data
            );
            const valref=doc(database,'stats','numberofpatients')
            getdoc(valref).then(async (df)=>{
              console.log(df.data())
              await updateDoc(doc(database, "stats", "numberofpatients"), {
                TotPatients: df.data().TotPatients+1
              });
            })
            const monthref=doc(database,'stats','monthArray')
            getdoc(monthref).then(async (df)=>{
              console.log(df.data())
              var nm=df.data().curryear;
              if(month>=nm.length){
                nm.push(0);
              }
              nm[month]++;
              console.log(nm);
              await updateDoc(doc(database, "stats", "numberofpatients"), {
                curryear: nm
              });
            })
            var d=''
            var age=document.getElementById("age")?.value;

            if(age<10){
              d='010'
            }
            else if(age<20){
              d='1020'
            }
            else if(age<40){
              d='2040';
            }
            else if(age<65){
              d='4065';
            }
            else{
              d='65';
            }

            const ageref=doc(database,'stats','age')
            getdoc(ageref).then(async (df)=>{
             
              var nm=df.data().age;
              nm[d]++;
              console.log(nm);
              await updateDoc(doc(database, "stats", "age"), {
                age: nm
              });
            })

            toast.success(`report added successfully`)
          
            // setuuid(df?.data()?.uid);
          })
          .catch((error)=>{
            console.log(error);
            toast.error(`${error}`)
          })
          
        }}
        type="button"
        className="box border-2 mb-10 h-[50px] border-solid border-teal-400 hover:bg-teal-400  ml-[14vw] mt-10 text-teal-300  justify-center w-[150px] rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Submit
      </motion.button>
        
      </div>
      <ToastContainer/>
    </div>
  );
}
export default AddReport;
