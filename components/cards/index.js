import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
const Card = (props) => {
    return (
        <View style={Styles.card}>
            <Image style={Styles.card_img} source={{ uri: props.imgUrl }} />
            <Text style={Styles.card_text}>{props.title}</Text>
        </View>
    );
}
export default Card;

const Styles = StyleSheet.create({
    card: {
        width: 160,
        aspectRatio: 3/4,
        borderRadius: 10,
        elevation: 5,
        position: 'relative',
        overflow: 'hidden',
        borderRadius:10,
    },
    card_img: {
        width: '100%',
        height: '100%',
        zIndex: -1
    },
    card_text: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        fontSize: 12,
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 8
    }

})