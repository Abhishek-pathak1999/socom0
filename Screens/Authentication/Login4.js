import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// import MainHeading from '../../components/mainHeading';


const data = [
  { id: '1', category: 'Category A' },
  { id: '2', category: 'Category B' },
  { id: '3', category: 'Category C' },
  { id: '4', category: 'Category D' },
  { id: '5', category: 'Category E' },
  { id: '6', category: 'Category F' },
  { id: '7', category: 'Category A' },
  { id: '8', category: 'Category B' },
  { id: '9', category: 'Category C' },
  { id: '10', category: 'Category D' },
  { id: '11', category: 'Category E' },
  { id: '12', category: 'Category F' },
];

const Card = ({ category, onPress, isSelected }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, isSelected && styles.selected]}>
      <Text style={styles.cardText}>{category}</Text>
      <Image style={{height: '100%', width: '100%', resizeMode: 'cover'}} source={require("../../img/google.png")} />
    </TouchableOpacity>
  );
};

const CategoryCards = () => {
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
    <View style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 22, marginHorizontal: 5, marginVertical: 20}}>Select Categories</Text>
    
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

    <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 30}}>We are adding more!</Text>
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
    minHeight: 100,
    aspectRatio: 1,
    position: 'relative'
  },
  cardText:{
    position: 'absolute',
    bottom: 25,
    left: 0,
    width: '100%', 
    textAlign: 'center', 
    backgroundColor: 'rgba(255 255 255 / 0.8)', 
    zIndex:1, 
    padding: 5, 
    
  },
  selected: {
    borderWidth: 4,
    borderColor: 'yellow',
  },
  selectedText: {
    color: 'yellow',
  },
});

export default CategoryCards;
