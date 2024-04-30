import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from "../screens/Home";
import Test from "../screens/Test";
import {Icon} from "react-native-paper";

const Tab = createBottomTabNavigator();

const FooterStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Home'}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Test" component={Test}/>
            <Tab.Screen name="Tests" component={Test}/>

        </Tab.Navigator>
    );
};
export default FooterStack