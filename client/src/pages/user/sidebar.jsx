import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBook,
  faDeleteLeft,
  faPen,
  faSearch,
  faSignOut,
  faTrash,
  faUmbrella,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ind";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "react-avatar";

function Sidebar() {
  const navigate = useNavigate();
  const [show, setshow] = useState(0);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { connect, address } = useStateContext();

  return (
    <motion.div
      onHoverEnd={() => {
        setshow(0);
      }}
      onHoverStart={() => {
        setshow(1);
      }}
      whileHover={{ width: "17%" }}
      style={{
        height: "100vh",
        width: "4vw",
        backgroundColor: "#0ad0b2",
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div class="profile d-flex" style={{ height: "50px" }}>
        {show ? (
          <motion.div class="d-flex">
            <Avatar style={{marginLeft:'5px'}} size="3vw" round={true} name={user.name} />
            <motion.h1
              onClick={() => {
                logout({ returnTo: "https://meddvault.netlify.app/" });
              }}
              class=' font-bold ml-4'
              style={{fontSize:'1.5vw'}}
              animate={{ x: 0 }}
              initial={{ x: "-100px" }}
              transition={{ duration: 0.3 }}
              exit={{ x: "-100px" }}
            >
              {user.name}
            </motion.h1>
          </motion.div>
        ) : (
           
            <Avatar style={{marginLeft:'5px'}} size="3vw" round={true} name={user.name} />
      
           
        )}
      </div>
    
      <div class="conten" style={{height:'30vh', display: "flex", flexDirection: "column" ,justifyContent:"space-between" }}>
        {
          <div
            class="d-flex"
            style={{ height: "50px", marginLeft: "1vw" }}
            onClick={() => navigate("")}
          >
            <div style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={faPen} />
            </div>
            {show ? (
              <motion.h3
                class="text-4xl font-bold ml-5"
                style={{ marginLeft: "2vw" ,fontSize:'1.8vw'}}
                animate={{ x: 0 }}
                initial={{ x: "-100px" }}
                transition={{ duration: 0.3 }}
                exit={{ x: "-100px" }}
              >
                Dashboard
              </motion.h3>
            ) : null}
          </div>
        }
       
        {
          <div
            class="d-flex"
            style={{ height: "50px", marginLeft: "1vw" }}
            onClick={() => navigate("addmember")}
          >
            <div style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={faAdd} />
            </div>
            {show ? (
              <motion.h3
                class="pr-5  font-bold ml-5"
                style={{ marginLeft: "2vw",fontSize:'1.8vw' }}
                animate={{ x: 0 }}
                initial={{ x: "-100px" }}
                transition={{ duration: 0.3 }}
                exit={{ x: "-100px" }}
              >
                Add Member
              </motion.h3>
            ) : null}
          </div>
        }
        {
          <div
            class="d-flex"
            style={{ height: "50px", marginLeft: "1vw" }}
            onClick={() => navigate("delete")}
          >
            <div style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
            {show ? (
              <motion.h3
              
                class="text-4xl font-bold ml-5"
                style={{ marginLeft: "2vw",fontSize:'1.8vw' }}
                animate={{ x: 0 }}
                initial={{ x: "-100px" }}
                transition={{ duration: 0.3 }}
                exit={{ x: "-100px" }}
              >
                Delete
              </motion.h3>
            ) : null}
          </div>
        }
        {
          <div
            class="d-flex"
            style={{ height: "50px", marginLeft: "1vw" }}
            
          >
            <div style={{ fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={faSignOut} />
            </div>
            {show ? (
              <motion.h3
              
                class="text-4xl font-bold ml-5"
                style={{ marginLeft: "2vw",fontSize:'1.8vw' }}
                animate={{ x: 0 }}
                initial={{ x: "-100px" }}
                transition={{ duration: 0.3 }}
                exit={{ x: "-100px" }}
                onClick={() => {
                    logout({ returnTo: "https://meddvault.netlify.app/" });
                  }}
              >
                Log Out
              </motion.h3>
            ) : null}
          </div>
        }

      </div>
      <div class="sign-out"></div>
    </motion.div>
  );
}
export default Sidebar;
