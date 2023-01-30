import React from "react";
import Styles from "../css/Project.module.css";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { border, Box, Stack } from "@chakra-ui/react";
import MultipleSelectPlaceholder from "./Select";
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
      <Stack width="100%" border="1px solid black">
        <Box display="flex" width="95%" border="1px solid black" margin="auto">
          <MultipleSelectPlaceholder />
        </Box>
      </Stack>
    </div>
  );
};

export default Navbar;
