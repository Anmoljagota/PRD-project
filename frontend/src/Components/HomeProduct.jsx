import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../Redux/Product_redux/action";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Styles from "../css/Project.module.css";
const HomeProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.homeproduct);
  console.log(data, "i am");
  useEffect(() => {
    dispatch(getdata);
  }, []);
  return (
    <div>
      <Box  background="white">
        <Box border="1px solid yellow">
          <SimpleGrid columns={[2, null, 5]} >
            {data.data &&
              data.data.length > 0 &&
              data.data.map((items) => (
                <Box
                 mt="20px"
                  key={items._id}
                  className={Styles.product}
                >
                  <Box
                    height="200px"
                    width="200px"
                    position="relative"
                    margin="0 auto"
                   
                    background="white"
                  >
                    <Image src={items.image} />
                  </Box>
                  <Box   background="white">{items.title}</Box>
                  <Box
                    color="#388e3c"
                    paddingTop="8px"
                    fontSize="16px"
                    
background="white"
                  >{`Up to ${items.discount} off`}</Box>
                  <Box display="inline-block"  mr="5px" textDecorationLine="line-through" background="white" paddingTop="8px">{items.value}</Box>
                  <Box display="inline-block" background="white" paddingTop="8px">{items.price}</Box>
                </Box>
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default HomeProduct;
