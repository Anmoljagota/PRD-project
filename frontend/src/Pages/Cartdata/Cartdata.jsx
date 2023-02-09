import { Box } from "@chakra-ui/react";
import React from "react";
import Styles from "../../css/Project.module.css";
const Cartdata = () => {
  return (
    <div>
      <Box height="50vh" mt="200px">
        <Box
          fontWeight="700"
          fontSize="30px"
          width="85%"
          margin="auto"
          textAlign="left"
        >
          Cart
          <span
            style={{ color: "#46474a", fontWeight: "400", marginLeft: "10px" }}
          >
            (0 items)
          </span>
        </Box>
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff"
              alt="something wrong with image"
            />
          </Box>
          <Box fontWeight="700" color="black" fontSize="23px" mt="15px">
            <h1>Your cart is empty</h1>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Cartdata;
