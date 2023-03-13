import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import ShopItem from '../../components/shopItem/index';
import BottomBar from '../../components/CartBottomBar';
import CartProgressBar from '../../components/CartProgressBar/index';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const CartReview = () => {
  return (
    <ScrollView style={styles.container}>
      <CartProgressBar value='1' />
      
      <ShopItem />
      <ShopItem />


      <View style={styles.BottomBarContainer}>
        
        <BottomBar value="Place Order" text="2 item Selected for order" />
      </View>

    </ScrollView>
  )
}

export default CartReview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    position: 'relative',
    height: '100%'
  },

  BottomBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
})