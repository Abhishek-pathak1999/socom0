import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#FFFFFF'


    },
    item: {
        //padding: 10,
        paddingStart: 10,
        justifyContent: 'center',
        fontSize: 15,
        // height: 45,
        // fontWeight: 500,
        color: '#000000',



    },
    button: {

        fontSize: 15,
        fontWeight: 700,
        //backgroundColor: '#FFFFFF'
        color: '#000000',
        paddingLeft: 10

    }


});

const Address = () => {
    // const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <View style={{ backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontWeight: 500, fontSize: 16, marginVertical: 25, paddingStart: 10, color: '#000000' }}> Address </Text>

            </View>
            <View style={{ backgroundColor: '#ECECEC' }}>
                <Text style={{ fontWeight: 500, fontSize: 13, marginVertical: 10, paddingStart: 10, color: '#000000' }}> Default Address </Text>

            </View>
            

            <View style={{ backgroundColor: '#ECECEC', flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                <View style={{ width: '49.9%', backgroundColor: '#FFFFFF', padding: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 700, color: '#000000' }}>Edit</Text>
                </View>
                <View style={{ width: '49.9%', backgroundColor: '#FFFFFF', alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontWeight: 700, color: '#000000' }}>Delete</Text>
                </View>
            </View>
            <View style={{ padding: 15, paddingStart: 10, flexDirection: 'row', backgroundColor: '#ECECEC' }}>
                <Icon name="plus" size={22} color="#000000" />
                <Text style={styles.button}>Add new address</Text>
            </View>


        </View>

    );
};

export default Address;

