import React, { useState } from "react";
import { Alert, AlertIcon, Box, Image, Input, Stack } from "@chakra-ui/react";
import Styles from "../../css/Project.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getlogin } from "../../Redux/Auth/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom";
const Login = ({width,text,inputwidth}) => {
  console.log("i ma inputwidthhhhhhhhhhhhhhhhhh",inputwidth)
  const login_data = {
    email: "",
  };
  const location=useLocation();
  const [login, setLogin] = useState(login_data);
  const dispatch = useDispatch();
  const newtoken = localStorage.getItem("token");
  const data = useSelector((details) => details.loginuser.isAuth);
  console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
  function handleAlert(){
    if (data === "Wrong Credentials") {
      toast.error('🦄 Wrong Credentials!',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
)
} else if(data !== "Wrong Credentials"){
  console.log("weongggggggggggggggggg runingggggggggggggggggggggggggg")
        toast.success('🦄 Login successfull', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
  }
  function login1(e) {
    const { name, value } = e.target;
    setLogin({ email: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getlogin(login));
  }

  return (
    <div style={{ marginTop: "180px" }}>
      <Box
        width={width}
        lineHeight="1.5"
        fontSize="20px"
        margin="auto"
        fontWeight="700"
        textAlign="center"
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
        <Box>

        <Box mt="10px"  width="100%">{text}</Box>
        </Box>
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
        <Box >
          <Box  display="flex" justifyContent="center" alignItems="center" >

         
          <Input
            type="text"
           
             border="1px solid black"
              p= "10px"
              width= {inputwidth}
              mt= "10px"
            
            onChange={login1}
            placeholder="Enter email"
          />
           </Box>
          <br />
          <Box display="flex" justifyContent="center" alignItems="center">
            
          <button
            style={{ width: "20%", height: "40px" }}
            className={Styles.signin}
            onClick={handleAlert}
            >
            continue
          </button>
            </Box>
          <Link to="/signup" >
            <h1 style={{ marginTop: "10px", cursor: "pointer",textAlign:"center" }}>
              New User? Sign Up
            </h1>
          </Link>
          <br />
        </Box>
      </form>
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
    </div>
  );
};

export default Login;
