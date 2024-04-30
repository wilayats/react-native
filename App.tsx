/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import { useDispatch} from "react-redux";
import AuthAction from "./Redux/Actions/AuthAction.ts";
import Modules from "./src/components/Modules.tsx";


function App(props: any): React.JSX.Element {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AuthAction.login({isLoggedIn:true}));
    }, []);
    return (
        <Modules {...props}/>
    );
}
export default App;
