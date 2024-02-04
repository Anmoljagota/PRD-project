import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Box, Image, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import Styles from "../../css/Project.module.css";
import axios from "axios";
import Homeproduct from "../../Pages/WebsitePages/HomePage/Homepage.module.css";
import { Backdrop } from "@mui/material";

const HomeProduct = () => {
  const navigate = useNavigate();
  const [page, SetPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [datalength, setdatalength] = useState(0);
const [error,setError]=useState(false)
  useEffect(() => {
    if (datalength < 96) {
      getdata1(page, 20);
    }
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);
  const getdata1 = (page, limit) => {
    setLoading(true);
    axios
      .get("https://crazy-crown-yak.cyclic.app/homeproduct", {
        params: { page: page, limit: limit },
      })
      .then((res) => {
        setData((prev) => [...prev, ...res.data]);
        console.log("hlo i am data", data);
        setdatalength(data.length);
        setLoading(false);
      })
     .catch((err)=>{
setError(true)
     })
  };

  function gotonextpage() {
    navigate("/products");
  }
  if (loading === true) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="2.75"
          width="56"
          visible={true}
        />
      </Box>
    );
  }
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        SetPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={Styles.homepageproduct}>
      <Box background="#e6f1fc">
        <SimpleGrid columns={[2, 4, 5]} spacing={0.5}>
          {data &&
            data.length > 0 &&
            data.map((items) => (
              <Box
                mt="20px"
                key={items._id}
                className={Homeproduct.product}
                onClick={gotonextpage}
              >
                <Box className={Styles.flexall}>
                  <Box
                    height="200px"
                    width="200px"
                    position="relative"
                    background="white"
                    className={Styles.flexall}
                  >
                    <Image src={items.image} alt="something wrong" />
                  </Box>
                </Box>
                <Box background="white" className={Homeproduct.title}>
                  {items.title}
                </Box>
                <Box
                  color="#388e3c"
                  paddingTop="8px"
                  fontSize="16px"
                  background="white"
                >{`Up to ${items.discount} off`}</Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  background="white"
                  paddingTop="8px"
                >
                  <Box
                    display="inline-block"
                    mr="5px"
                    textDecorationLine="line-through"
                    background="white"
                    paddingTop="8px"
                  >
                    {items.value}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    fontWeight="700"
                    fontSize="16px"
                    background="white"
                    mt="7px"
                    alignItems="center"
                  >
                    <BiRupee />
                    {items.price ? items.price : 500}
                  </Box>
                </Box>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default HomeProduct;
