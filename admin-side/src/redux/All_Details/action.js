import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR ,USER_LOADING,USER_SUCCESS,USER_ERROR,ADMIN_PRODUCT_LOADING,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_ERROR} from "./actionTypes";
import axios from "axios";
const get_product = (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  return axios
    .get("http://localhost:8080/fashion/clothes", {
      params: { allproducts: 1 },
    })
    .then((res) => {
      console.log("prodiuctssssssssss",res.data)
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_ERROR });
    });
};
const get_user = (dispatch) => {
  console.log("userrrrrrrrrrrrrrrrrrrrrrrr")
    dispatch({ type: USER_LOADING });
    return axios
      .get("http://localhost:8080/user",{
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("AdminLogin"),
        },
      })
      .then((res) => {
        dispatch({ type: USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type:USER_ERROR });
      });
  };
  const adddata=(data)=>(dispatch)=>{
    dispatch({ type: USER_LOADING });
    return axios.post("http://localhost:8080/fashion/clothes",data).then((res)=>{
      console.log(res)
    })
.catch((err)=>{
  dispatch({ type:USER_ERROR });
})
  }
  const adminproduct=(data)=>(dispatch)=>{
dispatch({type:ADMIN_PRODUCT_LOADING})
axios.post("http://localhost:8080/admin",data,{
  headers: {
    "Content-Type": "application/json",
    auth: localStorage.getItem("AdminLogin"),
  },
}).then((res)=>{
  console.log("i ma res data",res.data)
  dispatch({type:ADMIN_PRODUCT_SUCCESS,payload:res.data})
})
.catch((err)=>{
  dispatch({type:ADMIN_PRODUCT_ERROR})
})
  }
export {get_product,get_user,adddata,adminproduct}


