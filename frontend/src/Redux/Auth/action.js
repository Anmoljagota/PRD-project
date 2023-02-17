import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_ERROR } from "./actionTypes";
import { Link } from "react-router-dom";
import axios from "axios";
function LOADING_PRODUCT() {
  return {
    type: LOGIN_REQUEST,
  };
}
function SUCCESS_PRODUCT(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}
function ERROR_PRODUCT() {
  return {
    type: LOGIN_ERROR,
  };
}

const getregister = (data) => (dispatch) => {
  console.log("i am data", data);
  console.log("running");
  dispatch(LOADING_PRODUCT());
  return axios
    .post("https://crazy-crown-yak.cyclic.app/register", data)
    .then((res) => {
      console.log("i am res data", res.data);
      dispatch(SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      dispatch(ERROR_PRODUCT());
    });
};
const getlogin = (data) => (dispatch) => {
  // const navigate=useNavigate()
  console.log("i am data", data);
  console.log("running");
  dispatch(LOADING_PRODUCT());
  return axios
    .post("https://real-gold-iguana-cape.cyclic.app/login", data)
    .then((res) => {
      console.log("i am res data", res.data);
      if (res.data !== "Wrong Credentials") {
        alert("login successfull");
        {
          <Link to="/" />;
        }
        localStorage.setItem("token", res.data);
      } else {
        alert("Wrong Credentials");
      }
      dispatch(SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      dispatch(ERROR_PRODUCT());
    });
};

export { getregister, getlogin };
