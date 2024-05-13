import React from 'react';
import {AppStack} from '../components/Modules';
import {menuScreens} from '../screens.tsx';


const ApplicationStack = (props: any) => {
    return (

        <AppStack.Navigator
            screenOptions={{headerShown: false}}
            /*  initialRouteName={'Footer'}*/
        >
            {
                menuScreens.map((row: any, index: any) => {
                    return (
                        <AppStack.Screen
                            key={`sname_${row.name}`}
                            {...props}
                            component={row.Component}
                            name={row.name}/>
                    )
                })
            }
        </AppStack.Navigator>

    );
};
export default ApplicationStack