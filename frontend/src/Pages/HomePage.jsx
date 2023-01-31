import { HStack, Box, Image } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../Components/demo";
import Styles from "../css/Project.module.css";
const HomePage = () => {
  return (
    <div className={Styles.HomePageMain}>
      <Box width="90%" margin="auto" p="10px" height="100%">
        <HStack spacing="24px" cursor="pointer">
          <Box
            w="65%"
            h="455px"
            background="#f1f3f6"
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            zIndex="1"
            // border="1px solid black"
            p="4px 10px 10px 10px"
            display="flex"
          >
            <Box width="100%" position="relative">
              <ImageSlider />
            </Box>
          </Box>
          <Box
            position="relative"
            w="100%"
            fontSize="25px"
            fontWeight="bold"
            lineHeight="1.25"
            height="455px"
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            p="5px 10px 5px 10px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <h1>Flash Pick of the day</h1>
              <h1 style={{ fontSize: "15px", float: "right",textDecorationLine:"underline" }}>View all</h1>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="30px"
            >
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/71nnBYKLMvL._AC_SL1500_.jpg"
                height="230px"
                width="80%"
              />
            </Box>
            <Box float="left" position="absolute">
              <button
                className={Styles.btn}
                style={{
                  background: "#0071dc",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px 0px",
                  float:"left"
                }}
              >
                Options
              </button>
              <br />
              <h1
                style={{
                  margin: "10px 0px 0px 10px",
                  fontSize: "19px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  float:"left"
                }}
              >
                $316.99<span style={{textDecorationLine:"line-through",fontWeight:"200",color:"#74767c",marginLeft:"5px", fontSize:"15px"}}>$558.90</span>
              </h1>
              <br />
              {/* <h3 style={{fontSize:"14px",overflow:"hidden"}}>SuperFit 2.25HP Two Dual Display Folding Treadmills</h3> */}
            </Box>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default HomePage;
