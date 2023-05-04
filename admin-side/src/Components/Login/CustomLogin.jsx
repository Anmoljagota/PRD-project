import Tilt from "react-parallax-tilt";
import React, { useState } from "react";
import Styles from "./CustomLogin.module.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/Login/action";
import { useNavigate } from "react-router-dom";
import { get_user } from "../../redux/All_Details/action";
const CustomLogin = ({ inputfield, name, height, inputheight,text }) => {
  const [signup, setSignup] = useState("");
  const [Login, setLogin] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logindata = useSelector((data) => data.login_admin.logintoken);
  console.log("i ma login dataaaaaaaaaaaa", logindata);
  const [inputlength] = useState(new Array(inputfield).fill(""));
  const placeholder = [
    { name: "email", type: "text" },
    { name: "Password", type: "password" },
    { name: "password", type: "submit" },
  ];
  const signupplaceholder = [
    { name: "Image", type: "url" },
    { name: "Name", type: "text" },
    { name: "email", type: "text" },
    { name: "PhoneNumber", type: "number" },
    { name: "Password", type: "password" },
    // { name: "P", type: "n" },
    { name: "k", type: "submit" },
  ];
  function handleChange(e) {
    let { name, value } = e.target;
    console.log("i am name", name);
    if (name == undefined) {
      name = "position";
    }
    setSignup({ ...signup, [name]: value });
  }
  function handleLogin(e) {
    let { name, value } = e.target;
    console.log("i am a nameeeee", name);
    setLogin({ ...Login, [name]: value });
  }
  async function handlesubmit(e) {
    e.preventDefault();
    if (
      signup.Name !== undefined &&
      signup.Password !== undefined &&
      signup.email !== undefined &&
      signup.Image !== undefined
    ) {
      toast.success("🦄 signup success", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(register(signup));
    } else if (Login.email !== undefined && Login.Password !== undefined) {
      toast.success("🦄 Login success", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      try{
await dispatch(register(Login));

if (logindata === true) {
  console.log("naviagte is running");
  navigate("/");
}

      }
      catch(err){

      }
      console.log("dis[patch is runnign");

    
    } else {
      toast.error("🦄 All fields are Required!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    // <Box className={Styles.maincontainer}>
    <div className={Styles.formcontainer}>
      <Tilt>
        <form action="" style={{ height: `${height}` }} onSubmit={handlesubmit}>
          <h3 style={{ color: "white" }}>{name}</h3>
          {inputlength.map((_, index) =>
            inputlength.length <= 3 ? (
              <input
                type={placeholder[index].type}
                placeholder={placeholder[index].name}
                name={placeholder[index].name}
                style={{ height: `${inputheight}` }}
                onChange={handleLogin}
                key={index}
              />
            ) : (
              <>
                {/* {  signupplaceholder[index].name==="P" ? <SelectLabels handleChange={handleChange}/>: */}
                <input
                  type={signupplaceholder[index].type}
                  placeholder={signupplaceholder[index].name}
                  style={{ height: `${inputheight}` }}
                  name={signupplaceholder[index].name}
                  onChange={handleChange}
                  key={index}
                />
                {/* } */}
              </>
            )
          )}
     {text && <h1 className={Styles.signup} onClick={()=>navigate("/signup")}>Create your Shopify account</h1>}
        </form>
      </Tilt>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    // </Box>
  );
};

export default CustomLogin;
