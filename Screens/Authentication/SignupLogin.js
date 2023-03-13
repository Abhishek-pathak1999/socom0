import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';

const SignupLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    };
    return (
        <View style={styles.outerContainer}>
            <ImageBackground source={require("../../img/bg1.png")} resizeMode="cover" style={styles.backgroundImg}>
                <View style={styles.topText}>
                    <Text style={styles.title}>Hi,</Text>
                    <Text style={styles.title}>Welcome to SoCom!</Text>
                </View>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.innerContainer}>
                        <TouchableOpacity style={[styles.loginButton, styles.whiteButton]} onPress={{}}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton} onPress={{}}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>

                        <View style={{ marginVertical: 50 }}>
                            <Text style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>Continue as a guest</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: 'center',
    },
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative'
    },
    topText: {
        position: 'absolute', 
        top: 20, 
        textAlign: 'center', 
        width: '100%'
    },
    title: {
        fontSize: 25,
        color: 'black',
        paddingHorizontal: 10,
        textAlign: 'center',
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        minHeight: Dimensions.get('window').height * 0.5
    },

    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#526DCE',
        paddingVertical: 30,
        borderTopLeftRadius: 50,
        minHeight: Dimensions.get('window').height * 0.55
    },
    

    loginButton: {
        backgroundColor: '#FFBF23',
        width: '100%',
        maxWidth: 400,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        elevation: 11,
        textAlign: 'center',
        borderWidth: 1
    },
    whiteButton: {
        backgroundColor: 'white',

    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
});

export default SignupLogin;
