import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Your login logic goes here
    };

    return (
        <View style={styles.outerContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={{ fontSize: 24, color: 'black',  color: 'white' }}>Create Account</Text>
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
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    
                    <TouchableOpacity style={styles.yellowButton} onPress={handleLogin}>
                        <Text style={styles.loginText}>Signup</Text>
                    </TouchableOpacity>

                    <View style={{
                        width: '100%', borderTopColor: 'white',
                        borderTopWidth: 1, alignItems: 'center', 
                        justifyContent: 'center', marginTop : 40, marginBottom: 20
                    }}>
                        <Text
                            style={{
                                textAlign: 'center', backgroundColor: '#526DCE',
                                position: 'relative', bottom: 10, paddingHorizontal: 20
                            }}>Or Sign up with</Text>
                    </View>

                    <View style={{
                        width: '100%', flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity style={styles.bottomButtons} onPress={handleLogin}>
                            <Image style={{width: 40, height: 40}} source={require("../../img/google.png")} />
                            
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtons} onPress={handleLogin}>
                            <Image style={{width: 40, height: 40}} source={require("../../img/facebook.png")} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{marginBottom: 20}}>Already have an account ? Login Now</Text>
                </View>
            </KeyboardAvoidingView>
        </View>

    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#526DCE',
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
        paddingVertical: 10,
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
    yellowButton: {
        backgroundColor: '#FFBF23',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        elevation: 11,
        textAlign: 'center'
    },
    loginText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    bottomButtons: {
        width: 140,
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 8,
        borderColor: '#FFBF23',
        borderWidth: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 50
    }
});

export default Signup;
