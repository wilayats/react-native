import styles from "../assets/css/style.tsx";
import AuthAction from "../../Redux/Actions/AuthAction.ts";
import {Text, TouchableOpacity} from "react-native";
import {useAppDispatch} from "../../Redux/hooks.ts";


const Logout = (props:any) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(AuthAction.login({isLoggedIn:false}))}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </>
    )
}

export default Logout;