import { Alert, AlertIcon, AlertTitle, Box, Img } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import Styles from "../ProductPage/Product.module.css";
import ProductStyles from "../ProductPage/Product.module.css"
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
      cursor="pointer"
      textAlign="center"
      className={ProductStyles.cart}
     border="1px solid black"
      position="relative"
      lineHeight="1.4"
      onClick={() => getproduct(id)}
    >
      <Box width="100%" className={ProductStyles.maindiv} mt="12px" border="2px solid blue" height="100%">
        <Box  className={ProductStyles.yellowbox} border="5px solid green" >
          <Img
            src={image}
            className={ProductStyles.images}
            width="100%"
            position="absolute"
            top="0"
            button="0"
            left="0"
            right="0"
          ></Img>
        </Box>
        <Box  className={Styles.info}  border="1px solid yellow" >
          <Box
            textAlign="left"
            float="left"
            color="##878787"
            fontSize="14px"
            fontWeight="500"
            border="3px solid grey"
          >
            {brand}
          </Box>
          <br />
          <Box
            p="5px"
            width="100%"
            textOverflow="ellipsis"
            className={ProductStyles.desc}
          >
            {description}
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            width="70%"
            border="1px solid"
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
