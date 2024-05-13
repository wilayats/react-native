import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import styles from "../../assets/css/style.tsx";
import Logout from "../../components/Logout.tsx";
import Layout from "../../layouts/Layout.tsx";


const Clients = (props:any)=>{

    return (
        <SafeAreaView>
            <Layout>
                <Text>Client Screen</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Test')}>
                    <Text style={styles.buttonText}>Go To Test</Text>
                </TouchableOpacity>
                <Logout/>
            </Layout>
        </SafeAreaView>
    )
}
export default Clients;