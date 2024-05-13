import {View, Text, TouchableOpacity} from "react-native";
import styles from "../../assets/css/style.tsx";
import Logout from "../../components/Logout.tsx";
import Layout from "../../layouts/Layout.tsx";


const Test = (props:any) => {

    return(
        <View>
            <Layout>
                <Text>Test Screen</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Go To Home</Text>
                </TouchableOpacity>
                <Logout/>
            </Layout>
        </View>
    )
}

export default Test