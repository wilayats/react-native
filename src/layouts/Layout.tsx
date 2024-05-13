import {View} from "react-native";
import {MainHeader} from "../components/MainHeader.tsx";
import {StyleLayout} from "../assets/css/StyleLayout.tsx";
import {BOTTOM_HEIGHT, dynamicLayout, layout} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import {isBottomTabVisible} from "../screens.tsx";


const Layout = (props: any) => {

    // @ts-ignore
    const {mainContentHeight, setHeadersDimension, setFooterDimension} = useMainContentHeight();

    return (
        <View style={StyleLayout.mainWrapper}>
            <View
                onLayout={(evt: any) => dynamicLayout(evt, setHeadersDimension)}
                style={StyleLayout.mainHeader}>
            </View>
            <View style={{...StyleLayout.mainContent, minHeight: mainContentHeight}}>
                {props.children}
            </View>
            <View onLayout={(evt: any) => dynamicLayout(evt, setFooterDimension)} style={StyleLayout.mainFooter}></View>
        </View>
    )
}

const useMainContentHeight = () => {
    const [headersDimension, setHeadersDimension] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const [footerDimension, setFooterDimension] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const [mainContentHeight, setMainContentHeight] = useState(400)

    useEffect(() => {
        const {height} = layout.window
        const differ = (height - (height - headersDimension.height - footerDimension.height))
        if (isBottomTabVisible > 0) {
            setMainContentHeight(height - differ - BOTTOM_HEIGHT)
        } else {
            setMainContentHeight(height - differ - 24);
        }
    }, [headersDimension.height, footerDimension.height]);
    return {
        mainContentHeight,
        setFooterDimension,
        setHeadersDimension
    }
}

export default Layout