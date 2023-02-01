import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { border, Box, Button, Image, Stack } from "@chakra-ui/react";
import Styles from "../css/Project.module.css";
export const ImageSlider = () => {
  const images = [
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-df2e/k2-_74ba37ae-7748-4008-a40c-8aad0c58a193.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
      product: "it's Vale-time!",
      description: "Find decor, cards toys and more for less",
    },
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-43b3/k2-_254d9811-84c8-4c44-9136-76ca2d6e892e.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
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
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-3df6/k2-_7ad50cc3-facc-4635-9d20-c312d163f875.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
      product: "Upto 60% off",
    },
    {
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-496d/k2-_617b5c21-96d7-4589-962c-6be4129f40d4.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
      product: "Buy 2 get one free",
      description: "New savings every week! Hurry to score low, low prices.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function SlideImages() {}
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
            <Box className={Styles.ProductBox} key={index}>
              <Box
                width="300px"
                position="absolute"
                zIndex="1"
                m="20px 0 0 10px"
                textAlign="left"
                float="left"
              >
                <Box>{Item.product}</Box>
                <Box className={Styles.desc}>{Item.description}</Box>
                <button className={Styles.btn}>Shop now</button>
              </Box>
              <Box
                key={index}
                width="100%"
                float="right"
                position="relative"
                height="402px"
              >
                <Image src={Item.image} width="100%" height="410px" />
              </Box>
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};
