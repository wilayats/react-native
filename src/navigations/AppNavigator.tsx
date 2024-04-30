import React from 'react';
import MainHeader from '../components/MainHeader';

import { AppStack } from '../components/Modules';
import Home from "../screens/Home";
import Test from "../screens/Test";
import Footer from "./FooterNavigator.tsx";
import FooterStack from "./FooterNavigator.tsx";

const ApplicationStack = () => {
  return (
    <>
    <MainHeader/>
      <AppStack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Footer'}>
          <AppStack.Screen name={'Footer'} component={FooterStack} />
            <AppStack.Screen name={'Home'} component={Home} />
            <AppStack.Screen name={'Test'} component={Test} />

      </AppStack.Navigator>
    </>
  );
};
export default ApplicationStack