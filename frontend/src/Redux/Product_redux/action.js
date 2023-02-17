import {
  REQUEST,
  SUCCESS,
  ERROR,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_ERROR,
  CART_REQUEST,
  CART_SUCCESS,
  CART_ERROR,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from "./actionTypes";
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
function SINGLE_LOADING_PRODUCT() {
  return {
    type: SINGLE_PRODUCT_REQUEST,
  };
}
function SINGLE_SUCCESS_PRODUCT(payload) {
  return {
    type: SINGLE_PRODUCT_SUCCESS,
    payload,
  };
}
function SINGLE_ERROR_PRODUCT() {
  return {
    type: SINGLE_PRODUCT_ERROR,
  };
}
const getdata = (limit, page) => (dispatch) => {
  // console.log("i am limit", limit);

  dispatch(LOADING_PRODUCT());
  return axios
    .get("https://real-gold-iguana-cape.cyclic.app/fashion/clothes", {
      params: { page: 1, limit: 100 },
    })
    .then((res) => {
      console.log("i am running");
      dispatch(SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      dispatch(ERROR_PRODUCT());
    });
};
const sortgetdata = (data) => (dispatch) => {
  dispatch(LOADING_PRODUCT());

  return axios
    .get("https://real-gold-iguana-cape.cyclic.app/fashion/clothes", data)
    .then((res) => {
      dispatch(SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      dispatch(ERROR_PRODUCT());
    });
};
const addtocart = (data) => (dispatch) => {
  if (data.product) {
    data = data.product;
  }
  dispatch({ type: CART_REQUEST });
  console.log(data, "lllllll");
  return axios
    .post(
      "https://real-gold-iguana-cape.cyclic.app/cartdata",
      { product: data },
      {
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      console.log("resssssssssssssss", res.data);
      if (res.data === "you are not authorized") {
        alert("Login first");
      }
      dispatch({ type: CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: CART_ERROR });
    });
};
const singleproduct = (data) => (dispatch) => {
  console.log("i am dataaaaaaaaa", data);
  SINGLE_LOADING_PRODUCT();
  if (data.product) {
    data = data.product;
  }
  axios
    .post("https://real-gold-iguana-cape.cyclic.app/fashion/clothes", {
      product: data,
    })
    .then((res) => {
      console.log("resssssssssssssss", res.data);
      if (res.data === "you are not authorized") {
        alert("Login first");
      }
      dispatch(SINGLE_SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(SINGLE_ERROR_PRODUCT());
    });
};
const cartdata = () => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  return axios
    .get(`https://real-gold-iguana-cape.cyclic.app/cartdata`, {
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data, "ppppppppp");

      dispatch({ type: CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: CART_ERROR });
    });
};
const cartdelete = (id) => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios
    .delete(`https://real-gold-iguana-cape.cyclic.app/cartdata/${id}`)
    .then((res) => {
      console.log(res.data, "resssssddddddddddd");
    });
  dispatch({ type: CART_ERROR });
};
const Filterdata = (data) => (dispatch) => {
  console.log("i am dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa", data);
  // const category=""
  // if (data.params.category) {
  //    category = data.params.category;
  // }
  // console.log("i am paranms", category);
  dispatch(LOADING_PRODUCT());
  return axios
    .get("http://localhost:8080/fashion/clothes", data)
    .then((res) => {
      console.log("i am runningggggggggggg", res.data);
 dispatch(SUCCESS_PRODUCT(res.data));
    })
    .catch((err) => {
      dispatch(ERROR_PRODUCT());
    });
};
const user_adderss_details = (data) => (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST });
  axios
    .post("https://real-gold-iguana-cape.cyclic.app/address", data, {
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {});
  dispatch({ type: USER_DETAILS_ERROR });
};
const user_adderss_details_get = () => (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST });
  axios
    .get("http://localhost:8080/address", {
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("i ma resssssssssssssssssssaaaaa", res.data);
      dispatch({ type: USER_DETAILS_SUCCESS, payload: res.data });
    });
  dispatch({ type: USER_DETAILS_ERROR });
};
export {
  getdata,
  sortgetdata,
  singleproduct,
  cartdata,
  Filterdata,
  addtocart,
  user_adderss_details,
  user_adderss_details_get,
  cartdelete,
};
