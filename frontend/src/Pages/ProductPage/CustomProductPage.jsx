import React, { useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../ProductPage/Product.module.css";
import {useDispatch, useSelector} from "react-redux"
import { getdata } from "../../Redux/Product_redux/action";
import ProductItems from "./ProductItems";
// import { RotatingLines } from "react-loader-spinner";
const CustomProductPage = () => {
const dispatch=useDispatch()
  const data=useSelector((data)=>data.homeproduct)
  console.log("daaaaa",data.data.length)
useEffect(()=>{
  dispatch(getdata())
},[])
  // if (Productdata.loading === true) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center">
  //       <RotatingLines
  //         strokeColor="grey"
  //         strokeWidth="5"
  //         animationDuration="1.75"
  //         width="96"
  //         visible={true}
  //       />
  //     </Box>
  //   );
  // }

  return (
    <Box className={Styles.maindiv}>
      <Box className={Styles.innermaindiv}>
        <Box
          width="16%"
          height="100vh"
          borderRight="1px solid #DDDDDDOundefined"
          padding="0px 15px 0px 15px"
          position="relative"
          float="left"
          border="1px solid blue"
        >
          <Box height="100%">
            <Box
              fontSize="28px"
              fontWeight="700"
              borderBottom="DDDDDDOundefined"
              textAlign="left"
              padding="15px 10px 15px 10px"
            >
              Filter by
            </Box>
            
          </Box>
        </Box>

        <Box
          width="84%"
          height="0.7%"
          float="left"
          fontSize="20px"
          padding="7px 7px 4px 35px"
          lineHeight="25px"
          fontWeight="450"
          cursor="pointer"
          // border="3px solid green"
        >
          <span
            style={{ marginLeft: "10px" }}
            
          >
            Sort By:<span style={{ marginLeft: "15px" }}>Popular</span>
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
           
          >
            Price:<span>Low to Hight</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
          
          >
            Price:<span>High to Low</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>

          <span style={{ marginLeft: "10px" }}>
            Discount <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span style={{ marginLeft: "10px" }}>New Arrivals</span>
        </Box>
        <Box width="84%"float="left" >
          <SimpleGrid columns={[2, 2, 4]} spacing="19px">
            {data.data.length>0 &&data.data.map((items)=>{
return <ProductItems {...items} key={items._id}/>
            })}
          </SimpleGrid>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="80px"
            // border="1px solid black"
          >
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomProductPage;
