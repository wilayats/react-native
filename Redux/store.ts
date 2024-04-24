import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./Reducers/index.ts";



export const store = configureStore({
    reducer: rootReducer,
    middleware : getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: myCustomApiService
            }
        })
});
const myCustomApiService = () => {
    return true
}