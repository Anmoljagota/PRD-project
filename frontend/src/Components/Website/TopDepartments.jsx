import { Box, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Styles from "../css/Project.module.css";
const TopDepartments = ({ i, items }) => {
  console.log(items[i]?.title, "title");
  const navigate = useNavigate();
  function nextpage() {
    navigate("/products");
  }
  console.log("items", items);
  return (
    <div style={{ width: "100%", paddingBottom: "1rem" }}>
      <HStack spacing="24px" cursor="pointer" w={"100%"}>
        <Box
          w={"100%"}
          position="relative"
          fontSize="25px"
          fontWeight="bold"
          lineHeight="1.25"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
          p="5px 10px 5px 10px"
        >
          <Box
            w={"100%"}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={3}
          >
            <Text fontSize={"2.5rem"}>{items[0]?.title}</Text>
          </Box>
          <Box display="flex" justifyContent="center">
            <SimpleGrid columns={[2, null, 2]} spacing="20px">
              {items.map((items, index) => (
                <Box key={index} onClick={nextpage} pb={"1rem"}>
                  <Box>
                    <Image src={items.image} alt="something wrong" w={"full"} />
                  </Box>
                  <Box
                    fontSize="1.2rem"
                    overflow="hidden"
                    color="#46474a"
                    textAlign={"left"}
                    mt={2}
                  >
                    {items.name}
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </HStack>
    </div>
  );
};

export default TopDepartments;
