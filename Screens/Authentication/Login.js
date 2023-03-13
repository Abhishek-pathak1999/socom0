import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Your login logic goes here
    };

    return (
        <View style={styles.outerContainer}>
            <ImageBackground source={require("../../img/bg1.png")} resizeMode="cover" style={styles.backgroundImg}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <Text style={styles.title}>Welcome,</Text>
                    <Text style={styles.title}>Good to see you!</Text>
                    <View style={styles.innerContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>

                        <View style={{ width: '100%' }}>
                            <Text style={{ textAlign: 'right' }}>Forgot password?</Text>
                        </View>


                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.loginWith}>
                            <Text
                                style={styles.loginWithText}>Or Login with</Text>
                        </View>

                        <View style={styles.bottomButtonsContainer}>
                            <TouchableOpacity style={styles.bottomButtons} onPress={handleLogin}>
                                <Image style={{ width: 40, height: 40 }} source={require("../../img/google.png")} />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bottomButtons} onPress={handleLogin}>
                                <Image style={{ width: 40, height: 40 }} source={require("../../img/facebook.png")} />
                            </TouchableOpacity>
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
        justifyContent: 'center'
    },

    outerContainer: {
        flex: 1,
        position: 'relative'
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
    },
    title: {
        fontSize: 25,
        color: 'black',
        paddingHorizontal: 10
    },
    inputContainer: {
        width: '95%',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#00000026'
    },
    input: {
        fontSize: 16,
        color: 'white',
        paddingVertical: 10,
    },
    loginButton: {
        backgroundColor: '#FFBF23',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        elevation: 11,
        textAlign: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },

    bottomButtonsContainer:{
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        maxWidth: 400
    },
    bottomButtons: {
        width: '45%',
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 8,
        borderColor: '#FFBF23',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    loginWith: {
        width: '100%', 
        borderTopColor: 'white',
        borderTopWidth: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginVertical: 30 
    }, 
    loginWithText:{
        textAlign: 'center', 
        backgroundColor: '#526DCE',
        position: 'relative', 
        bottom: 10, 
        paddingHorizontal: 20
    }
});

export default Login;
