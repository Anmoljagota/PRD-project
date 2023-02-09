import { Alert, AlertIcon, AlertTitle, Box, Img } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import Styles from "../ProductPage/Product.module.css";
const ProductItems = ({
  image,
  getproduct,
  brand,
  description,
  prev_price,
  discount,
  deals,
  delivery,
  price,
  id
}) => {
  // console.log("i am getproduct",getproduct)
  const data = useSelector((data) => {
    return data.homeproduct;
  }, shallowEqual);
  // console.log("i am", data);
  return (
    <Box
      margin="15px 0 0 0"
      height="483px"
      width="100%"
      cursor="pointer"
      textAlign="center"
      className={Styles.cart}
      position="relative"
      lineHeight="1.4"
      onClick={() => getproduct(id)}
    >
      <Box width="100%" height="427px" mt="12px" >
        <Box height="350px" width="100%">
          <Img
            src={image}
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
            {brand}
          </Box>
          <br />
          <Box
            p="5px"
            mt="5px"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {description}
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            width="60%"
          >
            <Box fontSize="16px">₹{price}</Box>
            <Box
              textDecorationLine="line-through"
              color="#878787"
              fontWeight="400"
            >
              ₹{prev_price}
            </Box>
            <Box
              color="#388e3c"
              fontSize="13px"
              letterSpacing="-.2px"
              fontWeight="500"
            >
              {discount}%off
            </Box>
          </Box>
          <Box fontWeight="450" p="5px">
            {delivery ? delivery : ""}
          </Box>
          <Box color="rgb(38, 165, 65)" fontWeight="700" fontSize="12px">
            {deals ? deals : ""}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItems;
