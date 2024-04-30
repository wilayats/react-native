import {View, Text, TouchableOpacity} from "react-native";
import styles from "../../assets/css/style.tsx";
import Logout from "../../components/Logout.tsx";


const Test = (props:any) => {

    return(
        <View>
            <Text>Text Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go To Home</Text>
            </TouchableOpacity>
            <Logout/>

        </View>
    )
}

export default Test