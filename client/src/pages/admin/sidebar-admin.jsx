import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ind";
import { useAuth0 } from "@auth0/auth0-react";
function Sidebar(){
    const [show,setshow]=useState(0);
    const { loginWithRedirect, isAuthenticated, user,logout } = useAuth0();
    const { connect, address } = useStateContext();
    console.log(user);
    return (

        <motion.div onHoverEnd={()=>{setshow(0)}} onHoverStart={()=>{setshow(1)}} whileHover={{width:'14vw'}} style={{height:'100vh' ,width:'4vw',backgroundColor:'black',flexDirection:'column',display:'flex',justifyContent:"space-between"}}>
                <div class="profile d-flex">
                    {
                        show?
                        <motion.div class='d-flex' >
                            
                            <FontAwesomeIcon  icon={faUser} style={{marginTop:'10px'}} />
                            <motion.h1 onClick={logout} animate={{x:0}} initial={{x:'-100px'}} transition={{duration:0.3}} exit={{x:'-100px'}} >{user?.name}</motion.h1>
                        </motion.div>
                        
                        
                        :<FontAwesomeIcon style={{marginTop:'10px'}} icon={faUser} />
                       
                    }
                 {/* <FontAwesomeIcon icon={faUser} /> */}
                </div>
                <div class="content">
                    <div style={{height:'30px',width:'30px',backgroundColor:'white',marginTop:'20px'}} >
                    <Link class="nav-link" to="">read</Link>
                    </div>
                    <div style={{height:'30px',width:'30px',backgroundColor:'white',marginTop:'20px'}}>
                    <Link class="nav-link" to="userInfo">add report</Link>
                    </div>
                    

                </div>
                <div class="sign-out">
                <button type="button" class="btn btn-primary" onClick={connect}>Primary</button>
                </div>

        </motion.div>
    );

}
export default Sidebar;