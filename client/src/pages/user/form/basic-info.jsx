import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import "./form.css";
const bg = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
function BasicInfo({ publicdata, setpublicdata, member }) {
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div
      class="container"
      style={{
        height: "70vh",
        width:"40vw",
        // margin: "10%",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <div class="mb-4">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black "
        >
          Name
        </label>
        <div class="  ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter Your Name"
            aria-label="Full name"
            onChange={(e) => {
              var a = publicdata;
              a.name = e.target.value;
              setpublicdata({ ...a });
            }}
          />
        </div>
      </div>
      <div class="mb-4">
        <label
          for="first_name"
          class="block text-3xl mb-3  font-medium text-gray-900 dark:text-black"
        >
          Code
        </label>
        <div class=" ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="password"
            placeholder="Enter Secret Code"
            aria-label="Full name"
            onChange={(e) => {
              var a = publicdata;
              a.code = e.target.value;
              setpublicdata({ ...a });
            }}
          />
        </div>
      </div>

      {member ? (
        <div class="mb-4">
          <label
            for="first_name"
            class="block text-4xl mb-3  font-bold text-gray-900 dark:text-black"
          >
            Relation
          </label>
          <div class="ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Enter Relation with Member"
              aria-label="Full name"
              onChange={(e) => {
                var a = publicdata;
                a.relation = e.target.value;
                setpublicdata({ ...a });
              }}
            />
          </div>
        </div>
      ) : null}

      <div class="mb-4">
        <label
          for="first_name"
          class="block text-4xl mb-3  font-medium text-gray-900 dark:text-black"
        >
          Email
        </label>
        <div class="ml-7 max-w-sm blackflex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter Your Email"
            aria-label="Full name"
            onChange={(e) => {
              var a = publicdata;
              a.email = e.target.value;
              setpublicdata({ ...a });
            }}
          />
        </div>
      </div>


      <div>
      <label
          for="first_name"
          class=" mb-4 block text-4xl mb-3  font-medium text-gray-900 dark:text-black"
        >
          Select Your Blood Group
        </label>
        <div class=" w-50 flex justify-between ">

        <label
          for="countries"
          class=" text-xl block mb-2  font-medium text-gray-900 dark:text-black"
        >
          Select an option
        </label>
        <select
          onChange={(e) => {
            var a = publicdata;
            a.bloodgroup = e.target.value;
            setpublicdata({ ...a });
          }}
          id="countries"
          class="bg-gray-50 w-[100px] border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {bg.map((p, index) => {
            return <option selected>{p}</option>;
          })}
        </select>

        </div>

        
      </div>
    </div>
  );
}
export default BasicInfo;
