import { reducer } from "./Product_redux/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as loginuser } from "./Auth/redux";
import {reducer as product_reducer} from "../Redux/Product_redux/reducer";
// import {reducer as login_admin} from "../Redux/Login/reducer"
import thunk from "redux-thunk";
const rootreducer = combineReducers({
  homeproduct: reducer,
  loginuser,
  product_reducer,

  
});
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
export { store };
//hlo
