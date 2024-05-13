import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { CommonActions, DrawerActions, useLinkBuilder } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { FontSemiBold, FontBold, FontMedium, w } from '../utils/constants';
import { PRIMARY_THEME } from '../assets/css/style';
import {AppLogo} from "../assets/images/AppLogo.tsx";

{/* <script src="http://localhost:8097"></script> */ }
export default function CustomDrawer(props: any) {
    const buildLink = useLinkBuilder();

    const { state, navigation, descriptors } = props

    const focusedRoute = state.routes[state.index];
    const focusedDescriptor = descriptors[focusedRoute.key];
    const focusedOptions = focusedDescriptor.options;

    const {
        drawerActiveTintColor,
        drawerInactiveTintColor,
        drawerActiveBackgroundColor,
        drawerInactiveBackgroundColor,
    } = focusedOptions;

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.infoContainerMain}>
                <AppLogo height={100} width={'80%'} />
                <View style={styles.infoContainer}>
                    <Image
                        source={require('../assets/images/Logo.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>Danish Khan</Text>
                        <Text style={styles.viewProfile}>View Profile</Text>
                    </View>
                </View>
            </View>
            <View style={styles.seprator} />
            {
                state.routes.map((route:any, i:any) => {
                    const focused = i === state.index;

                    const onPress = () => {
                        const item = {
                            type: 'drawerItemPress',
                            target: route.key,
                            canPreventDefault: true,
                        }
                        const event = navigation.emit(item);
                        if (!event.defaultPrevented) {
                            navigation.dispatch({
                                ...(focused
                                    ? DrawerActions.closeDrawer()
                                    : CommonActions.navigate({ name: route.name, merge: true })),
                                target: state.key,
                            });
                        }
                    };

                    const {
                        title,
                        drawerLabel,
                        drawerIcon,
                        drawerLabelStyle,
                        drawerItemStyle,
                        drawerAllowFontScaling,
                    } = descriptors[route.key].options;

                    return (
                        <DrawerItem
                            key={route.key}
                            label={
                                drawerLabel !== undefined
                                    ? drawerLabel
                                    : title !== undefined
                                        ? title
                                        : route.name
                            }
                            icon={drawerIcon}
                            focused={focused}
                            activeTintColor={drawerActiveTintColor}
                            inactiveTintColor={drawerInactiveTintColor}
                            activeBackgroundColor={drawerActiveBackgroundColor}
                            inactiveBackgroundColor={drawerInactiveBackgroundColor}
                            allowFontScaling={drawerAllowFontScaling}
                            labelStyle={focused ? { ...drawerLabelStyle, fontFamily: FontSemiBold } : drawerLabelStyle}
                            style={drawerItemStyle}
                            to={buildLink(route.name, route.params)}
                            onPress={onPress}
                        />
                    );
                })
            }
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    infoContainerMain: {
        paddingHorizontal: 18,
        paddingBottom: 18,
    },
    infoContainer: {
        flexDirection: 'row',
    },
    profileImage: {
        height: 45,
        width: 45,
    },
    textContainer: {
        justifyContent: 'space-around',
        marginLeft: 24
    },
    name: {
        fontFamily: FontBold,
        fontSize: 18,
        color: PRIMARY_THEME.INACTIVE_COLOR
    },
    viewProfile: {
        fontFamily: FontMedium,
        fontSize: 14,
        color: PRIMARY_THEME.INACTIVE_COLOR
    },
    seprator: {
        height: 0.5,
        width: w(90),
        marginTop: 15,
        marginBottom: 20,
        backgroundColor: PRIMARY_THEME.INACTIVE_COLOR,
        opacity: 0.5
    }
})