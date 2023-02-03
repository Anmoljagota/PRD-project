import { Box, Button, Img } from "@chakra-ui/react";
import Styles from "../ProductPage/Product.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
const ProductItems = (products) => {
    console.log("i am items",products)
  return (
    <Box
      padding="10px 12px 10px 12px"
      margin="15px 0 0 0"
      height="353px"
      width="95%"
      cursor="pointer"
      textAlign="center"
      className={Styles.cart}
      border="1px solid black"
    >
      <Box width="100%" height="227px">
        <Img src={products.image} height="100%" width="100%" />
        <Box fontSize="20px" className={Styles.name}>
          {products.description}
        </Box>
        <Box
          fontSize="25px"
          paddingTop="13px"
          color="#fba937!important"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box color="#fba937!important" margin="0 2px 5px 0px">
            ₹
          </Box>
          {products.price}
        </Box>
        <Box>
          <Button className={Styles.button}>
            <HiOutlineShoppingBag style={{ background: "white" }} />
            <span style={{ marginLeft: "10px", color: "white" }}>
              Add to Cart
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItems;
