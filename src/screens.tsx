import Home from "./screens/Home";
import Test from "./screens/Test";

export const menuScreens = [
    {
        name:'Home',
        Component: Home,
        isTab:true
    },
    {
        name:'Test',
        Component:Test,
        isTab:true
    }
];
export const isBottomTabVisible = menuScreens.filter((item) => item.isTab).length;