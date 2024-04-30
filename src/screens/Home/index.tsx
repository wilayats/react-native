import {View, Text, TouchableOpacity} from "react-native";
import styles from "../../assets/css/style.tsx";
import Logout from "../../components/Logout.tsx";


const Home = (props:any) => {

    // @ts-ignore
    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Test')}>
                <Text style={styles.buttonText}>Go To Test</Text>
            </TouchableOpacity>
            <Logout/>
        </View>
    )
}

export default Home;