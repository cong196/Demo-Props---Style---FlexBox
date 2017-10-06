import React, {Component} from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';

import {Styles} from './Css';
export default class Style extends Component {
  
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.textview}>
                Demo Style
            </Text>
           
        </View>
    )
  }
}
var styles = StyleSheet.create({
    container:{
        backgroundColor: 'powderblue'
    },

    textview:{
        backgroundColor:'red',
        fontSize: 25,
        color:"black",
        borderColor: 'black',
        borderWidth: 1,
        padding: 30,
        margin: 20
    }
})