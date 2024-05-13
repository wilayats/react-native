import {createDrawerNavigator} from "@react-navigation/drawer";
import {MainHeader} from "../components/MainHeader";
import {FontMedium} from "../utils/constants.ts";
import {PRIMARY_THEME} from "../assets/css/style.tsx";
import CustomDrawer from "../components/CustomDrawer";
import {drawerScreens, menuScreens} from "../screens.tsx";
import { Drawer} from "../components/Modules.tsx";
import React from "react";
import DashboardIcon from "../assets/images/DashboardIcon";
import Home from "../screens/Home";
import FooterStack from "./FooterNavigator.tsx";



const DrawerNavigator = () =>{
    // @ts-ignore
    return(
        <Drawer.Navigator
            initialRouteName='My Footer'
            screenOptions={{
                header: MainHeader,
                drawerLabelStyle: {
                    marginLeft: -15,
                    fontFamily: FontMedium
                },
                drawerActiveBackgroundColor: 'transparent',
                drawerActiveTintColor: PRIMARY_THEME.PRIMARY_COLOR,
            }}
            drawerContent={CustomDrawer}>
            <Drawer.Screen
                component={FooterStack}
                name={'My Footer'}
                options={{
                    title: "Dashboard",
                    drawerIcon: ({ color }) => <DashboardIcon color={color} />
                }}
            />
            {
                drawerScreens.map((row: any, index: any) => {
                    return (
                        <Drawer.Screen
                            key={`name_${row.name}`}
                            component={row.Component}
                            name={`${row.name}`}
                            options={{
                                title: row.name,
                                drawerIcon: ({ color }) => <DashboardIcon color={color} />
                            }}
                        />
                    )
                })
            }
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;