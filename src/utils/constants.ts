import Config from "react-native-config";
import {Dimensions} from "react-native";

export const config = {
    ENV: Config.ENV,
    API_BASE_URL: Config.API_BASE_URL ?? ''
}

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

export {
    layout,
    w,
    h
}
