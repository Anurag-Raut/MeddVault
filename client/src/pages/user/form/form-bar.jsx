import Stepper from "../../../components/stepper";
import React from "react";
import { motion } from "framer-motion";
const steps = [
  {
    label: "Basic Information",
    description: `Add your basic info and code (this information would be public).`,
  },
  {
    label: "Contact Information",
    description: "Add contact information (Private)",
  },
  {
    label: "Past Medical History",
    description: `Add your Past Medical History (Private).`,
  },
];

function FormBar({
  member,
  activeStep,
  setActiveStep,
  handleAddUser,
  handleAddMember,
}) {
  const handleNext = () => {
    if (activeStep === 3) {
      if (member) {
        handleAddMember();
      } else {
        
        handleAddUser()
      }

      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div
      id="rem-div"
      style={{
        width: "15vw",
        height: "90vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        
        }}
      >
        <Stepper index={activeStep} />

        <div
          class="d-flex"
          style={{
            justifyContent: "space-around",
            width: "20vw",
            marginTop: "30px",
            marginLeft:'-5vw'
          }}
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className=" font-bold hover:text-white h-[50px]  border-solid border-2 border-teal-400 hover:bg-teal-400   mt-10 text-teal-300   w-[100px] rounded-full"
            onClick={handleBack}
          >
            Back
          </motion.button>
          <motion.button
            type="button"
            className=" font-bold hover:text-white  h-[50px] border-2   border-solid border-teal-400 hover:bg-teal-400  mt-10 text-teal-300   w-[100px] rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleNext}
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
}
export default FormBar;
