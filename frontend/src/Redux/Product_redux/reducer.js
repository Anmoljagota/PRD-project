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
const inital_state = {
  loading: false,
  error: false,
  productdata: [],
  singledata: [],
  cartdata: [],
  obj: {},
  userDetails: [],
};

const reducer = (state = inital_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST:
      return { ...state, loading: true, error: false };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productdata: payload,
      };
    case ERROR:
      return { ...state, loading: false, error: true };
    case SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: false };
    case SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        singledata: payload,
      };
    case SINGLE_PRODUCT_ERROR:
      return { ...state, loading: false, error: true };
    case CART_REQUEST:
      return { ...state, loading: true, error: false };
    case CART_SUCCESS:
      return { ...state, loading: false, error: false, cartdata: payload };
    case CART_ERROR:
      return { ...state, loading: false, error: true };
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true, error: false };
    case USER_DETAILS_SUCCESS:
      return { ...state, loading: false, error: false, userDetails: payload };
    case USER_DETAILS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
export { reducer };
