import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDash from "./dashboard-admin";
import UserInfo from "./userinfo";
import { useStateContext } from "../../context/ind";
import Sidebar from "./sidebar-admin";
import AddReport from "./addReport";
import ReadContent from "../user/readcontent";
import Stats from "./statistics";
function Admin(){
    const {connect}=useStateContext();
    const [display,setdisplay]=useState({});
    const [uidaddReport,setuidaddReport]=useState('');
    return(
        <div class='d-flex'>
            <Sidebar/>
            <div style={{width:'100%'}}>
            <Routes>
            <Route path='' element={< Stats />} />
        <Route path='dashboard' element={<AdminDash display={display} setdisplay={setdisplay} setuidaddReport={setuidaddReport} />} />
        <Route path='userInfo' element={<UserInfo data={display} setuidaddReport={setuidaddReport} />} />
        <Route path='addReport' element={<AddReport uid={uidaddReport} />} />
        <Route path="read" element={<ReadContent uuid={uidaddReport}/>} />
        
        
        </Routes>

            </div>
            
        

        </div>
       
        
        
       
    
    
    
    )


}
export default Admin;