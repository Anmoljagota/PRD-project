import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/autoplay";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper";
import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbLockOff } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { get_product, get_user } from "../../redux/All_Details/action";
const Slidingimages = () => {
  const data = useSelector((details) => details);
  const images = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/02/01/16/51/ascending-graph-1173935_960_720.png",
      backgroundc: "#08bbdf",
      name: "TOTAL PRODUCTS",
      icon: <AiOutlineShoppingCart />,
      totaldata:data.product_reducer.data.length
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.BHMEZXV0XM--V-41zRNAjwHaEi?pid=ImgDet&rs=1",
      backgroundc: "#6488ba",
      name: "NEW PRODUCTS ADDED",
      icon: <MdOutlineBookmarkAdded />,
      
    },
    {
      image:
        "https://th.bing.com/th/id/R.64f8841001ec140298846169d501f93e?rik=UcsGdTp%2bPUaN0Q&riu=http%3a%2f%2fwww.conceptdraw.com%2fsolution-park%2fresource%2fimages%2fsolutions%2fbar-graphs%2fGraphs-and-Charts-Bar-Charts-Iran-Internet-Users-per-100-Person.png&ehk=XtuW0skSY86TTTTl4JPS%2bbrzEKnJVqlr1%2bR2mnBkkbE%3d&risl=&pid=ImgRaw&r=0",
      backgroundc: "#0bffc5",
      name: "TOTAL USERS",
      icon: <FiUsers />,
      totaldata:data.product_reducer.userdata.length
    },
    {
      
      backgroundc: "#ffe60b",
      name: "MOST LIKED PRODUCTS",
      icon: <AiOutlineHeart />,
    },
    {
      image:
        "https://th.bing.com/th/id/R.64f8841001ec140298846169d501f93e?rik=UcsGdTp%2bPUaN0Q&riu=http%3a%2f%2fwww.conceptdraw.com%2fsolution-park%2fresource%2fimages%2fsolutions%2fbar-graphs%2fGraphs-and-Charts-Bar-Charts-Iran-Internet-Users-per-100-Person.png&ehk=XtuW0skSY86TTTTl4JPS%2bbrzEKnJVqlr1%2bR2mnBkkbE%3d&risl=&pid=ImgRaw&r=0",
      backgroundc: "#6488ba",
      name: "USERS BLOCKED",
      icon: <TbLockOff />,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.w73NbhaOYSQmFXhYg-ChNQHaDQ?pid=ImgDet&w=524&h=230&rs=1",
      backgroundc: "#bd0bff",
      name: " TOTAL SALES",
      icon: <AiOutlineDollarCircle />,
    },
  ];
  
  useEffect(() => {
    dispatch(get_product);
    dispatch(get_user)
  }, []);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "50px" }}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {images.map((items, index) => (
          <SwiperSlide
            style={{
              height: "170px",
              width: "260px",
              background: `${items.backgroundc}`,
              position: "relative",
            }}
            key={index}
          >
            <Flex
width="100%"
              height="35%"
              justifyContent="space-around"
              mb="40%"
              fontWeight="600"
              position="absolute"
            >
              <Box fontSize="14px" textAlign="left">
                <Text>{items.name} </Text>
                <Text
                  fontSize="30px"
                  color="#fff"
                  fontWeight="600"
                  letterSpacing="2px"
                >
                  {items.totaldata}
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                color={items.backgroundc}
                mb="40%"
                height="30px"
                width="30px"
                borderRadius="full"
                background="white"
              >
                {items.icon}
              </Box>
            </Flex>
            <Box height="70px"  width="90%" margin="auto" mt="34%">

            <Img src={items.image} height="100%" width="100%"/>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slidingimages;
