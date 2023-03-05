import React, { useContext, createContext } from 'react';
import CryptoJS from "crypto-js";
import crypto from 'crypto-js'
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';





const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
 
    const address = useAddress();
    const connect = useMetamask();
    const { contract } = useContract('0x9661cf0d263e28c2264c4fbeBDaEC06CCbAeb27F');
    const { mutateAsync: addPatient } = useContractWrite(contract, 'addPatient');

    const { mutateAsync: delPatient } = useContractWrite(contract, 'delPatient');
  

    const AddPatient=async (publicdata,privatedata,code,puuid,cuuid)=>{
        try{
         var codee=publicdata.code
         
          var a=publicdata;
          a.uid=puuid;
          a.code='';

          console.log(publicdata.code,'pleaseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

         
         
          // const public_data=data;
          var publicText=JSON.stringify(a)
          var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(privatedata), codee).toString();
          console.log(ciphertext);
             await addPatient([ciphertext,publicText,puuid,cuuid])

        }
        catch{

        }
       
    }
   


    const getPatient = async(uid,code)=>{
      const patient = await contract.call('getPatient',uid);
      
      console.log(patient);
      
      
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
      const patient = await contract.call('getPatient',uid);
      
      console.log(patient);
      if(patient.public_info!==''){
        var a=JSON.parse(patient.public_info)
        return a;}

      else{
        return '';
      }
      
    
    }


    const getMembers = async(uuid)=>{
      const patient = await contract.call('getFamilyuid',uuid);
      
      console.log(patient);
      // var farray=[];
      const farray = await Promise.all(patient.map(async (uid)=>{
      const item =await getPublicInfo(uid);
      return item;
    
        
      }))
      return {farray,patient};

      
      

      
    
    }
    const addReport =async(uuid,code,rdata)=>{
      console.log('yjgccccccccccccccccccccccccccccccccccccccccccccccccccccccccc');
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
      console.log(data);



      await AddPatient(data,code,uuid,uuid);
      
     
     
      // return data;
     


    }
    

    const deletePatient=async(code)=>{
      try{

        const patient = await contract.call('getPatient',code);
      
      
        
        
        var bytes  = CryptoJS.AES.decrypt(patient.info, code);
        if(bytes.toString(CryptoJS.enc.Utf8)===''){
         
          return code;
        }
        else{
          await delPatient([code])
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