/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch} from "react-redux";

import Layout from "./App/Layouts/Layout.tsx";
import Component1 from "./Components/Component1.tsx";
import Component2 from "./Components/Component2.tsx";
import AuthAction from "./Redux/Actions/AuthAction.ts";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(props: any): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const dispatch = useDispatch();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [show, setShow] = useState('hello')

    const clickButton = (e: any) => {
        console.log('hello world')
        // @ts-ignore
        dispatch(AuthAction.login({text:Math.random(1,30000)}));
    }

    return (
        <Layout backgroundStyle={backgroundStyle} {...props}>
            <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>


                <Button onPress={clickButton} title={'Press Button'}/>

                <Component1/>
                <Component2/>
                {/* <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="See Your Changes">
                        <ReloadInstructions/>
                    </Section>
                    <Section title="Debug">
                        <DebugInstructions/>
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                    </Section>
                    <LearnMoreLinks/>*/}
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
