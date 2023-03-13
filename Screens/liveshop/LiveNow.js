import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

import MainHeading from '../../components/mainHeading/index';
import Card from '../../components/cards/index';
import Header from '../../components/header/Header'

const data = [
  { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7s56292QmjcgxIAOJGODlr-3rBjgNVjR3g&usqp=CAU', title: 'Demo', cardHeading: 'Demo head' },
  { id: 2, imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', title: 'Demo', cardHeading: 'Demo head' },

]
const LiveNow = () => {
  return (
    <View >
      {/* <Header isLabel={true} label={"Live Shop"}/> */}
      <MainHeading text='Fashion' />
      <View style={{ flexDirection: 'row', flexWrap: "wrap", gap: 8, justifyContent: 'center' }}>
        {data.map((item) => {
          return <Card key={item.id} imgUrl={item.imgSrc} title={item.title} />
        })}
      </View>

      <MainHeading text='Clothes - Ethnic' />
      <View style={{ flexDirection: 'row', flexWrap: "wrap", gap: 8, justifyContent: 'center' }}>
        {data.map((item) => {
          return <Card key={item.id} imgUrl={item.imgSrc} title={item.title} />
        })}
      </View>
    </View>
  )
}

export default LiveNow;

const styles = StyleSheet.create({})