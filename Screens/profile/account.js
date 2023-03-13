import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header/Header';
import { Alert } from 'react-native/Libraries/Alert/Alert';
import Setting from './setting';
import HelpCentre from './helpcentre';
import Address from './address';

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
        fontWeight: 800,

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

const Account = () => {
    const navigation = useNavigation();
    const [isProfile, setIsProfile] = useState(1);
    // const isProfile=1;

    return (

        <View style={styles.container}>


            {
                isProfile == 1 &&
                <View style={styles.container}>
                    <Header isLabel={true} label={"Accounts"} />
                    <FlatList
                        data={[
                            { key: 'Profile', icon: 'ios-person-circle-sharp' },
                            { key: 'Orders', icon: 'reader-outline' },
                            { key: 'Refer and Earn', icon: 'cash-outline' },
                            { key: 'Address', icon: 'ios-location-outline' },
                            { key: 'Coupons', icon: 'pricetag-outline' },
                            { key: 'Help Centre', icon: 'headset-outline' },
                            { key: 'Settings', icon: 'settings-outline' }

                        ]}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity onPress={() => setIsProfile(index)}>


                                <View style={styles.ico}>

                                    {/* <View style={{flexDirection:'row', width:'90%'}}> */}

                                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                        <Ionicon name={item.icon} size={30} color="#FFBF23" />
                                        <Text style={styles.item}>{item.key}</Text>
                                    </View>
                                    <Icon name="chevron-right" size={25} color="#6E6E6E" />
                                </View>
                            </TouchableOpacity>
                        }
                    />
                    <View style={{
                        marginHorizontal: 20, height: 50, position: 'absolute', justifyContent: 'center',
                        alignItems: 'center',
                        width: 350,
                        bottom: 20, padding: 10, borderWidth: 2, borderColor: '#FFBF23', backgroundColor: '#FFFFFF'
                    }}>


                        <Text style={{ fontSize: 15, fontWeight: 800, color: '#FFBF23' }} onPress={() => navigation.navigate('Login')}> LOG OUT</Text>

                    </View>
                </View>
            }

            {
                isProfile == 2 &&
                <Setting />
            }
            {
                isProfile == 3 &&
                <Address />
            }
            {
                isProfile == 4 &&
                <Setting />
            }
            {
                isProfile == 5 &&
                <HelpCentre />
            }
            {
                isProfile == 6 &&
                <Setting />
            }



        </View>



    );
};

export default Account;