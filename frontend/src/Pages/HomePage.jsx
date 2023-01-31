import { HStack, Box, Image } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../Components/demo";
import Styles from "../css/Project.module.css";
const HomePage = () => {
  return (
    <div className={Styles.HomePageMain}>
      <Box width="90%" margin="auto" p="10px" height="100%">
        <HStack spacing="24px">
          <Box
            w="65%"
            h="415px"
            background="#f1f3f6"
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
            zIndex="1"
            // border="1px solid black"
            display="flex"
          >
            <Box  width="100%" position="relative">
              <ImageSlider />
            </Box>
          </Box>
          <Box w="100%" fontSize="25px" fontWeight="bold" lineHeight="1.25" height="415px" border="1px solid black" p="5px 10px 5px 10px">
           <h1 style={{marginTop:"20px"}}>Flash Pick of the day</h1> 
           <h1 style={{fontSize:"15px",float:"right"}}>View all</h1>
           <Box display="flex" justifyContent="center" alignItems="center" mt="30px">

           <Image src="https://images-na.ssl-images-amazon.com/images/I/71nnBYKLMvL._AC_SL1500_.jpg" height="230px" width="80%" />
           </Box>
           <button className={Styles.btn} style={{background:"#0071dc",color:"white",float:"left",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px 0px"}}>Options</button>
           <h1 >$316.99</h1>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default HomePage;
