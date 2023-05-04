import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Styles from "./Home.module.css";
import Slidingimages from "../../Components/Dashboard/Swiper";
import Topsales from "../../Components/Dashboard/Topsales";
import { useSelector } from "react-redux";
import {BiLoaderCircle} from "react-icons/bi"
import BasicModal from "../Products/Modal";
const Home = () => {
  const userDetails=useSelector((data)=>data.product_reducer.userdata[0])
  console.log("i ma userdetailssssssss",userDetails)
  return (
    <div>
      <Stack>
        <VStack p="20px" width="100%" height="18%" background="#fff">
          <Flex justifyContent="space-between"  width="100%">
            <Flex
              width="60%"
              justifyContent="space-between"
              alignItems="center"
 >
  <Flex width="30%" className={Styles.flexall}>
  <Flex background="#0071d" height="40px"  width="23%" backgroundColor="#0071dc" color="white" fontSize="25px" justifyContent="center" alignItems="center"><BiLoaderCircle/></Flex> 
   <Box ml="2%"  width="70%"><BasicModal t="Add product" c="black"/></Box>
  </Flex>
            
              <Flex width="70%"  height="40px">
                <Input type="text" placeholder="Search..." width="100%" />{" "}
                <Button
                  background="#0071dc"
                  width="20%"
                  color="white"
                  fontWeight="bold"
                  border="none"
                >
                  Search
                </Button>
              </Flex>
            </Flex>
            <Flex
              width="20%"
              fontSize="18px"
              alignItems="center"
              justifyContent="space-between"
 float="right"
            >
              <Img
                src={userDetails.Image}
               borderRadius="50%"
                width="30%"
                height="100%"
              />
              <Text color="black" fontWeight="bold">
                {userDetails.Name}
              </Text>
            </Flex>
          </Flex>
        </VStack>
        <Slidingimages />
        <br />
        <br />
        <Flex className={Styles.specialproducts}>
          <Box className={Styles.inner}>
            <Text p="10px">Most Liked Products</Text>
            <hr className={Styles.hr} />
          </Box>
          <Box className={Styles.inner}>
            <Text p="10px">Today's Sales</Text>
            <hr className={Styles.hr} />
            <Topsales />
          </Box>
        </Flex>
      </Stack>
    </div>
  );
};

export default Home;
