import Config from "react-native-config";
import {Dimensions,Platform} from "react-native";

export const config = {
    ENV: Config.ENV,
    API_BASE_URL: Config.API_BASE_URL ?? ''
}
const platform = Platform.OS;
const isAndroid = Platform.OS === 'android';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const layout = {
    window: {
        height,
        width
    }
}
export const BOTTOM_HEIGHT=80

const w = (i: number) => {
    return layout.window.width * (i / 100)
}

const h = (i: number) => {
    return layout.window.height * (i / 100)
}

export const dynamicLayout = (evt: any, setDimension: any) => {
    const {x, y, width, height} = evt.nativeEvent.layout
    setDimension({
        x,
        y,
        width,
        height
    })
}

const FontBold = 'Gilroy-Bold';
const FontSemiBold = 'Gilroy-SemiBold';
const FontRegular = 'Gilroy-Regular';
const FontMedium = 'Gilroy-Medium';
const FontLightItalic = 'Gilroy-LightItalic';
export {
    layout,
    w,
    h,
    FontBold,
    FontSemiBold,
    FontRegular,
    FontMedium,
    FontLightItalic,
    platform,
    isAndroid
}
