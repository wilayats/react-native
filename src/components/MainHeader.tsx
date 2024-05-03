import {Text, View} from 'react-native';
import React from 'react';
import {styleHeader} from "../assets/css/styleHeader.tsx";

export default function MainHeader() {
    return (
        <View style={styleHeader.headerContainer}>
            <View style={styleHeader.containerLeftSide}>
                <Text style={styleHeader.textLabel}>Left</Text>
            </View>
            <View style={styleHeader.containerRightSide}>
                <Text style={styleHeader.textLabel}>Right</Text>
            </View>
        </View>
    );
}
