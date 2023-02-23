import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as product_reducer} from "../All_Details/reducer"
import thunk from "redux-thunk";
const rootreducer = combineReducers({
 product_reducer
});
const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
export { store };