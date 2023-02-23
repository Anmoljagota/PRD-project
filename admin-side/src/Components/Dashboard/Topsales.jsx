import { Box, Center, Flex, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
const Topsales = () => {
  const data = useSelector((details) => details.product_reducer.data);
  console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaa", data);
  return (
    <div>
      <Stack  height="350px" overflow="scroll" width="95%" margin="auto">
        {data.length > 0 &&
          data?.map(
              (items, index) =>
              items.discount &&
              index < 30 && (
                  <>
                <Flex
                  key={items._id}
                 
                  height="100%"
                  p="2px"
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  >
                  <Flex
                   
                    height="100%"
                    width="50%"
                    justifyContent="space-between"
                    alignItems="center"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    <Img src={items.image} height="50%" width="30%" />
                    <Box width="60%">
                      <Text fontSize="15px" >
                        {items.description}
                      </Text>
                      <Text fontSize="12px" color="grey" textAlign="center">
                        {items.brand}
                      </Text>
                    </Box>
                  </Flex>
                  <Box  width="40%" p="10px" textAlign="right" fontSize="28px" fontWeight="500">
                  ₹{items.price}
                  <Text fontSize="15px" color="green" >Disc:₹{items.discount}</Text>
                  <Text fontSize="12px">SALES</Text>
                  </Box>
                </Flex>
                <hr />
                </>
              )
          )}
      </Stack>
    </div>
  );
};

export default Topsales;
