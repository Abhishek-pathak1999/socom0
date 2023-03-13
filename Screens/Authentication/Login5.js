import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// import MainHeading from '../../components/mainHeading';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    { id: '1', category: 'Category A' },
    { id: '2', category: 'Category B' },
    { id: '3', category: 'Category C' },
    { id: '4', category: 'Category D' },
    { id: '5', category: 'Category E' },
    { id: '6', category: false },


];

const Card = ({ category, onPress, isSelected }) => {
    return (
        category?
        <View onPress={onPress} style={[styles.card]}>
            <View style={styles.cardText}><Text style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: 5, textAlign: 'center'}}>{category}</Text></View>
            <Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={require("../../img/google.png")} />
        </View>
        :
        <View onPress={onPress} style={[styles.card]}>
            <Text style={{fontSize:50, fontWeight: 'bold'}}>+</Text>
            
        </View>
    );
};

const YourCategory = () => {
    const [selectedIds, setSelectedIds] = useState([]);

    const handleCardPress = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const isCardSelected = (id) => {
        return selectedIds.includes(id);
    };

    return (
        <View style={{ position: 'relative', flex: 1, backgroundColor: 'black' }}>
            <Text style={{ color: 'white', fontSize: 22, marginHorizontal: 15, marginVertical: 20 }}>Your Categories</Text>

            <FlatList
                data={data}
                numColumns={3}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        category={item.category}
                        onPress={() => handleCardPress(item.id)}
                        isSelected={isCardSelected(item.id)}
                    />
                )}
            />

            <View style={{
                position: 'absolute', bottom: 40, width: '100%',
                alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'
            }}>


                <Text style={[styles.bottomButtons, styles.backButton]}>Back</Text>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(255, 255, 255, 0.7)', 
                'rgba(255, 255, 255, 0.25)']} style={[styles.bottomButtons, styles.NextButton]}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </LinearGradient>

            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#000',
        borderRadius: 10,
        margin: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        aspectRatio: 1,
        // width: 100,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    cardText: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'rgba(107, 98, 98, 0.1)',
        zIndex: 1,
        // padding: 5,

    },
    selected: {
        borderWidth: 4,
        borderColor: 'yellow',
    },
    selectedText: {
        color: 'yellow',
    },
    bottomButtons: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    }
});

export default YourCategory;
