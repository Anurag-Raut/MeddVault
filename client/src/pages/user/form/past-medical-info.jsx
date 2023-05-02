import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  input,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./form.css";
import { motion } from "framer-motion";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const dis = [
  "Cancer",
  "dsv",
  "arberb",
  "abab",
  "aergaerg",
  "aasg",
  "agawg",
  "rsgva",
  "asga",
  "arga",
];

function PastMedInfo({ privatedata, setprivatedata, disarr }) {
  const dummy = useRef();

  const [pastData, setpastData] = useState([{ suff: "No" }]);

  useEffect(() => {
    var a = privatedata;
    a.pastdata = pastData;
    setprivatedata({ ...a });
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [pastData]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  var disarr = Array.from({ length: 10 });
  disarr.fill(false);

  return (
    <div
      class="container"
      style={{
        height: "70vh",
        // margin: "10%",
        width: "100%",
        // display: "flex",
        // justifyContent: "space-around",
        // alignItems: "space-around",
        // flexDirection: "column",
        overflow: "auto",
      }}
    >
      <div style={{ width: "100%", marginBottom: "50px" }}>
      <label
          for="first_name"
          class="block text-3xl mb-3  font-medium text-gray-900 dark:text-black"
        >
          Did you suffered from any of this diseases
        </label>

        <div class="grid grid-cols-4 gap-4">
          {dis.map((p, index) => {
            return (
              <div>
                <input
                  style={{ width: "50px",color:"teal" }}
                  type="checkbox"
                  class="btn-check "

                  id={`btn-check-outlined${index}`}
                  autocomplete="off"
                  onChange={(e) => {
                    var a = privatedata;
                    if (a.disarr) {
                      a.disarr[index] = e.target.checked;
                    } else {
                      a.disarr = disarr;
                      a.disarr[index] = e.target.checked;
                    }
                    setprivatedata({ ...a });
                  }}
                />
                <label
                  class="btn btn-outline-primary"
                  for={`btn-check-outlined${index}`}
                >
                  {p}
                </label>
                <br />
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ width: "100%" }}>
      <label
          for="first_name"
          class="block text-2xl mb-3  font-medium text-gray-900 dark:text-black"
        >
          Did you suffered from any of this diseases
        </label>
        <div style={{ height: "100%", width: "100%" }}>
          {pastData.map((p, index) => {
            return (
              <div
                class="d-flex"
                style={{ justifyContent: "space-around", marginBottom: "40px" }}
              >
                <div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2  font-medium text-gray-900 dark:text-black"
                    >
                      Enter the name of Disease
                    </label>
                    <div class=" ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      id="first_name"
                      
                      required
                      onChange={(e) => {
                        var a = pastData;
                        a[index].name = e.target.value;
                        setpastData([...a]);
                      }}
                    />
                  </div>
                  </div>
                  <div>
                    <h3 class="label">Are You Still Suffering from it?</h3>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        class="sr-only peer"
                        onChange={(e) => {
                          if (e.target.checked) {
                            var a = pastData;
                            a[index].suff = "Yes";
                            setpastData([...a]);
                          } else {
                            var a = pastData;
                            a[index].suff = "No";
                            setpastData([...a]);
                          }
                        }}
                      />
                      <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                     
                    </label>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    var a = pastData;
                    a.splice(index, 1);
                    setpastData([...a]);
                  }}
                />
              </div>
            );
          })}
           <motion.button
        id="addEC"
      
        onClick={() => {
          var a = pastData;
          a.push({ suff: "No" });
          setpastData([...a]);
        }}
        ref={dummy}
        type="button"
        className="box hover:text-white font-bold border-2 mb-10 h-[50px] border-solid border-teal-400 hover:bg-teal-400  ml-[14vw] mt-10 text-teal-300  justify-center w-[150px] rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Add Info
      </motion.button>
          
        </div>
      </div>
    </div>
  );
}

export default PastMedInfo;
