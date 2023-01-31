import { HStack, Box } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../Components/demo";
import Styles from "../css/Project.module.css";
const HomePage = () => {
  return (
    <div className={Styles.HomePageMain}>
      <Box width="90%" margin="auto" border="1px solid black" height="100%">
        <HStack spacing="24px">
          <Box
            w="70%"
            h="495px"
            background="#f1f3f6"
            zIndex="1"
            // border="1px solid black"
            display="flex"
          >
            <Box  width="100%" position="relative">
              <ImageSlider />
            </Box>
          </Box>
          <Box w="100%" bg="tomato">
            2
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default HomePage;
