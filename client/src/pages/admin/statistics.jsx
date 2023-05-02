import React, { useEffect, useState } from "react";
import PieChartGraph from "../../components/charts/piechart";
import StackedAreaGraph from "../../components/charts/stackedAreaChart";
import AnimatedNumbers from "react-animated-numbers";
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
  const month=['Jan','Feb','Mar',"Apr",'May',"Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
export default function Stats(){
    const stylee = {
 
        // Adding media query..
        '@media screen (min-width: 500px)': {
            display:"none",
            flexDirection:"column"
          },
      };
    const [pieData,setPieData]=useState([]);
    const [stackData,setstackData]=useState([]);
    const[num,setNum]=useState();
    async function getAge(){
        const docSnap = await getDoc(doc(database,'stats','age'));
        console.log(docSnap.data());
        const pieDataa=[];
        var a=docSnap.data().age;
        var jn=65;

        pieDataa.push({name:"0 - 10", value:a['010']})
        pieDataa.push({name:"10 - 20", value: a['1020']})
        pieDataa.push({name:"20 - 40", value: a['2040']})
        pieDataa.push({name:"40 - 65", value: a['4065']})
        pieDataa.push({name:"65 and above",value: a['65']})
        setPieData(pieDataa);
      
    }
    async function getNoOfPat(){
        const docSnap = await getDoc(doc(database,'stats','numberofpatients'));
        console.log(docSnap.data())
        setNum(docSnap.data().TotPatients);
    }
    async function getmonthArray(){
        const docSnap = await getDoc(doc(database,'stats','monthArray'));
        console.log(docSnap.data())
        var past=docSnap.data().lastyear;
        var last=docSnap.data().curryear;
        var mdata=[];
        for(var i=0;i<12;i++){
            mdata.push({name:month[i],"Last Year":past[i],"Current Year":last[i]});

        }
        setstackData(mdata);

        
    }
    
        useEffect(()=>{
            getAge();
            getNoOfPat();
            getmonthArray();
            
        },[])
        return(
            <div class='w-[80vw] h-[100vh] flex flex-col items-center justify-around' >
                
                <div class='flex justify-around w-[80vw] h-[40vh] '>
                    <div class='w-[60vw]' style={{minWidth:'600px'}}>
                        <h1 class='text-black  font-bold ' style={{fontSize:'2vw'}}>Age Distribution :</h1>
                    <PieChartGraph data={pieData} />

                    </div>

                    <div>
                    <h1 class='text-black text-3xl font-bold '>No of patients visited today :</h1>

                    <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 40,color:"black",fontSize:'10vw' }}
        locale="en-US"
        configs={[{"mass":1,"tension":130,"friction":40},{"mass":2,"tension":140,"friction":40},{"mass":3,"tension":130,"friction":40}]}
      />

                    </div>
                
               
                
               
                </div>
                <div class='w-[60vw] h-[30vh]'>
                <h1 class='text-black  font-bold ' style={{fontSize:'3vw'}}>Number of patients visited : </h1>
                <StackedAreaGraph data={stackData}/>
                </div>


            </div>


        );

}