import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import ApplicationStack from '../navigations/AppNavigator'
import AuthApplication from '../navigations/authNavigator'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useAppSelector} from "../../Redux/hooks.ts";
import {Text, View} from 'react-native';
import FooterStack from "../navigations/FooterNavigator.tsx";
import Home from "../screens/Home";
import Test from "../screens/Test";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {isBottomTabVisible, menuScreens} from "../screens.tsx";

export const AppStack = createNativeStackNavigator();
export const Drawer = createDrawerNavigator();


function EmptyScreen() {
    return <View/>;
}

function EmptyScreen1() {
    return (
        <View>
            <Text>1</Text>
        </View>
    );
}


const Modules = (props: any) => {
    const isLoggedIn = useAppSelector((state: any) => state.auth.user.isLoggedIn)
    return (
        <>
            <NavigationContainer>
                <AppStack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={'Footer'}
                >
                    {!isLoggedIn ? (
                        <AppStack.Screen name='AuthApp' component={AuthApplication}/>
                    ) : (
                        <>
                            {
                                isBottomTabVisible > 0 && (
                                    <AppStack.Screen name={'Footer'} component={FooterStack} {...props}/>
                                )
                            }
                            <AppStack.Screen name='App' component={ApplicationStack}/>
                            {
                                menuScreens.map((row: any, index: any) => {
                                    return (
                                        <AppStack.Screen
                                            key={index}
                                            component={row.Component}
                                            name={row.name}/>
                                    )
                                })
                            }
                        </>
                    )}
                </AppStack.Navigator>
            </NavigationContainer>
        </>

    )
}
export default Modules

const RootHome = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="RootHome" component={Home}/>
            <Drawer.Screen name="Profile" component={EmptyScreen1}/>
        </Drawer.Navigator>
    )
}