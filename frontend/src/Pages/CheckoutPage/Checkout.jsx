import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import Styles from "../CheckoutPage/Checkout.module.css";
import { FaCreditCard } from "react-icons/fa";
import Products from "../../Components/Checkout component/Products";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate=useNavigate()
  const payments = [
    { option: "Debit Card" },
    { option: "Credit Card" },
    { option: "Net Banking" },
    { option: "UPI" },
    { option: "Wallet" },
  ];
  const userdetails = useSelector((details) => details.homeproduct.userDetails);
  function navigtetoaddress(){
navigate("/address")
  }
  return (
    <div>
      <Box height="auto" mt="150px" className={Styles.flexall} width="96%">
        {userdetails[0]!== undefined && (
          <Box
          
            height="110%"
            textAlign="left"
           
            
            className={Styles.widthboxes}
          >
            <h1 className={Styles.ship}>Shipping Details</h1>
            <br />
            <h1 style={{ color: "grey", fontSize: "13px" }}>SHIP TO</h1>
            <Box mt="10px" fontWeight="700">
              {userdetails[0].name}
            </Box>
            <span className={Styles.address}>
              VPO-{userdetails[0].homeaddress}, {`CITY-${userdetails[0].city}`},
              PINCODE-{userdetails[0].pincode}, STATE-{userdetails[0].state}{" "}
              {userdetails[0].locality}
            </span>
            <Box className={Styles.email}>
              Order Confirmation will be sent on
            </Box>
            <span className={Styles.email}>{userdetails[0].userId.email}</span><br/>
            <button onClick={navigtetoaddress} className={Styles.btn} style={{width:"35%",padding:"0px",fontSize:"12px"}}>CHANGE ADDRESS</button>
          </Box>
        )}
        <Box
         
          borderLeft="0.2px solid #0000001a"
          borderRight="0.2px solid #0000001a"
          p="10px"
          className={Styles.widthboxes}
        >
          <h1 className={Styles.payment}>Payment Options</h1>
          <br />
          {payments.map((data, i) => {
            return (
              <Accordion key={i}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        className={Styles.payment}
                        justifyContent="space-between"
                        textAlign="left"
                        color="black"
                        display="flex"
                        ml="10px"
                        alignItems="center"
                      >
                        <FaCreditCard /> {data.option}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={14} width="95%" margin="auto">
                    <Box float="left" color="grey" fontSize="10px">
                      Card Number
                    </Box>
                    <input
                      type="text"
                      style={{
                        float: "left",
                        width: "100%",
                        border: "1px solid grey",
                      }}
                    />
                  </AccordionPanel>
                  <AccordionPanel pb={14} width="95%" margin="auto">
                    <Box height="70px">
                      <Box float="left" color="grey" fontSize="10px">
                        Name on Card
                      </Box>
                      <input
                        type="text"
                        style={{
                          float: "left",
                          width: "100%",
                          border: "1px solid grey",
                        }}
                      />
                    </Box>
                    <Box
                      width="100%"
                      margin="auto"
                      fontSize="10px"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      height="80px"
                    >
                      <Box mb="15px">
                        <Box float="left">Expiry Date</Box>
                        <Select
                          placeholder="Month"
                          width="80%"
                          fontSize="10px"
                          border="1px solid grey"
                          height="30px"
                          fontWeight="700"
                          color="black"
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </Box>
                      <Box
                        width="20%"
                        border="1px solid grey"
                        fontWeight="700"
                        color="black"
                        height="30px"
                      >
                        <Select
                          fontSize="10px"
                          height="30px"
                          placeholder="Year"
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </Box>
                      <Box width="18%" height="50px">
                        <Box float="left">CVV</Box>
                        <input
                          type="text"
                          style={{ border: "1px solid black", width: "100%" }}
                        />
                      </Box>
                      <FaCreditCard fontSize="30px" />
                    </Box>
                    <button className={Styles.btn}>PAY SECURELY</button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })}
        </Box>
        <Box
          className={Styles.widthboxes}
          background="#f7f7f7!important"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        >
          <Products />
        </Box>
      </Box>
    </div>
  );
};

export default Checkout;
