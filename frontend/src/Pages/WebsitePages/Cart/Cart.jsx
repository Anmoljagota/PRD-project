import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import Total from "./Total";
import { cartdata, cartdelete } from "../../../Redux/Product_redux/action";
import Styles from "./Cart.module.css";
const Cart = ({ l }) => {
  const dispatch = useDispatch();
  const singleproductdata = useSelector(
    (details) => details.homeproduct.cartdata
  );
  let newarr = [];
  let total = 0;
  for (let i = 0; i < singleproductdata.length; i++) {
    if (singleproductdata !== "authorization first") {
      total += singleproductdata[i].product.price;
      newarr.push(singleproductdata[i].product);
    }
  }
  if (singleproductdata === "you are not authorized") {
    return (
      <Box fontSize="50px" color="black" fontWeight="700" mt="200px">
        Login first
      </Box>
    );
  }
  function removeproduct(product) {
    dispatch(cartdelete(product));
    dispatch(cartdata());
  }
  return (
    <div style={{ marginTop: "170px" }}>
      <Box
    border="1px soid black"
    className={Styles.maindiv}
      >
        Cart
        <span
          className={Styles.cartlength}
        >
          ({newarr.length} items)
        </span>
      </Box>
      <Box
        className={Styles.checkoutboxes}
        width="90%"
        margin="auto"
       >
        <Box
         margin="auto" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" className={Styles.checkoutproduct}>
          {newarr !== "you are not authorized" &&
            singleproductdata !== "authorization first" &&
            newarr.map((items) => (
              <>
                <Box
                className={Styles.cart}
                >
                  <Box width="100%">
                    <Box height="100px" display="flex" >
                      <Box width="13%" >
                        <Image src={items.image} height="100%" width="100%" />
                      </Box>
                      <Box
                        className={Styles.description}
                      >
                        {items.description}
                        <Box>Brand:{items.brand}</Box>
                        <Box>₹{items.price}</Box>
                      </Box>

                      <Box
                        float="right"
                        width="20%"
                        position="absolute"
                        ml="77.5%"
                      >
                        <Box
                          fontSize="18px"
                          color="#2a8703"
                          fontWeight="700"
                          lineHeight="1.25"
                        >
                          ₹{items.price}
                        </Box>
                        <Box
                          fontSize="12px"
                          textDecorationLine="line-through"
                          color="#74767c"
                          height="1rem"
                          mt="5px"
                        >
                          ₹{items.prev_price}
                        </Box>
                        <Box
                          p="4px"
                          mt="5px"
                          color="#2a8703"
                          fontSize="10px"
                          height="1rem"
                          fontWeight="700"
                        >
                          {" "}
                          <span style={{ background: "#eaf3e6" }}>
                            YOU SAVE
                          </span>
                          <span style={{ marginLeft: "5px" }}>₹50</span>
                        </Box>

                        <Box
                          cursor="pointer"
                      
                          mt="50px"
                          p="5px"
                          borderRadius="10px"
                          display="flex"
                          justifyContent="space-around"
                          alignItems="center"
                        >
                          <Box>
                            <HiPlusSm />
                          </Box>
                          <Box>{items.price}</Box>
                          <Box>
                            <HiMinusSm />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  onClick={() => removeproduct(items._id)}
                  className={Styles.deleteitem}
                >
                  <h1>Remove</h1>
                </Box>
                <br />
                <hr
                  style={{ width: "90%", margin: "auto", marginTop: "20px" }}
                />
              </>
            ))}
        </Box>
        {l === 1 ? "" : <Total newarr={newarr} total={total} />}
      </Box>
    </div>
  );
};

export default Cart;
