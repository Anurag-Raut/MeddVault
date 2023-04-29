import { TextField } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers-pro/DesktopDatePicker';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useStateContext } from "../../context/ind";
function AddReport({uid}) {
    const [data,setdata]=useState({});
    const {
        addPatient,
        getAllPatients,
        contract,
        getPatient,
        getMembers,
        getPublicInfo,
        connect,
        addReport
      } = useStateContext();
      console.log(data);
  return (
    <div
      style={{
        height: "60vh",
        margin: "10%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
        flexDirection: "column",
        color:'black'
      }}
    >
      <div>
        <h2 class="label">Reason </h2>
        <TextField
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
          onChange={(e)=>{
            var a=data;
            a.reason=e.target.value;
            setdata({...a});
          }}
         
        />
      </div>

      <div>
        <h2 class="label">Code </h2>
        <TextField
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
         
         
        />
      </div>

      <div>
        <h2 class="label">Diagnosis </h2>
        <TextField
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
          onChange={(e)=>{
            var a=data;
            a.diagnosis=e.target.value;
            setdata({...a});
          }}
         
        />
      </div>
      <h2 class="label">Date Of Appointment </h2>
      <Form.Control type="date" name='date_of_birth'  onChange={(e)=>{
            var a=data;
            a.appDate=e.target.value;
            setdata({...a});
          }} />
          <div>
            <button onClick={async()=>{await addReport(uid,document.getElementById('code-box').value,data)}}>
          submit
            </button>
          </div>
   
    </div>
  );
}
export default AddReport;
