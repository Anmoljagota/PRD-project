import {
  Box,
  Button,
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
const Home = () => {
  return (
    <div>
      <Stack>
        <VStack p="20px" width="100%" height="18%" background="#fff">
          <Flex justifyContent="space-between">
            <Flex
              width="55%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>Add Product</Box>
              <Flex width="80%">
                <Input type="text" placeholder="Search..." width="100%" />{" "}
                <Button
                  background="#0071dc"
                  width="20%"
                  color="white"
                  fontWeight="bold"
                >
                  Search
                </Button>
              </Flex>
            </Flex>
            <Flex
              width="17%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Img
                src="https://c4.staticflickr.com/8/7219/27203697011_373d85175d_b.jpg"
                borderRadius="full"
                width="30%"
                height="100%"
              />
              <Text color="black" fontWeight="bold">
                Parker Walker
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
