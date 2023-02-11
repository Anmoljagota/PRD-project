import { Box, Button, Radio, RadioGroup, Stack, Text, Textarea } from "@chakra-ui/react";
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
  const [value, setValue] = useState("");
  // function setValue(){

  // }
  return (
    <div
      style={{
        marginTop: "108px",
        background: "#f8f8f8",
        height: "100vw",
      }}
      className={Styles.family}
    >
      <h1
        style={{
          width: "35.33333333%",
          textAlign: "left",
          margin: "15px 0 0 10%",
         
        
        }}
      >
        Add New Address
      </h1>
      <Box
boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
        width="45.33333333%"
        ml="10%"
        mt="30px"
        background="#fff"
        fontSize="16px"
        padding="20px"
        color="grey"
        height="48%"
      >
        <textarea
          cols="90"
          rows="3"
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "4px",
            padding: "6px",
            fontSize: "12px",
            float: "left",
          }}
          placeholder="Flat Number, Building Name, Street/Locality"
        >
         
        </textarea>
        <Box border="1px solid white" height="100%">
          {textareadata.map((items) => (
            <Box color="grey" float="left" mt="20px" >
              <Textarea
                style={{
                  border: "1px solid #e8e8e8",
                  color: "grey",
                  fontSize: "12px",
                  padding: "8px 4px 8px 4px",
                }}
                cols="90"
                rows="1"
                float="left"
                placeholder={items.text}
              >
                
              </Textarea>
            </Box>
          ))}
          <Box  mt="530px">
            <RadioGroup defaultValue="1">
              <Stack spacing={7} direction="row">
                <Radio colorScheme="red" value="1">
                  HOME
                </Radio>
                <Radio colorScheme="red" value="2">
                  OFFICE
                </Radio>
                <Radio colorScheme="red" value="3">
                  OTHER
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            
            color="#fff"
            mt="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            float="right"
            width="350px"
          >
            <Text color="rgb(255, 111, 97)" ml="80px" display="inline">
              CANCEL
            </Text>
            <Button
              fontWeight="500"
              borderRadius="4px"
              background="rgb(255, 111, 97)"
              width="120px"
              color="rgb(255, 255, 255)"
              ml="20px"
              border="1px solid rgb(255, 111, 97)"
              height="40px"
              p="0px 16px"
              display="inline-flex"
              float="right"
            >
              SAVE
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AddressPage;
