import { Box, Button, Img } from "@chakra-ui/react";
import Styles from "../ProductPage/Product.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
const ProductItems = (products) => {
  // console.log("i am items", products);
  return (
    <Box
      //   padding="10px 12px 10px 12px"
      margin="15px 0 0 0"
      height="483px"
      width="100%"
      cursor="pointer"
      textAlign="center"
      className={Styles.cart}
      //   border="1px solid black"
      position="relative"
      lineHeight="1.4"
      //   display="flex"
    >
      <Box width="100%" height="427px" mt="12px">
        <Box  height="350px" width="100%">
          <Img
            src={products.image}
            height="350px"
            width="100%"
            position="absolute"
            top="0"
            button="0"
            left="0"
            right="0"
          ></Img>
        </Box>
        <Box className={Styles.info}>
          <Box
            textAlign="left"
            float="left"
            color="##878787"
            fontSize="14px"
            fontWeight="500"
          >
            {products.brand}
          </Box>
          <br />
          <Box
           
            p="5px"
            mt="5px"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {products.description}
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            width="60%"
          >
            <Box fontSize="16px">₹{products.price}</Box>
            <Box
              textDecorationLine="line-through"
              color="#878787"
              fontWeight="400"
            >
              ₹{products.prev_price}
            </Box>
            <Box
              color="#388e3c"
              fontSize="13px"
              letterSpacing="-.2px"
              fontWeight="500"
            >
              {products.discount}%off
            </Box>
          </Box>
          <Box fontWeight="450" p="5px">
            {products.delivery ? products.delivery : ""}
          </Box>
          <Box color="rgb(38, 165, 65)" fontWeight="700" fontSize="12px">
            {products.deals ? products.deals : ""}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItems;
