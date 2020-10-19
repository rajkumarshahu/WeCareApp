import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
  } from 'react-native';

  import Colors from '../constants/Colors';

const Card = props => {

  return (

    <View style={styles.summary}>
        <Text>{props.children}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
    summary: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 200,
      margin: 20,
      alignItems: 'center',
    },
    text: {
        fontSize:40
    }
  });


export default Card;