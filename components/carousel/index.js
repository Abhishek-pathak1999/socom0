import { View, FlatList, Text, Image} from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';

const { height, width } = Dimensions.get('window');
const data = [
    {
      id: 1,
      title: 'Item 1',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      id: 2,
      title: 'Item 2',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      id: 3,
      title: 'Item 3',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      id: 4,
      title: 'Item 4',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
  ];
const CarouselMain = () => {    
    // const [data, setData] = useState([1, 1, 1, 1, 1]);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View >
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex((x / width).toFixed(0))
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={Styles.carouselItem} key={item.id}>
                            <Image style={Styles.carouselImg} source={{ uri: item.image }} />
                            <Text style={Styles.carouselText} >Changing Seasons</Text>
                        </View>
                    )
                }} />
            <View style={Styles.carouselDots}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={{
                                width: currentIndex == index ? 8 : 6, height: currentIndex == index ? 8 : 6,
                                borderRadius: currentIndex == index ? 4 : 3,
                                backgroundColor: currentIndex == index ? '#fff' : '#B8B8B8', marginLeft: 5
                            }}>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}
export default CarouselMain;

const Styles = StyleSheet.create({
    carouselItem:{
        width: width, 
        height: height / 3, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    carouselImg: {
        width: '98%', 
        height: '98%'
    },
    carouselText: {
        position: 'absolute', 
        left: 15, 
        bottom: 50, 
        color: 'white', 
        fontSize: 22
    },
    carouselDots: {
        flexDirection: 'row', 
        width: width, 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative', 
        bottom: 30
    }
})