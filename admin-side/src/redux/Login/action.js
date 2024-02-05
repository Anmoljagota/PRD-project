import axios from "axios";
import {ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_LOADING,ADMIN_LOGIN_ERROR} from "./actionTypes";
const register=(data)=>(dispatch)=>{
    let axiosurl=""
    if(data.Image!==undefined){
axiosurl="register"
    }
    else{
        axiosurl="login"
    }
dispatch({type:ADMIN_LOGIN_LOADING})
return axios.post(`https://real-gold-iguana-cape.cyclic.app/${axiosurl}`,data).then((res)=>{
console.log("i ma admin register",res.data)
if(res.data!=="User Already Created" && res.data!=="User Created" && res.data!=="Wrong Credentials"){
    localStorage.setItem("AdminLogin",res.data)
}
dispatch({type:ADMIN_LOGIN_SUCCESS,payload:res.data})
})
.catch((err)=>{
    dispatch({type:ADMIN_LOGIN_ERROR})
})
}

export {register}