import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import Total from "./Total";

const SingleProductPage = () => {
  let newarr = [];
  const singleproductdata = useSelector(
    (details) => details.homeproduct.cartdata
  );
  console.log("m", singleproductdata);

  for (let i = 0; i < singleproductdata.length; i++) {
    console.log("running");
    newarr.push(singleproductdata[i].product);
  }
  console.log(newarr, "mewarr");

  return (
    <div style={{ marginTop: "120px" }}>
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
          ({newarr.length} items)
        </span>
      </Box>
      <Box display="flex" width="90%" margin="auto">
        <Box
          width="65%"
          margin="auto"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        >
          {newarr !== "you are not authorized" &&
            newarr.map((items) => (
              <>
                <Box
                  width="90%"
                  display="flex"
                  key={items._id}
                  position="relative"
                  justifyContent="space-between"
                  alignItems="center"
                  margin="auto"
                  mt="20px"
                  padding="13px"
                  height="230px"
                >
                  <Box width="100%">
                    <Box height="100px" display="flex">
                      <Box width="13%">
                        <Image src={items.image} height="100%" width="100%" />
                      </Box>
                      <Box
                        width="65%"
                        ml="15%"
                        position="absolute"
                        fontSize="16px"
                        textAlign="left"
                        color="#46474a"
                        lineHeight="1.5"
                        fontWeight="400"
                        padding="10px"
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
                          border="1px solid black"
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
                <hr
                  style={{ width: "90%", margin: "auto", marginTop: "20px" }}
                />
              </>
            ))}
          <Box></Box>
        </Box>
        <Total newarr={newarr} />
      </Box>
    </div>
  );
};

export default SingleProductPage;
