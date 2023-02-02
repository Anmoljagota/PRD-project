import {reducer} from "./Product_redux/reducer"
import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
const rootreducer=combineReducers({
    homeproduct:reducer
        })
const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
export {store}