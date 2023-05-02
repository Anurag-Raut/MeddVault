import React, { useContext, createContext } from 'react';
import CryptoJS from "crypto-js";
import crypto from 'crypto-js'
import { useAddress, useContract, useMetamask, useContractWrite,useContractRead } from '@thirdweb-dev/react';





const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
 
    const address = useAddress();
    const connect = useMetamask();
    const { contract } = useContract('0xc7F3B11500e2c5aF06197dcBe49D049f7022FE1f');
    const { mutateAsync: addPatient } = useContractWrite(contract, 'addPatient');

    const { mutateAsync: delPatient } = useContractWrite(contract, 'delPatient');
    const {  mutateAsync: getpatient } = useContractWrite(contract, "getPatient");
    const {  mutateAsync: getfamily } = useContractWrite(contract, "getFamilyuid");

    const AddPatient=async (publicdata,privatedata,code,puuid,cuuid)=>{
        try{
         var codee=publicdata.code
         
          var a=publicdata;
          a.uid=puuid;
          a.code='';

       
         
          // const public_data=data;
          var publicText=JSON.stringify(a)
          var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(privatedata), codee).toString();
          
             await addPatient({args:[ciphertext,publicText,puuid,cuuid]}).then(()=>{
    
             })

        }
        catch{

        }
       
    }
   


    const getPatient = async(uid,code)=>{
     const patient=await getpatient({args:[uid]});
      
   
      
      
      var bytes  = CryptoJS?.AES?.decrypt(patient.info, code);
      
      if(bytes.toString(CryptoJS?.enc?.Utf8)===''){
        // alert('invalid key')
        return '';
      }
      else{
      var decryptedData = JSON.parse(bytes.toString(CryptoJS?.enc?.Utf8));
      return decryptedData;
         }
      
        


    
    
    }

    const getPublicInfo = async(uid)=>{
     console.log(uid);
     const patient=await getpatient({args:[uid]});
      // console.log("hello")
    
      if(!patient){
        return '';
      }
      if(patient?.public_info!==''){
        var a=JSON.parse(patient?.public_info)
        return a;
      }

      else{
        return '';
      }
      
    
    }


    const getMembers = async(uuid)=>{
      const patient = await getfamily({args:[uuid]})
      
     
      // var farray=[];
      const farray = await Promise.all(patient.map(async (uid)=>{
      const item =await getPublicInfo(uid);
      return item;
    
        
      }))
      return {farray,patient};

      
      

      
    
    }
    const addReport =async(uuid,code,rdata)=>{
      console.log(code,uuid);
      var data= await getPatient(uuid,code);
      if(data===''){
        alert('invalid key')
        return;
      }
      if(data.pastReports){
        data.pastReports.push(rdata);
      }
      else{
        data.pastReports=[rdata];

      }
      var public_data=await getPublicInfo(uuid);
      public_data.code=code;



      await AddPatient(public_data,data,code,uuid,uuid);
      
     
     
      // return data;
     


    }
    

    const deletePatient=async(uid,code)=>{
      try{
          console.log(uid,code);
        const patient=await getpatient({args:[uid]});
      
        var bytes  = CryptoJS?.AES?.decrypt(patient.info, code);
      
      if(bytes.toString(CryptoJS?.enc?.Utf8)===''){
        
        return '';
      }
      else{
        await delPatient({args:[uid]})
        return 1;
         }
      
        
        
       
        
     
         
           

      
      }
      catch{

      }
    



    }


    
 

    return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            connect,
            addPatient: AddPatient,
           
            getPatient:getPatient,
            deletePatient:deletePatient,
            getMembers:getMembers,
            getPublicInfo:getPublicInfo,
            addReport:addReport
           
          }}
        >
          {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);