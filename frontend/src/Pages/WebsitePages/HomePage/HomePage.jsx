import { HStack, Box, Image, Text,SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../../../Components/Website/demo";
import HomeProduct from "../../../Components/Website/HomeProduct";
import TopDepartments from "../../../Components/Website/TopDepartments";
import Styles from "../../../css/Project.module.css";
import HomeStyles from "./Homepage.module.css";
import data from "../../../db.json";
const HomePage = () => {
  return (
    <div className={Styles.HomePageMain}>
      <Box width="95%" margin="auto" className={HomeStyles.maindiv}>
        <HStack spacing="24px" cursor="pointer" className={Styles.hstack}>
          <Box className={HomeStyles.slider}>
            <Box className={HomeStyles.innerslider}>
              <ImageSlider />
            </Box>
          </Box>
          <Box
            className={HomeStyles.specialoffer}
            display={{ sm: "none", lg: "block", base: "none" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <Text fontSize={"2rem"}>Flash Pick of the day</Text>
              <h1
                style={{
                  fontSize: "1.5rem",
                  float: "right",
                  textDecorationLine: "underline",
                }}
              >
                View all
              </h1>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt="30px"
            >
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/71nnBYKLMvL._AC_SL1500_.jpg"
                height="230px"
                width="80%"
              />
            </Box>
            <Box>
              <button
                className={Styles.btn}
                style={{
                  background: "#0071dc",
                  color: "white",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px 0px",
                  float: "left",
                }}
              >
                Options
              </button>
              <br />
              <h1
                style={{
                  margin: "10px 0px 0px 10px",
                  fontSize: "1.9rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  float: "left",
                }}
              >
                $316.99
                <span
                  style={{
                    textDecorationLine: "line-through",
                    fontWeight: "200",
                    color: "#74767c",
                    marginLeft: "5px",
                    fontSize: "1.5rem",
                  }}
                >
                  $558.90
                </span>
              </h1>
              <br />
            </Box>
            <Box mt="1rem" width="100%" fontSize="1.5rem" lineHeight="1.5">
              MAXPRO PTM405 2HP(4 HP Peak) Folding Treadmill, Electric Motorized
            </Box>
          </Box>
        </HStack>
        <SimpleGrid columns={[1, 2, 4]} spacing='20px' mt={"3rem"}  >
          {data.map((items, index) => (
            <Box float="right" key={index} w={"100%"} >
              { <TopDepartments i={index} items={items}/>}
            </Box>
          ))}
        </SimpleGrid>
        <HomeProduct />
      </Box>
    </div>
  );
};

export default HomePage;
