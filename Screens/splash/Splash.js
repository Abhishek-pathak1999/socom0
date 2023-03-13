import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image style={styles.splashImg} source={require('../../img/logo.png')} alt='logo' />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    splash: {
        flex: 1, 
        backgroundColor: '#FAB431', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    splashImg: {
        width: "80%", 
        aspectRatio: 1/1,
        maxWidth: 400, 
        resizeMode: 'cover' 
    }
})