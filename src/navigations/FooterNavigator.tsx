import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BOTTOM_HEIGHT} from "../utils/constants.ts";
import {menuScreens} from "../screens.tsx";

const Tab = createBottomTabNavigator();

const FooterStack = (props: any) => {

    const menus = menuScreens.filter((item) => item.isTab);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: BOTTOM_HEIGHT,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    position: 'absolute',
                }
        }}
        >
            {
                menus.map((row: any, index: any) => {
                    const {name, Component} = row;/**/
                    return (
                        <Tab.Screen
                            key={name}
                            name={name}
                            component={Component}
                        />
                    )
                })
            }
        </Tab.Navigator>
    );
};
export default FooterStack