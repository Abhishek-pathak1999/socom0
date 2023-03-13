import { StyleSheet, Text } from 'react-native';
const MainHeading = (props) => {    
    return (
        <Text style={Styles.mainHeading}>{props.text}</Text>
    );
}
export default MainHeading;

const Styles = StyleSheet.create({
    mainHeading: {
      fontSize: 20,
      fontWeight: '500', 
      paddingHorizontal: 10,
      marginVertical: 10,
      color: 'black'
    }
  })