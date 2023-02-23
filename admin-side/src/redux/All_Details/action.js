import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR ,USER_LOADING,USER_SUCCESS,USER_ERROR} from "./actionTypes";
import axios from "axios";
const get_product = (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  return axios
    .get("http://localhost:8080/fashion/clothes", {
      params: { allproducts: 1 },
    })
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_ERROR });
    });
};
const get_user = (dispatch) => {
    dispatch({ type: USER_LOADING });
    return axios
      .get("http://localhost:8080/user")
      .then((res) => {
        dispatch({ type: USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type:USER_ERROR });
      });
  };
export {get_product,get_user}
