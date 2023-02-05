import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import Styles from "../css/Project.module.css";
import axios from "axios";

const HomeProduct = () => {
  const navigate=useNavigate()
  const [page, SetPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getdata1 = (page, limit) => {
    axios
      .get("http://localhost:8080/homeproduct", {
        params: { page: page, limit: limit },
      })
      .then((res) => {
        setData((prev) => [...prev, ...res.data]);
        console.log(res.data,"lllll")
      });
  };
function gotonextpage(){
navigate("/products")
}
  // const data1 = useSelector((store) => console.log(store));
  // console.log("i am data",data)
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
  useEffect(() => {
    getdata1(page, 50);
  }, [page]);
  console.log("i am data", data);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);
  if (loading === true) {
    return <h1>...Loading</h1>;
  }
  console.log("i am loading", loading);
  return (
    <div>
      <Box background="white">
        <Box>
          <SimpleGrid columns={[2, null, 5]}>
            {data &&
              data.length > 0 &&
              data.map((items) => (
                <Box mt="20px" key={items._id} className={Styles.product} onClick={gotonextpage}>

                  <Box
                    height="200px"
                    width="200px"
                    position="relative"
                    margin="0 auto"
                    background="white"
                  >
                    <Image src={items.image} alt="something wrong" />
                  </Box>
                  <Box background="white">{items.title}</Box>
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
                      {items.price}
                    </Box>
                  </Box>
                </Box>
              ))}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default HomeProduct;
