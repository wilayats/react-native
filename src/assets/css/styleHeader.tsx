import { StyleSheet } from "react-native";

import { w, h } from '../../utils/constants';
export const styleHeader = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: 'white',
        height: h(8.125),
        borderTopColor: '#F3F5F5',
        borderTopWidth: 1,
    },
    containerLeftSide:{
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        alignItems: 'center',
    },
    containerRightSide:{
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        alignItems: 'center',
    },
    textLabel:{
        color:'#fff'
    }
});
