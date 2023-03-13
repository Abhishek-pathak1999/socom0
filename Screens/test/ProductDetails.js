import React from 'react';
import { View, Text, Image, StyleSheet,  ScrollView } from 'react-native';
import MyButton from '../components/Button/index';
import SizeSelector from './SizeChart';


const ProductDetails = () => {
    const product = {
        image: 'https://s3-alpha-sig.figma.com/img/fed1/f3ef/aba7aa3f4ffaffaa5d48c8a7784e96a2?Expires=1678665600&Signature=BEQk9tUPLY79F~Ii2C0pXJPAX7e9eq4tOzHWUGVU7VJQ2g4kgLL-GAf3co4fJH-qkNSAi1q0JJhuMsrtjITEOuiZZasxUjH~Uoz6XJwvYifKc79dMr8WodCk84MMdR4viJKI46Fe-kDHzW0revw0difg3dB6~-ErnKLVp7ghF3-FHcGKmZ874ZxKvW3bJM36YIWpg1LGNi4yeGNIlbk3e7KoYpln9dGTXHYg-jl66xzECdrEd9EN~y6vnA7Y1zyyzaXV-L5SprSDHzAFebfbWt9GM2~IpFHjSekN3Yj3tjPM6KIL9DuHgRFZDYFMMDm5tIIQ6fBDR6MjrjdenAXpqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Anarkali Kurta Suit Set',
        brand: 'Ethnic Collections',
        price: 599,
        description: "Cotton Kurta Set with foil prints"
    } 
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.title}>{product.name}</Text>


                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>

                <SizeSelector />

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <MyButton buttonType='wishlist' />
                <MyButton buttonType='addToCart' />
                </View>
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'white',
        color: 'black',
    },
    image: {
        width: '100%',
        aspectRatio: 4 / 5,
        
    },
    detailsContainer: {
        padding: 10,
        color: 'black',
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        color: 'black',
    },
    brand: {
        fontSize: 14,
        marginBottom: 8,
        color: 'black',
    },
    price: {
        fontSize: 16,
        marginBottom: 8,
        color:'#FA3131'
    },
    description: {
        fontSize: 12,
        marginBottom: 16,
        color: 'black',
    },
});

export default ProductDetails;
