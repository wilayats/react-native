import { StyleSheet } from "react-native";

import { w, h } from '../../utils/constants';
export const styleHeader = StyleSheet.create({
    headerContainer:{
        backgroundColor:'green',
        paddingHorizontal:10,
        paddingVertical:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between"
    },
    containerLeftSide:{},
    containerRightSide:{},
    textLabel:{
        color:'#fff'
    }
});
