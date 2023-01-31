import React from "react";
import Styles from "../css/Project.module.css";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import {
  border,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import Category from "./Category";
import { ImageSlider } from "./demo";
const Navbar = () => {
  return (
    <div className={Styles.parentNavbar}>
      <Box className={Styles.upperNavbar}>
        <Box
          margin="auto"
          width="98%"
          //   border="1px solid black"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px"
        >
          <Box className={Styles.flex} gap="7px" width="15%">
            <Box ml="20px" className={Styles.flex}>
              <MdOutlineMapsHomeWork />
              NearBy
            </Box>
            <Box ml="20px" className={Styles.flex}>
              <SlLocationPin />
              Location
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row-reverse"
            justifyContent="space-between"
            alignItems="center"
            // border="1px solid black"
            width="40%"
            className={Styles.cur}
          >
            <Box>Top Discount</Box>
            <Box>Weekly Ad</Box>
            <Box>Top Stores</Box>
            <Box>Top Stores</Box>
          </Box>
        </Box>
      </Box>
      <Stack fontWeight="600" fontSize="17px">
        <Box
          display="flex"
          padding="20px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          width="90%"
          margin="auto"
         gap="10px"
          alignItems="center"
        >
          <img src="https://mpng.subpng.com/20180401/ykq/kisspng-shopping-cart-computer-icons-online-shopping-clip-online-shop-5ac11205d8e469.5194885815226025018884.jpg" height="50px" width="90px"/>
          <Box>Home</Box>
          <Box>
            <Category />
          </Box>
          <Box display="flex">
            {" "}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineSearch color="gray.300" />}
              />
              <Input
                type="tel"
                p="12px 200px 12px 200px"
                size="md"
                placeholder="Search for any item"
              />
            </InputGroup>
        <Button p="8px 70px 8px 70px" background="#3665f3" ml="4px" border="none">Search</Button>
        <Box>Sign in</Box>
          </Box>
        </Box>
      </Stack>
      
    </div>
  );
};

export default Navbar;
