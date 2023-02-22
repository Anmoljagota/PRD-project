import Tilt from "react-parallax-tilt";
import React, { useState } from "react";
import Styles from "./CustomLogin.module.css";
const CustomLogin = ({ inputfield, name }) => {
  const [inputlength] = useState(new Array(inputfield).fill(""));
  const placeholder = [
    { name: "Email", type: "text" },
    { name: "Password", type: "password" },
    { name: "password", type: "submit" },
  ];
  const signupplaceholder = [
    { name: "First Name", type: "text" },
    { name: "Last Name", type: "text" },
    { name: "Email", type: "text" },
    { name: "Phone Number", type: "number" },
    { name: "Password", type: "password" },
    { name: "Conform Password", type: "password" },
    { name: "password", type: "submit" },
  ];
  return (
    // <Box className={Styles.maincontainer}>
    <div className={Styles.formcontainer}>
      <Tilt>
        <form action="">
          <h3 style={{ color: "white" }}>{name}</h3>
          {inputlength.map((_, index) =>
            inputlength.length <= 3 ? (
              <input
                type={placeholder[index].type}
                placeholder={placeholder[index].name}
              />
            ) : (
              <input
                type={signupplaceholder[index].type}
                placeholder={signupplaceholder[index].name}
              />
            )
            )}
        </form>
      </Tilt>
    </div>
            // </Box>
  );
};

export default CustomLogin;
