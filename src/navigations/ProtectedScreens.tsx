import {View} from "react-native";
import Home from "../screens/Home";
import React from "react";


const ProtectedScreens = (props:any) => {

    const {MainApp} = props
    return (
        <>
            <MainApp.Screen name="Home" component={Home}/>
        </>
    )
}
export default ProtectedScreens