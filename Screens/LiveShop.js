import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from "react"
import LiveNow from './liveshop/LiveNow';
import ForYou from './liveshop/ForYou';
import Popular from './liveshop/Popular';
import Header from '../components/header/Header';

const LiveShop = () => {
    const [toggleState, setToggleState] = useState(1);
    const [loading, setloading] = useState(1);

    const tabs = [
        {
            id: 1,
            title: 'Live now',
        },
        {
            id: 2,
            title: 'For You',
        },
        {
            id: 3,
            title: 'Popular',
        }
    ]

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const Loader = () => {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Header isLabel={true} label={"Live Shop"} />
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ flexDirection: 'row', }}>
                    {
                        tabs.map((item) => {
                            return (
                                <TouchableOpacity style={
                                    toggleState == item.id ? [styles.MyTabs, styles.activeTab] : [styles.MyTabs]
                                } key={item.id} onPress={() => { toggleTab(item.id) }}>
                                    <Text style={toggleState == item.id ? [styles.MyTabText, styles.activeText] :
                                        [styles.MyTabText]}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            <ScrollView style={{ width: '95%' }}>
                <View style={toggleState == 1 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                    <LiveNow />
                </View>
                <View style={toggleState == 2 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                    <ForYou />
                </View>
                <View style={toggleState == 3 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                    <Popular />
                </View>
            </ScrollView>
        </View>
    )
}

export default LiveShop;

const styles = StyleSheet.create({
    MyTabs: {
        width: '31%',
        borderBottomColor: '#909090',
        borderBottomWidth: 3,
        padding: 10,
    },
    MyTabText: {
        textAlign: 'center',
        color: 'black'
    },
    activeText: {
        color: '#FFBF23'
    },
    activeTab: {
        color: 'black',
        borderBottomColor: '#FFBF23',
        borderBottomWidth: 3,
    },
    TabContent: {
        width: '100%',
        display: 'none',
        minWidth: 300
    },
    activeContent: {
        display: 'flex'
    }
})
