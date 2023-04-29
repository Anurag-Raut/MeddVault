import { Grid, TextField } from "@mui/material";
import React from "react";
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
function FamilyMedHistory({data,handleFind,setCode}){
    console.log(data)
    return (
        <div>
        {
            data!==''?
        <div
        class='container'
          style={{
            height: "69vh",
            margin: "10%",
            width: "100%",
            // display: "flex",
            // justifyContent: "space-around",
            // alignItems: "space-around",
            // flexDirection: "column",
            overflow: "auto",
          }}
        >
          <div style={{ width: "100%",marginBottom:'50px' }}>
            <h2 style={{  }}>Select Disease</h2>
    
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
              {data?.disarr?.map((p, index) => {
                
                return (

                  p===true?<Grid item xs={4}>
                    
                    <h5>{dis[index]}</h5>
                
                  </Grid>
                  :
                  null
                );
              })}
            </Grid>
          </div>
          <div style={{width: "100%"}}>
            <h2 style={{ marginBottom: "50px" }}> Extra Information</h2>
            <div style={{height:'100%',width: "100%"}}>
              {data?.pastdata?.map((p, index) => {
                console.log(p);
                return (
                  <div class="d-flex" style={{justifyContent:'space-around',marginBottom:'40px'}}>
                    
                  <h2>disease-- {p?.name}</h2>   
                  <h2>suffering-- {p?.suff}</h2>   
                  
                  
                  </div>
                );
              })}
             
            </div>
          </div>
          </div>
          :
          <form onSubmit={handleFind}>
            

           


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
          onChange={(e)=>{setCode(e.target.value)}}
         
         
        />
      </div>


        
        
        <button  class="btn btn-primary" type="submit" style={{marginTop:'30px'}}>Submit code</button>
            
        </form> 
        }
        </div>

    );


}
export default FamilyMedHistory;