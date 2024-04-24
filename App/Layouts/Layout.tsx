import {SafeAreaView, ScrollView, StatusBar, Text, View} from "react-native";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import React from "react";


const Layout = (props:any) => {
    const {isDarkMode,backgroundStyle} = props
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                {props.children}
            </ScrollView>

        </SafeAreaView>
    );
}
export default Layout;