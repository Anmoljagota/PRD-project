import React, { useContext, useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Styles from "../ProductPage/Product.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../Components/Backdrop/Backdrop";
import Styles1 from "../../css/Project.module.css";
import {
  Filterdata,
  singleproduct,
  sortgetdata,
} from "../../Redux/Product_redux/action";
import ProductItems from "./ProductItems";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Filtering from "../../Components/Filtering";
import ProductStyles from "../ProductPage/Product.module.css";
import PlacementExample from "../../Components/Drawer";
import DrawerExample from "../../Components/FilterDrawer";
import ContextApi, { Mycontext } from "../../Components/Contextapi/ContextApi";
const CustomProductPage = () => {
  const {getsortdata}=useContext(Mycontext)
  
  const navigate = useNavigate();
  const location = useLocation();
  const [norender, setNotrender] = useState("");
  const sortdata = (order) => {
    console.log("i am value", order);
    setSort(order);
  };
  const [params, setParams] = useSearchParams();
  let sortdata1 = params.getAll("_sort");
  // console.log("i am sort",sortdata)
  const [sort, setSort] = useState(sortdata1[0] || []);
  const dispatch = useDispatch();
  const data = useSelector((data) => {
    return data.homeproduct;
  }, shallowEqual);
  const getproduct = (id) => {
    dispatch(singleproduct({ product: id }));
    setTimeout(() => {
      navigate("/singleproduct");
      console.log("navigate runnnnnninggggggggggggggggggggggggggggg");
    }, 2000);
  };
  // if (data.loading === true) {
  //   return <SimpleBackdrop />;
  // }
  // useEffect(() => {
  //   if (sort) {
  //     data.obj._sort = sort;
  //     setParams(data.obj);
  //   }

  //   if (sort || location.search!=="") {
  //     console.log("location.searchhhhhhhhhhhhhhhhhhh for soring", location);
  //     const changledata = {
  //       params: {
  //         _sort: params.getAll("_sort"),
  //       },
  //     };
  //     // dispatch(Filterdata(changledata));
  //   }
  // }, [sort,location.search]);

  return (
    <>
      <Box
        zIndex="1"
        backgroundColor="white"
        height="70px"
        mt="-50px"
        position="fixed"
        className={ProductStyles.sortmobile}
        color="black"
        width="100%"
       
      >
        <Box width="50%" border="1px solid grey">
          <PlacementExample />
        </Box>
        <Box
          width="50%"
          border="1px solid grey"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <DrawerExample />
        </Box>
      </Box>
      <Box className={Styles.maindiv} mt="150px">
        <SimpleBackdrop loading={data.loading} error={data.error} />
        <Box className={Styles.innermaindiv}>
          <Box
            width="16%"
            height="100vh"
            borderRight="1px solid #DDDDDDOundefined"
            padding="0px 15px 0px 15px"
            position="relative"
            float="left"
            className={ProductStyles.none}
          >
            <Box height="100%">
              <Box
                fontSize="28px"
                fontWeight="700"
                borderBottom="DDDDDDOundefined"
                textAlign="left"
                padding="15px 10px 15px 10px"
                className={ProductStyles.filterby}
              >
                Filter by
              </Box>
              <Filtering />
              {/* <Drawer/> */}
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
            className={ProductStyles.sortingphone}
          >
            <span style={{ marginLeft: "10px" }}>
              Sort By:<span style={{ marginLeft: "15px" }}>Popular</span>
              <span style={{ marginLeft: "10px" }}>|</span>
            </span>
            <span
              style={{ marginLeft: "10px" }}
              onClick={() => getsortdata("LTH")}
            >
              Price:<span>Low to Hight</span>{" "}
              <span style={{ marginLeft: "10px" }}>|</span>
            </span>
            <span
              style={{ marginLeft: "10px" }}
              onClick={() => getsortdata("HTL")}
              value="desc"
              name="sortby"
            >
              Price:<span>High to Low</span>{" "}
              <span style={{ marginLeft: "10px" }}>|</span>
            </span>

            <span
              style={{ marginLeft: "10px" }}
              onClick={() => getsortdata("disc")}
              value="disc"
              name="sortby"
            >
              Discount <span style={{ marginLeft: "10px" }}>|</span>
            </span>
            <span style={{ marginLeft: "10px" }}>New Arrivals</span>
          </Box>

          <Box className={ProductStyles.products}>
            <SimpleGrid
              columns={[2, 2, 4]}
              spacing="19px"
              className={Styles.grid}
            >
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
            {/* <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="80px"
          ></Box> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomProductPage;
