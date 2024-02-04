import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "../../../css/Project.module.css"
const Total = ({ newarr,total }) => {
  const details = useSelector((data) => data.homeproduct.userDetails);
  const navigate = useNavigate();
  function checking() {
    details.length > 0 ? navigate("/checkout") : navigate("/address");
  }
  return (
    <div>
      <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="15px" width="370px" position="sticky" top="110px">
        <button
          className={Styles.signin}
          style={{ height: "40px" }}
          onClick={checking}
        >
          Continue to checkout
        </button>
        <Box
          p="10px"
          borderRadius="15px"
          height="60px"
          mt="20px"
          background="#002d58"
          color="white"
        >
          Items in your cart have reduced prices. Check out now for extra
          savings!
        </Box>
        <hr />
        <Box className={Styles.flexall} mt="30px">
          <Box>
            Subtotal{" "}
            <span
              style={{ color: "#46474a", fontWeight: "400", marginLeft: "3px" }}
            >
              ({newarr.length} items)
            </span>
          </Box>
          <Box>{total}</Box>
        </Box>
        <Box className={Styles.flexall} mt="17px">
          <Box>Savings</Box>
          <Box>₹50</Box>
        </Box>
        <br />
        <hr />
        <br />
        <Box className={Styles.flexall}>
          <Box>Shipping (below ₹35 order minimum)</Box>
          <Box>₹75</Box>
        </Box>
        <Box className={Styles.flexall} mt="30px">
          <Box>Taxes</Box>
          <Box>Calculated at checkout</Box>
        </Box>
        <br />
        <hr />
        <br />
        <Box className={Styles.flexall} mt="10px">
          <Box>Estimated total</Box>
          <Box>{total-50+75}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default Total;
