import {REQUEST,SUCCESS,ERROR} from "./actionTypes"
const inital_state={
    loading:false,
    error:false,
    
    data:[]
}

const reducer=(state=inital_state,action)=>{
    const {type,payload}=action
    switch(type){
        case REQUEST:return {...state,loading:true,error:false}
        case SUCCESS:return {...state,loading:false,error:false,data:payload}
        case ERROR:return {...state,loading:false,error:true}
        default :return state
    }
}
export {reducer}