import {Text, TouchableOpacity, View} from "react-native";
import styles from "../../assets/css/style.tsx";
import Logout from "../../components/Logout.tsx";
import Layout from "../../layouts/Layout.tsx";


// @ts-ignore
const Home = (props: any) => {

    // @ts-ignore
    return (
        <View>
            <Layout>
                <Text>Home</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Test')}>
                    <Text style={styles.buttonText}>Go To Test</Text>
                </TouchableOpacity>
                <Logout/>
            </Layout>
        </View>
    )
}

export default Home;