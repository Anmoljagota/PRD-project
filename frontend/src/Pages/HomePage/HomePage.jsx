import { HStack, Box, Image } from "@chakra-ui/react";
import React from "react";
import { ImageSlider } from "../../Components/demo";
import HomeProduct from "../../Components/HomeProduct";
import TopDepartments from "../../Components/TopDepartments";
import Styles from "../../css/Project.module.css";
import HomeStyles from "../HomePage/Homepage.module.css";
import data from "../../db.json";
const HomePage = () => {
  return (
    <div className={Styles.HomePageMain}>
      <Box
       
        width="95%"
        margin="auto"
        className={HomeStyles.maindiv}
      >
        <HStack spacing="24px" cursor="pointer" className={Styles.hstack}>
          <Box  className={HomeStyles.slider}>
            <Box width="100%" position="relative" boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" mt="30px">
              <ImageSlider />
            </Box>
          </Box>
          <Box className={HomeStyles.specialoffer}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="20px"
            >
              <h1>Flash Pick of the day</h1>
              <h1
                style={{
                  fontSize: "15px",
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
            <Box float="left" position="absolute">
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
                  fontSize: "19px",
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
                    fontSize: "15px",
                  }}
                >
                  $558.90
                </span>
              </h1>
              <br />
            </Box>
            <Box mt="26%" width="100%" fontSize="15px" lineHeight="1.5">
              MAXPRO PTM405 2HP(4 HP Peak) Folding Treadmill, Electric Motorized
            </Box>
          </Box>
        </HStack>
        <Box className={Styles.flexall} mt="20px">
          {data.map((items, index) => (
            <Box float="right" key={index}>
              {index < 1 && <TopDepartments i={index} />}
            </Box>
          ))}
        </Box>
        <HomeProduct />
      </Box>
    </div>
  );
};

export default HomePage;
