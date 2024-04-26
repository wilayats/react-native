import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import thunk from 'redux-thunk';
import {rootReducer} from "./Reducers/index.ts";

// Configure store with Redux Toolkit's `configureStore` instead of `createStore`
// @ts-ignore
const store = configureStore({
    reducer: rootReducer,
    // @ts-ignore
    devTools: process.env.NODE_ENV !== 'production', // Enable devtools only in development
});
/*const middleware = getDefaultMiddleware => {
    return [
        ...getDefaultMiddleware(),
        thunk
    ];
};*/

// Assigning store to next wrapper
const makeStore = () => store;

export {  store };
