import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer.ts";


export const rootReducer = combineReducers({
    auth:AuthReducer
});