import { reducer } from "./Product_redux/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as loginuser } from "./Auth/redux";
import thunk from "redux-thunk";
const rootreducer = combineReducers({
  homeproduct: reducer,
  loginuser,
});
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
export { store };
//hlo
