import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../css/Project.module.css";
const Total = ({ newarr }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="15px" width="370px">
        <button
          className={Styles.signin}
          style={{ height: "40px" }}
          onClick={()=>navigate("/address")}
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
          <Box>hh</Box>
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
          <Box>₹510</Box>
        </Box>
      </Box>
    </div>
  );
};

export default Total;
