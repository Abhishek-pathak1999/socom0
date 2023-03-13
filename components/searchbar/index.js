import React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const SearchBar=()=>{
    return(
      <View style={{ height: 40}}>
        <Input
        placeholder='Search Stores'
        leftIcon={{ type: 'font-awesome', name: 'search' }}
        // containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    inputContainer: {
      borderRadius: 10,
      borderColor: 'white',
      height: 40,
      width: '100%',
      backgroundColor: '#F7F7F7',
      paddingHorizontal: 10, 
      width: '100%', 
    },
    input: {
      fontSize: 14,
      paddingHorizontal: 6,
    },
})