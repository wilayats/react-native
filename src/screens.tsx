import Home from "./screens/Home";
import Test from "./screens/Test";

export const menuScreens = [
    {
        name:'Home',
        Component: Home,
        isTab:false
    },
    {
        name:'Test',
        Component:Test,
        isTab:false
    }
];
export const isBottomTabVisible = menuScreens.filter((item) => item.isTab).length;