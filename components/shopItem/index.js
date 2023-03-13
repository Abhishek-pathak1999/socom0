import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Dropdown from './dropdown'
const ShopItem = () => {
    return (

        <View style={Styles.container}>
            <TouchableOpacity style={Styles.closeButton}>
                <Icon name='close' size={35} />
            </TouchableOpacity>
            <View style={Styles.imgContainer}>
                <Image style={{ flex: 1, resizeMode: 'contain' }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/fed1/f3ef/aba7aa3f4ffaffaa5d48c8a7784e96a2?Expires=1678665600&Signature=BEQk9tUPLY79F~Ii2C0pXJPAX7e9eq4tOzHWUGVU7VJQ2g4kgLL-GAf3co4fJH-qkNSAi1q0JJhuMsrtjITEOuiZZasxUjH~Uoz6XJwvYifKc79dMr8WodCk84MMdR4viJKI46Fe-kDHzW0revw0difg3dB6~-ErnKLVp7ghF3-FHcGKmZ874ZxKvW3bJM36YIWpg1LGNi4yeGNIlbk3e7KoYpln9dGTXHYg-jl66xzECdrEd9EN~y6vnA7Y1zyyzaXV-L5SprSDHzAFebfbWt9GM2~IpFHjSekN3Yj3tjPM6KIL9DuHgRFZDYFMMDm5tIIQ6fBDR6MjrjdenAXpqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
            </View>

            <View style={Styles.detailsContainer}>
                <Text style={{ fontSize: 14, marginVertical: 3, fontWeight: 500, color: 'black' }}>Ethnic Collections</Text>
                <Text style={{ fontSize: 14, marginVertical: 3, fontWeight: 500, color: 'black' }}>Anarkali Kurta Suit Set</Text>
                <Text style={{ fontSize: 12, marginVertical: 3, color: 'black' }}>Cotton Kurta Set with foil prints</Text>

                <View style={{ flexDirection: 'row', gap: 15, marginVertical: 10 }}>
                    <Dropdown />
                    <Dropdown />
                </View>
                <View style={{ flexDirection: 'row', gap: 15, marginBottom: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 600, color: 'red', marginVertical: 3, marginVertical: 5 }}>₹ 599</Text>
                    <Text style={{ textDecorationLine: 'line-through', color: 'black', fontSize: 16, marginVertical: 3, marginVertical: 5 }}>₹ 1500</Text>
                </View>
                <Text style={{ fontSize: 10, marginVertical: 3, color: 'black' }}>Return Policy : 10 days easy return</Text>
                <Text style={{ fontSize: 10, marginVertical: 3, color: 'black' }}>Delivery By : <Text style={{ fontWeight: 700 }}>20 Jan 2023</Text></Text>
            </View>
        </View>
    )
}

export default ShopItem;

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#F2F2F2',
        padding: 10,
        flexDirection: 'row',
        position: 'relative'
    },
    imgContainer: {
        width: '40%',
        flex: 1,
    },
    detailsContainer: {
        width: '60%',
        paddingHorizontal: 10,
        color: 'black'
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 10,
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

    }
})