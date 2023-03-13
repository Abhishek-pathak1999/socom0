import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({
    container: {

        flex: 1,
        // backgroundColor:'red'


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
    ico: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginVertical: 1,
        flexDirection: 'row',
        padding: 7,
        flex: 1,
        paddingVertical: 10



    }
});

const HelpCentre = () => {
    // const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <View>
                <Text style={{ fontWeight: 500, fontSize: 20, marginVertical: 15, paddingStart: 10, color: '#000000' }}> Help Centre </Text>
                <Text style={{ fontWeight: 500, fontSize: 20, marginVertical: 15, paddingStart: 10, color: '#000000' }}> Order  related issues </Text>
            </View>
            <FlatList
                data={[
                    { key: 'Order Status and Delivery' },
                    { key: 'Payment & Refund' },
                    { key: 'Return & Exchange' },
                    { key: 'Other' },


                ]}
                renderItem={({ item }) =>



                    <View style={styles.ico}>

                        {/* <View style={{flexDirection:'row', width:'90%'}}> */}

                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>

                            <Text style={styles.item}>{item.key}</Text>
                        </View>

                        <Icon name="chevron-right" size={25} color="#6E6E6E" />
                        

                    </View>
                }
            />

        </View>

    );
};

export default HelpCentre;
