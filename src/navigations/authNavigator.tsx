import React from 'react';
import Login from '../screens/Login';
import {AppStack} from '../components/Modules';

const AuthApplication = () => {
    return (
        <AppStack.Navigator
            screenOptions={{headerShown: false, gestureEnabled: false}}
            initialRouteName={'Login'}>
            <AppStack.Screen name={'Login'} component={Login}/>
        </AppStack.Navigator>
    );
};

export default AuthApplication;