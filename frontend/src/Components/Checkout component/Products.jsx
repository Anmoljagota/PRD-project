import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  let newarr = [];
  const data = useSelector((details) => details.homeproduct.cartdata);
  for (let i = 0; i < data.length; i++) {
    // console.log("running",singleproductdata.length);
    newarr.push(data[i].product);
  }
  console.log("iiiiiiiiiiii ammmmmmmmm", newarr);
  return (
    <div style={{ padding: "20px" }}>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color="#00000099" fontWeight="bold" fontSize="14px">
            Order Details
          </Box>
          <Box fontSize="14px">See Less</Box>
        </Box>
        {newarr.map((items) => (
          <Stack key={items._id}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="20px"
            >
              <Box height="75px">
                <Image
                  src={items.image}
                  alt="something wrong with image"
                  height="100%"
                  width="100%"
                />
              </Box>
              <Box>
                <Box
                  float="right"
                  textAlign="left"
                  fontSize="14px"
                  color="black"
                  fontWeight="600"
                  width="90%"
                  margin="auto"
                >
                  {items.brand}
                </Box>
                <Box
                  width="90%"
                  fontSize="12px"
                  float="right"
                  mt="5px"
                  textAlign="left"
                >
                  {items.description}
                </Box>
              </Box>
            </Box><br/>
              <hr style={{ border: "1px solid grey", borderStyle: "dashed" }} />
          </Stack>
        ))}
      </Box>
    </div>
  );
};

export default Products;
