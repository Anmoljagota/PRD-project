import { REQUEST, SUCCESS, ERROR } from "./actionTypes";
import axios from "axios";
function LOADING_PRODUCT() {
  return {
    type: REQUEST,
  };
}
function SUCCESS_PRODUCT(payload) {
  return {
    type: SUCCESS,
    payload,
  };
}
function ERROR_PRODUCT() {
  return {
    type: ERROR,
  };
}

const getdata = (limit, page) => (dispatch) => {
  dispatch(LOADING_PRODUCT());
  return axios
    .get("http://localhost:8080/homeproduct", {
      params: { page: page, limit: limit },
    })
    .then((res) => {
      console.log("i am res data", res.data);
      dispatch(SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      dispatch(ERROR_PRODUCT());
    });
};
export { getdata };
