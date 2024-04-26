import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const Component1 = (props:any) => {

    const auth = useSelector((state:any)=>state.auth);

    const [user,setUser] = useState(null)

    useEffect(() => {
        setUser(auth.user)
    }, [auth]);

    return (
        <View>
            <Text>Component 1  {JSON.stringify(user)}</Text>
        </View>
    )
}

export default Component1