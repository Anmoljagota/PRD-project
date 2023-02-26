import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR,USER_LOADING,USER_SUCCESS,USER_ERROR,ADMIN_PRODUCT_LOADING,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_ERROR } from "./actionTypes";
const inital_state = {
  loading: false,
  error: false,
  data: [],
  userdata:[],
  adminproduct:[]
};
const reducer = (state = inital_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, error: false, loading: true };
    case PRODUCT_SUCCESS:
      return { ...state, error: false, loading: false, data: payload };
    case PRODUCT_ERROR:
      return { ...state, error: true, loading: false };
      case USER_LOADING:return {...state,loading:true,error:false}
      case USER_SUCCESS:return {...state,loading:false,error:false,userdata:payload}
      case USER_ERROR:return {...state,loading:false,error:true}
      case ADMIN_PRODUCT_LOADING:return {...state,loading:true,error:false}
      case ADMIN_PRODUCT_SUCCESS:return {...state,loading:false,error:false,adminproduct:payload}
      case ADMIN_PRODUCT_ERROR:return {...state,loading:false,error:true}
      default:return state
  }
};
export {reducer}