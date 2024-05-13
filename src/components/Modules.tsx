import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import ApplicationStack from '../navigations/AppNavigator'
import AuthApplication from '../navigations/authNavigator'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useAppSelector} from "../../Redux/hooks.ts";
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from "../navigations/DrawerNavigator.tsx";
import {menuScreens} from "../screens.tsx";
import FooterStack from "../navigations/FooterNavigator.tsx";

export const AppStack = createNativeStackNavigator();
export const Drawer = createDrawerNavigator();

const Modules = (props: any) => {
    const isLoggedIn = useAppSelector((state: any) => state.auth.user.isLoggedIn)
    return (
        <>
            <NavigationContainer>
                <AppStack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {!isLoggedIn ? (
                        <AppStack.Screen name='AuthApp' component={AuthApplication}/>
                    ) : (
                        <>
                            <AppStack.Screen name="App" component={DrawerNavigator}/>
                            <AppStack.Screen name='Screens' component={ApplicationStack}/>
                            {/*{
                                menuScreens.map((row: any, index: any) => {
                                    return (
                                        <AppStack.Screen
                                            key={index}
                                            component={row.Component}
                                            name={row.name}/>
                                    )
                                })
                            }*/}
                        </>
                    )}
                </AppStack.Navigator>
            </NavigationContainer>
        </>

    )
}
export default Modules
