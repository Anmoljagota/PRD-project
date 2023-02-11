import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Styles from "../AddressPage/Address.module.css";
const textareadata = [
  { text: "Landmark (optional)" },
  { text: "Pincode" },
  { text: "Locality" },
  { text: "city" },
  { text: "State" },
  { text: "Customer Name" },
  { text: "10 Digit Mobile Number" },
];
const AddressPage = () => {
    const [value,setValue]=useState("")
    // function setValue(){

    // }
  return (
    <div
      style={{ marginTop: "108px", background: "#f8f8f8" ,height:"100vw"}}
      className={Styles.family}
    >
      <h1>Add New Address</h1>
      <Box
        border="1px solid black"
        width="38.33333333%"
        ml="10%"
        background="#fff"
        fontSize="16px"
        padding="0px 4px"
        color="grey"
        height="auto"
      >
        <textarea
          cols="70"
          rows="3"
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "4px",
            padding: "6px",
            fontSize: "12px",
            float: "left",
          }}
        >
          {/* Flat Number, Building Name, Street/Locality */}
        </textarea>
        <Box>
          {textareadata.map((items) => (
            <Box color="grey" float="left" mt="20px" border="1px solid blue">
              <textarea
                style={{ border: "1px solid #e8e8e8", color: "grey",fontSize: "12px",   padding:"8px 4px 8px 4px"}}
                cols="54"
                rows="1"
                float="left"

              >
                {items.text}
              </textarea>
            </Box>
          ))}
         
        </Box>
        
      </Box>
     </div>
  );
};

export default AddressPage;
