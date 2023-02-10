import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Styles from "../css/Project.module.css";
let images = [{ data: "" }, { data: "" }, { data: "" }, { data: "" }];
const SingleProduct = () => {
  const details = useSelector((data) => data.homeproduct.singledata);
  console.log(details, "hloooo");
  return (
    <div style={{ marginTop: "150px",border:"1px solid red" }}>
      <Box>
        <Box width="95%" border="1px solid red" margin="auto" height="100vw">
          <Box height="40vw" border="1px solid black" display="flex">
            <Box
              border="1px solid green"
              height="auto"
              width="65%"
              className={Styles.flexall}
              padding="10px"
            >
              <Box>
                {images.map((i, items) => (
                  <Box key={i} border="1px solid black">
                    <Image src={details[0].image} height="80px" width="120px" mt="20px"/>
                  </Box>
                ))}
              </Box>
              <Box height="35vw" width="75%" border="1px solid yellow">
                <Image
                  src={details[0].image}
                  alt="something wrong with image"
                  height="100%"
                 width="100%"
                />
              </Box>
            </Box>
            <Box border="1px solid red" height="80px" width="30%"></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SingleProduct;
