import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styleHeader} from "../assets/css/styleHeader.tsx";

import {AppLogo} from "../assets/images/AppLogo.tsx";
import {NotificationIcon} from "../assets/images/NotificationIcon.tsx";
import {ThreeBar} from "../assets/images/ThreeBar.tsx";
import {DrawerHeaderProps} from "@react-navigation/drawer";

export const MainHeader = (props:DrawerHeaderProps) => {
    const {navigation}  = props;
    return (
        <View style={styleHeader.headerContainer}>
            <View style={styleHeader.containerLeftSide}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}>
                   <ThreeBar/>
                </TouchableOpacity>
                <AppLogo height={50} width={150} />
            </View>
            <View style={styleHeader.containerRightSide}>
                <NotificationIcon height={30} width={30} />
                <TouchableOpacity
                    // onPress={() => setShowDropdown(!showDropdown)}
                >
                    <Text style={styleHeader.textLabel}>Add</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
