import React from "react";

function Contactinfo({data,handleFind,setCode}){
    console.log(data);
    return (
        data!==''
        ?

        <div
        style={{
          
          height: "69vh",
          margin: "10%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-around",
          flexDirection: "column",
        }}
      >
        <div style={{marginBottom:'50px'}}>
          <h3 class="label"> Mobile Number</h3>
          <h3>{data?.contact}</h3>
        </div>
        <div class='container' style={{overflowX:"auto",MaxHeight:'50vh',width:'45vw'}} >
          <h3 class="label"> Emergency Contact Info</h3>
          
          
  
          
          
          {
              data.emergencyContact.map((n,index)=>{
                  return (
                      <div class='d-flex' style={{justifyContent:'space-between',alignItems:'center',marginTop:'30px'}}>
                          
         <h3>Contact {n?.val}</h3>
         <h3>Relation--{n?.relation}</h3>
          
  
          </div>
          
  
                    
                      
          
  
                  );
              })
              
          }
        
        </div>
        
       
          
        
      </div>
      :

      <form onSubmit={handleFind}>
            

           


        <input onChange={(e)=>{setCode(e.target.value)}} type="text" />
        
        <button  type="submit" style={{height:'40px',width:'40px'}}></button>
            
        </form> 
    );


}
export default Contactinfo;