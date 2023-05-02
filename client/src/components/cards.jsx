import { defaultAbiCoder } from "ethers/lib/utils";
import React from "react";
function Card({graph:Graph,data}){
        return (
            
<div class=" h-[300px] w-[500px]  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> 
    <Graph data={data}/>
    </div>


        );
}
export default Card;
