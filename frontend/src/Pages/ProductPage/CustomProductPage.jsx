import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../ProductPage/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getdata, sortgetdata } from "../../Redux/Product_redux/action";
import ProductItems from "./ProductItems";
import { useLocation, useSearchParams } from "react-router-dom";
import Filtering from "../../Components/Filtering";
const CustomProductPage = () => {
  const location = useLocation();
  const sortdata = (order,sortBy) => {
    console.log("i am value", order);
    setSort(order);
    // setSortby(sortBy)
  };

  const [searhparams, setSearchParama] = useSearchParams();
  let sortdata1 = searhparams.getAll("_sort");

  //  const [sortby,setSortby]=useState(orderdata||"")
  const [sort, setSort] = useState(sortdata1[0] || "");

  const dispatch = useDispatch();
  const data = useSelector((data) => data.homeproduct);
  console.log("i am data", data);
  useEffect(() => {
    dispatch(getdata());
  }, []);
  useEffect(() => {
    if (sort) {
      console.log("running");
      let params = {};
      sort && (params._sort = sort);
      // sortby!==""&& (params.order=sortby)

      setSearchParama(params);
      const newsortBy = searhparams.getAll("_sort");
      // const neworder = searhparams.getAll("order");
      console.log("sort", newsortBy);
      // console.log("sortby", neworder);
      if (location||sort) {
        const changedata = {
          params: {
            _sort: sortdata1[0],
            // _order:newsortBy[0],
          },
        };
        console.log("changedata", changedata);
        dispatch(sortgetdata(changedata));
      }
    }
  }, [sort]);

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
            <Filtering/>
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
          <span style={{ marginLeft: "10px" }}>
            Sort By:<span style={{ marginLeft: "15px" }}>Popular</span>
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
            // defaultChecked={sort==="low_to_high"}
            onClick={() => sortdata("LTH", "price")}
          >
            Price:<span>Low to Hight</span>{" "}
            <span style={{ marginLeft: "10px" }}>|</span>
          </span>
          <span
            style={{ marginLeft: "10px" }}
            // defaultChecked={sort==="high_to_low"}
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
            {data.data.length > 0 &&
              data.data.map((items) => {
                return <ProductItems {...items} key={items._id} />;
              })}
          </SimpleGrid>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="80px"
            // border="1px solid black"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomProductPage;
