import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../ProductPage/Product.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getdata,
  singleproduct,
  sortgetdata,
} from "../../Redux/Product_redux/action";
import ProductItems from "./ProductItems";
import { useLocation, useSearchParams } from "react-router-dom";
import Filtering from "../../Components/Filtering";
const CustomProductPage = () => {
  const location = useLocation();
  const sortdata = (order, sortBy) => {
    console.log("i am value", order);
    setSort(order);
  };
  const [searhparams, setSearchParama] = useSearchParams();
  let sortdata1 = searhparams.getAll("_sort");
  const [sort, setSort] = useState(sortdata1[0] || "");
  const dispatch = useDispatch();
  const data = useSelector((data) => {
    return data.homeproduct;
  }, shallowEqual);
  const getproduct = (id) => {
    dispatch(singleproduct(id));
  };
console.log("pppppppppp",data)
  useEffect(() => {
    
    dispatch(getdata());
  }, []);
  useEffect(() => {
    if (sort) {
      let params = {};
      sort && (params._sort = sort);
      setSearchParama(params);
      const newsortBy = searhparams.getAll("_sort");
      console.log("sort", newsortBy);
      if (location || sort) {
        const changedata = {
          params: {
            _sort: sortdata1[0],
          },
        };
        dispatch(sortgetdata(changedata));
      }
    }
  }, [sort]);
 
  return (
    <Box className={Styles.maindiv} mt="150px">
      <Box className={Styles.innermaindiv}>
        <Box
          width="16%"
          height="100vh"
          borderRight="1px solid #DDDDDDOundefined"
          padding="0px 15px 0px 15px"
          position="relative"
          float="left"
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
            <Filtering />
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
        >
          <span style={{ marginLeft: "10px" }}>
            Sort By:<span style={{ marginLeft: "15px" }}>Popular</span>
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
            onClick={() => sortdata("LTH", "price")}
          >
            Price:<span>Low to Hight</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
            onClick={() => sortdata("HTL", "price")}
            value="desc"
            name="sortby"
          >
            Price:<span>High to Low</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>

          <span
            style={{ marginLeft: "10px" }}
            onClick={() => sortdata("disc", "discount")}
            value="disc"
            name="sortby"
          >
            Discount <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span style={{ marginLeft: "10px" }}>New Arrivals</span>
        </Box>
        <Box width="84%" float="left">
          <SimpleGrid columns={[2, 2, 4]} spacing="19px">
            {data.productdata.length > 0 &&
              data.productdata.map((items) => {
                return (
                  <ProductItems
                    image={items.image}
                    getproduct={getproduct}
                    brand={items.brand}
                    description={items.description}
                    prev_price={items.prev_price}
                    discount={items.discount}
                    deals={items.deals}
                    delivery={items.delivery}
                    price={items.price}
                    key={items._id}
                    id={items._id}
                    
                  />
                );
              })}
          </SimpleGrid>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="80px"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomProductPage;
