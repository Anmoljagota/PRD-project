import {ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_LOADING,ADMIN_LOGIN_ERROR} from "./actionTypes"
const initail_state={
    loading:false,
    error:false,
    logintoken:false
}
const reducer=(state=initail_state,action)=>{
const {type,payload}=action;
switch(type){
case ADMIN_LOGIN_LOADING:return {...state,loading:true,error:false}
case ADMIN_LOGIN_SUCCESS:return {...state,loading:false,error:false,logintoken:true}
case ADMIN_LOGIN_ERROR:return {...state,loading:false,error:true}
default:return state
}
}
export {reducer}