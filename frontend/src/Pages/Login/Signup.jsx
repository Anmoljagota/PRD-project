import React, { useState } from "react";
import { Alert, AlertIcon, Box, Image, Stack } from "@chakra-ui/react";
import Styles from "../../css/Project.module.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getregister } from "../../Redux/Auth/action";
const Signup = () => {
  const login_data = {
    email: "",
  };
  const [login, setLogin] = useState(login_data);
  const dispatch = useDispatch();
  const register = useSelector((data) => data.loginuser);
  if (register.data === "User Created") {
    // <Stack spacing={3}>
    //   <Alert status="success" variant="solid">
    //     <AlertIcon />
    //     Data uploaded to the server. Fire on!
    //   </Alert>
    // </Stack>;
    alert(register.data);
    //  {return <NavLink to="/"/>}
  }
  function signup(e) {
    const { name, value } = e.target;
    setLogin({ email: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getregister(login));
  }
  console.log("i am login", login);
  return (
    <div style={{ marginTop: "180px" }}>
      <Box
        width="15%"
        lineHeight="1.5"
        fontSize="20px"
        margin="auto"
        fontWeight="700"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr="20px"
        >
          <Image
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png"
            marginLeft="10px"
            height="40px"
            width="40px"
          />
        </Box>
        <Box mt="10px">Enter your email to create new account</Box>
      </Box>
      <form action="" style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <label
          htmlFor=""
          style={{
            marginRight: "160px",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Email Address
        </label>
        <Box>
          <input
            type="text"
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "20%",
              marginTop: "10px",
            }}
            onChange={signup}
          />
          <br />
          <button
            style={{ width: "20%", height: "40px", marginTop: "20px" }}
            className={Styles.signin}
          >
            continue
          </button>
          <Link to="/login">
            <h1 style={{ marginTop: "10px", cursor: "pointer" }}>
              Sign in or Login
            </h1>
          </Link>
          <br />
        </Box>
      </form>
    </div>
  );
};

export default Signup;
