import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Header(props) {
    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 15, alignItems: 'center'}}>

            {props.isLabel &&
                <Text style={{ color: '#000000',fontSize:16 }}>{props.label}</Text>
            }

            {!props.isLabel &&
                <TouchableOpacity style={{ width: '15%' }} onPress={() => { navigation.openDrawer(); }}>
                    <Icon name="menu" size={30} color="#6E6E6E" />
                </TouchableOpacity>
            }

            <View style={{ flexDirection: 'row', width: '85%', justifyContent: 'flex-end' }}>

                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { }}>
                    <Icon name="cards-heart-outline" size={30} color="#6E6E6E" />
                </TouchableOpacity>

                {!props.isLabel &&
                    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { }}>
                        <AntDesign name="search1" size={30} color="#6E6E6E" />
                    </TouchableOpacity>}

                {!props.isLabel &&
                    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { }}>
                        <Icon name="bell-outline" size={30} color="#6E6E6E" />
                    </TouchableOpacity>}

                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { }}>
                    <AntDesign name="shoppingcart" size={30} color="#6E6E6E" />
                </TouchableOpacity>

            </View>
        </View>
    );
}