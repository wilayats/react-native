/**
 * @format
 */
import {AppRegistry, StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App'; // Import your root component
import {store} from "./Redux/store.ts";


import {name as appName} from './app.json';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Root = () => (
    <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
            <SafeAreaProvider>
                <App/>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
