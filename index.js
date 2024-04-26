/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App'; // Import your root component
import {store} from "./Redux/store.ts";


import {name as appName} from './app.json';
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
