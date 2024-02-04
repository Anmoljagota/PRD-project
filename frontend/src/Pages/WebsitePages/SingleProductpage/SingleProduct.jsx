import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../../css/Project.module.css";
import Styles1 from "./SingleProduct.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import { addtocart } from "../../../Redux/Product_redux/action";
import LoginDrawer from "../Login/LoginDrawer";
let images = [{ data: "" }, { data: "" }, { data: "" }, { data: "" }];
const SingleProduct = () => {
  const dispatch = useDispatch();
  const details = useSelector((data) => data.homeproduct.singledata);
  const loginornot = useSelector((data) => data.homeproduct.cartdata);
  function handleClick() {
    dispatch(addtocart(details[0]._id));
  }

  return (
    <div style={{ marginTop: "150px" }}>
      <Box>
        <Box width="95%" margin="auto" height="100vw">
          <Box height="40vw" className={Styles.flexall}>
            <Box
              height="auto"
              width="68%"
              className={Styles.flexall}
              padding="10px"
            >
              <Box className={Styles1.images}>
                {images.map((i, items) => (
                  <Box key={i}>
                    <Image
                      src={details[0].image}
                      height="80px"
                      width="120px"
                      mt="20px"
                    />
                  </Box>
                ))}
              </Box>
              <Box height="35vw" className={Styles1.singleproductimage}>
                <Image
                  src={details[0].image}
                  alt="something wrong with image"
                  height="100%"
                  width="100%"
                />
              </Box>
            </Box>
            <Box height="40vw" textAlign="left" className={Styles.description}>
              <Box
                width="100%"
                margin="auto"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                padding="20px"
                mt="40px"
                zIndex="1"
              >
                <Box className={Styles.flexall}>
                  <Box
                    color="#004f9a"
                    boxShadow="inset 0 0 0 0.0625rem #004f9a"
                    p="1px 5px 1px 5px"
                  >
                    Best seller
                  </Box>
                  <Box>
                    <AiOutlineHeart
                      style={{ marginLeft: "40px", fontSize: "25px" }}
                      className={Styles.heart}
                    />
                  </Box>
                </Box>
                <h1
                  style={{
                    color: "#46474a",
                    fontSize: "14px",
                    textDecorationLine: "underline",
                    marginTop: "30px",
                  }}
                >
                  {details[0].brand}
                </h1>
                <div
                  style={{
                    fontSize: "20px",

                    marginTop: "20px",
                    color: "#2e2f32",
                    lineHeight: "1.7",
                    fontWeight: "700",
                  }}
                >
                  {details[0].description}
                  <br />
                  <Box textAlign="left" fontSize="28px" marginTop="10px">
                    ₹{details[0].price}
                  </Box>
                  <h1
                    style={{
                      marginTop: "15px",
                      fontSize: "12px",
                      width: "63%",
                    }}
                    className={Styles.flexall}
                  >
                    Price when purchased online
                    <span>
                      <TbAlertCircle />
                    </span>
                  </h1>
                </div>

                {loginornot === "you are not authorized" ? (
                  <LoginDrawer />
                ) : (
                  <button
                    className={Styles.signin}
                    style={{ width: "50%", height: "40px", marginTop: "20px" }}
                    onClick={handleClick}
                  >
                    Add to cart
                  </button>
                )}
              </Box>
              <hr />
            </Box>
          </Box>
        </Box>
      </Box>
      )
    </div>
  );
};

export default SingleProduct;
