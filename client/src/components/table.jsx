import React from "react";
import { useNavigate } from "react-router";
export default function Tablee({data,setuidaddReport}){
const navigate=useNavigate();
    return(
        <div class=" w-[80vw] relative overflow-x-auto shadow-md sm:rounded-lg" >
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{maxHeight:'80vh',overflowY:"auto"}}>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Blood Group
                    </th>
                    <th scope="col" class="px-6 py-3">
                        More Details
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Add Report
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return(
                     <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {item.data.name}
                     </th>
                     <td class="px-6 py-4">
                     {item?.data?.email}
                     </td>
                     <td class="px-6 py-4">
                     {item?.data?.blood}
                     </td>
                     <td class="px-6 py-4">
                     <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>{setuidaddReport(item.id);navigate('/admin/read')}}>View Details</button>
                     </td>
                     <td class="px-6 py-4">
                         <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>{setuidaddReport(item.id);navigate('/admin/addReport')}}>Add report</button>
                     </td>
                 </tr>


                    );

                })}
               
               
                
            </tbody>
        </table>
    </div>
    );
}