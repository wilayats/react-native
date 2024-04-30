import { StyleSheet } from "react-native";
import { w, h } from '../../utils/constants';

export const PRIMARY_THEME = {
    PRIMARY_COLOR: '#0C4C38',
    ERROR_COLOR: '#FF0000'
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: PRIMARY_THEME.PRIMARY_COLOR,
        borderRadius: 5,
        padding: 10,
        // width: w(30)
    },
    inputError: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: PRIMARY_THEME.ERROR_COLOR,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        marginLeft: 12,
        marginTop: 6,
        fontSize: 20
    },
    button: {
        backgroundColor: PRIMARY_THEME.PRIMARY_COLOR,
        // width: w(50),
        height: h(6),
        textAlign: 'center',
        paddingHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        paddingTop: 10,
        marginTop: 10,
        color:'#fff'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    primaryHeading: {
        fontSize: 40,
        textAlign: 'center',
        color: PRIMARY_THEME.PRIMARY_COLOR,
        marginTop: w(40)
    },
    heading1: {
        fontSize: 40,
        color: PRIMARY_THEME.PRIMARY_COLOR,
    },
    image: {
        height: 100,
        width: 300,
        resizeMode: 'center',
        alignSelf: 'center',
    }
})

export default styles