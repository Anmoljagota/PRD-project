import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { border, Box, Button, Image, Stack } from "@chakra-ui/react";
import Styles from "../css/Project.module.css"
export const ImageSlider = () => {
  const images = [
    {
      image: "https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png",
      product: "Rollbacks on bags",
      description: "Low prices on tons of fun!",
    },
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-d646/k2-_a5e635a4-0e7d-4293-b450-21f107e0ab87.v1.jpg?odnHeight=680&odnWidth=1208&odnBg=FFFFFF",
      product: "Warm up for way less",
      description: "Stylish comfortable easy to fit and less Price",
    },
    {
      image: "https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png",
      product: "Upto 60% off",
    },
    {
      image: "https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg",
      product: "Buy 2 get one free",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        
      }}
    >
      <Slider {...settings} style={{ width: "100%" }}>
        {images.map((Item, index) => {
          return (
            <Box className={Styles.ProductBox}>
              <Box
                // border="1px solid red"
                width="26%"
                mt="20px"
                display="inline-block"
textAlign="left"
float="left"                
              >
                <Box>{Item.product}</Box>
                <Box className={Styles.desc}>{Item.description}</Box>
                <button className={Styles.btn}>Shop now</button>
              </Box>
              <Box
                key={index}
                // border="1px solid black"
                mt="20px"
                width="69%"
                float="right"
                display="inline-block"
                mr="10px"
              >
                <Image src={Item.image} height="390px" />
              </Box>
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};
