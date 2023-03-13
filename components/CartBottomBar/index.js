import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomBar = (props) => {
  return (
    <View style={styles.container}>
      {
        props.text?<Text style={{color: 'black', marginVertical: 20}}>{props.text}</Text>:''
      }
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
            {props.value}
        </Text>        
      </TouchableOpacity>
    </View>
  )
}

export default BottomBar;

const styles = StyleSheet.create({
    container: {
    
      width: '100%',
        paddingTop: 10,
        paddingBottom: 10, 
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        borderTopColor: '#7B7B7B',
        borderTopWidth: 1
    },
    button:{
        width: '90%', 
        maxWidth: 350, 
        paddingVertical: 15, 
        borderRadius: 5, 
        backgroundColor: '#FF5252'
    },
    text: {
        color: 'white', 
        fontWeight: 'bold', 
        textAlign: 'center'
    }
})