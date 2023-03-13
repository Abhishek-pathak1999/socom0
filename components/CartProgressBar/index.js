import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartProgressBar = (props) => {
    return (
        <View style={styles.CartProgressBar}>
            <View style={[styles.CartInnerProgressBar, 1<=props.value?styles.activeBar:'']}><Text>Bag</Text></View>
            <View style={[styles.CartInnerProgressBar, 2<=props.value?styles.activeBar:'']}><Text>Address</Text></View>
            <View style={[styles.CartInnerProgressBar, 3<=props.value?styles.activeBar:'']}><Text>Payment</Text></View>
        </View>
    )
}

export default CartProgressBar

const styles = StyleSheet.create({

    CartProgressBar: {
        width: '100%',
        backgroundColor: '#D9D9D9',
        marginVertical: 10,
        flexDirection: 'row',

    },
    CartInnerProgressBar: {
        flex: 1,
        paddingVertical: 5,
        alignItems: 'center',
    },
    activeBar: {
        backgroundColor: '#48CF76'
    },
})