import { StyleSheet, View } from 'react-native';
import React from 'react';

import MainHeading from '../../components/mainHeading/index';
import Card from '../../components/cards/index';


const data = [
  { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7s56292QmjcgxIAOJGODlr-3rBjgNVjR3g&usqp=CAU', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 2, imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 3, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ47DyzTnKHlliq9Y5acG_4Bf4OvSxPmXXKvANEh1&s', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 4, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7s56292QmjcgxIAOJGODlr-3rBjgNVjR3g&usqp=CAU', cardText: 'Demo', cardHeading: 'Demo head' }
]
const Third = () => {
  return (
    <View>
      <MainHeading text='Products' />
      <View style={{ flexDirection: 'row', flexWrap: "wrap", gap: 8, justifyContent: 'center' }}>
        {
          data.map((item) => {
            return <Card key={item.id} imgUrl={item.imgSrc} title={item.cardText} />
          })
        }
      </View>
    </View>
  )
}

export default Third;

const styles = StyleSheet.create({})