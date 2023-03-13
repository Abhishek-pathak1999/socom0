import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';

import SearchBar from '../../components/searchbar/index';
import PersonProfile from '../../components/profilePerson/index';


const data = [
    {
        id: 1,
        title: 'Changing Seasons (fashion)',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
        id: 2,
        title: 'Item 2',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    

];
const Following = () => {
    return (
        <>
            <View style={styles.SearchBarContainer}><SearchBar /></View>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PersonProfile {...item} />
                    )
                }} />
        </>
    )
}

export default Following;

const styles = StyleSheet.create({
    SearchBarContainer: {
        marginVertical: 10,
    }
})