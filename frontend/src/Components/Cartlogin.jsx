import { Box } from "@chakra-ui/react";
import React from "react";
import Styles from "../css/Project.module.css";
import { useNavigate } from "react-router-dom";
const Cartlogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="200px"
      >
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff"
              alt="something wrong with image"
            />
          </Box>
          <Box fontWeight="700" color="black" fontSize="23px" mt="15px">
            <h1>Sign in to see your saved items.</h1>
          </Box>

          <button
            className={Styles.signin}
            style={{ height: "40px", width: "52%" ,marginTop:"25px"}}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default Cartlogin;
