import { input } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./form.css";

import { motion } from "framer-motion";
// import {faPlus} from "https://fontawesome.com/icons/plus?s=solid&f=sharp;"
function ContactInfo({ privatedata, setprivatedata }) {
  const dummy = useRef();

  const [emergencyContact, setEC] = useState([]);
  useEffect(() => {
    var a = privatedata;
    a.emergencyContact = emergencyContact;
    setprivatedata({ ...a });
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [emergencyContact]);

  const [rotate, setRotate] = React.useState(false);
  return (
   < div>
    <div
      style={{
        height: "70vh",
        // margin: "10%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
        flexDirection: "column",
      }}
    >
      <div class="mb-4">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black"
        >
          Enter Your Contact Number
        </label>
        <div class=" ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="first_name"
            placeholder="John"
            required
            onChange={(e) => {
              var a = privatedata;
              a.contact = e.target.value;
              setprivatedata({ ...a });
            }}
          />
        </div>
      </div>
      <div
        class="container flex flex-col  "
        style={{ overflowX: "auto", MaxHeight: "50vh", width: "45vw" }}
      >
       <label
                    for="first_name"
                    class="text-3xl block mb-2  font-medium text-gray-900 dark:text-black"
                  >
                    Add Emergency Contact Info
                  </label>

        {emergencyContact?.map(({ val, relation }, index) => {
          return (
            <div
              class="d-flex"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "35vw",
                }}
              >
                <div class=" ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
                  <label
                    for="first_name"
                    class="text-lg block mb-2  font-medium text-gray-900 dark:text-black"
                  >
                    Name
                  </label>
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    id="first_name"
                    onChange={(e) => {
                      var a = emergencyContact;
                      a[index].val = e.target.value;
                      setEC([...a]);
                    }}
                    label={`Mobile Number ${index + 1}`}
                    variant="standard"
                  />
                </div>
                <div class=" ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
                  <label
                    for="first_name"
                    class=" text-lg block mb-2  font-medium text-gray-900 dark:text-black"
                  >
                    Relation
                  </label>
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    id="first_name"
                    onChange={(e) => {
                      var a = emergencyContact;
                      a[index].relation = e.target.value;
                      setEC([...a]);
                    }}
                    required
                  />
                </div>
                {/* <input id="outlined-basic" label="Relation" variant="outlined"  onChange={(e)=>{var a=emergencyContact;a[index].relation=e.target.value;setEC([...a])}} /> */}
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className="hover:scale-125 "
                onClick={() => {
                  var a = emergencyContact;
                  a.splice(index, 1);
                  setEC([...a]);
                }}
              />
            </div>
          );
        })}

        {/* <FontAwesomeIcon icon={faPlus} ref={dummy} onClick={()=>{console.log('hi');var a=emergencyContact;a.push({val:"",relation:''});setEC([...a]);}}/> */}
      </div>
      
    </div>
    <motion.button
        id="addEC"
        ref={dummy}
        onClick={() => {
          var a = emergencyContact;
          a.push({ val: "", relation: "" });
          setEC([...a]);
        }}
        type="button"
        className="box border-2 mb-10 h-[50px] border-solid border-teal-400 hover:bg-teal-400  ml-[14vw] mt-10 text-teal-300  justify-center w-[150px] rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Add contact
      </motion.button>
    </div>
  );
}
export default ContactInfo;
