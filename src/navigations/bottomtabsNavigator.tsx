import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Home from '../screens/Home';


const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
