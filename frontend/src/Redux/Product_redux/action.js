import {REQUEST,SUCCESS,ERROR} from "./actionTypes"
import axios from "axios"
function LOADING_PRODUCT(){
    return {
        type:REQUEST
    }
}
function SUCCESS_PRODUCT(payload){
   return {

       type:SUCCESS,
       payload
}
}
function ERROR_PRODUCT(){
    return {
        type:ERROR
    }
}

const getdata=(dispatch)=>{
    dispatch(LOADING_PRODUCT())
    return axios.get("http://localhost:8080/homeproduct").then((res)=>{
        dispatch(SUCCESS_PRODUCT(res.data))
    })
    .catch((err)=>{
        dispatch(ERROR_PRODUCT())
    })
}
export {getdata}

    
