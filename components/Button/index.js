import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const MyButton = (props) => {
    return (
        <TouchableOpacity style=
            {
                props.buttonType === 'wishlist' ? [styles.wishlist, styles.button]
                    : props.buttonType === 'addToCart' ? [styles.addToCart, styles.button]
                        : ''
            }
        >
            {props.buttonType === 'wishlist' ?
                <Text style={styles.buttonText}><MaterialCommunityIcons style={styles.buttonIcon} name="heart-outline" /> WishList</Text>
                : props.buttonType === 'addToCart' ?
                    < Text style={styles.buttonText}><MaterialCommunityIcons style={styles.buttonIcon} name="cart-outline" /> Add to Cart</Text>
                    : ''

            }
        </TouchableOpacity >

    );
};

const styles = StyleSheet.create({
    button: {
        // width: '50%',
        width: 150,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonIcon:{
        fontSize: 22, marginHorizontal: 100
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        
    },
    wishlist: {
        backgroundColor: '#FFBF23'
    },
    addToCart: {
        backgroundColor: '#FF5252',
        borderRadius: 5
    }
});

export default MyButton;
