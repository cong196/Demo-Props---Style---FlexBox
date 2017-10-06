import React, {Component} from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';


export default class Demo11 extends Component {
  
  render() {
    return (
        <View style={{ height:400,
                        backgroundColor: 'powderblue',
                        justifyContent: 'space-around',
                        flexDirection:'row'

                      }}>
            <View style={{height: 50, width: 50, backgroundColor:'red'}}></View>
            <View style={{height: 50, width: 50, backgroundColor:'yellow'}}></View>
            <View style={{height: 50, width: 50, backgroundColor:'green'}}></View>
        </View>
    )
  }
}