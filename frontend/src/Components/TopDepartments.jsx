import { Box, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Styles from "../css/Project.module.css";
const TopDepartments = ({ i }) => {
  const winters = [
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-2abf/k2-_a16fbc9e-bea4-47da-ac72-c774b9796ca3.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
      name: "25% off select home",
    },
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-9ad2/k2-_0377fcda-85f3-4b27-aae6-fdb36a5f1d7a.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
      name: "50% off select fashion",
    },
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-ae69/k2-_7593e03c-eb4b-424b-85a0-574a5eebf95a.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
      name: "35% off on select beauty",
    },
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-f2ba/k2-_1a07238d-99c2-4859-b9cf-28d6a3ec233e.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
      name: "30% off on select fitness",
    },
  ];
  return (
    <div style={{ height: "460px" }}>
      <HStack spacing="24px" cursor="pointer">
        <Box
          position="relative"
          fontSize="25px"
          fontWeight="bold"
          lineHeight="1.25"
          height="455px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
          p="5px 10px 5px 10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
          
          >
            <h1>Winter savings</h1>
          </Box>
          <Box display="flex" justifyContent="center" >
            <SimpleGrid columns={[2, null, 2]} spacing="40px">
              {winters.map((items) => (
                <Box>
                  <Box>
                    <Image src={items.image} alt="something wrong" />
                  </Box>
                  <Box fontSize="14px" overflow="hidden" color="#46474a">
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
