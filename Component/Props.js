import React, {Component} from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';



export default class DemoProps extends Component {
  
  render() {
    return (
        <View>
            <Demo hoten="Nguyễn Văn A" tuoi="12" />
            <Demo hoten="Nguyễn Văn B" />
        </View>
    )
  }
}

class Demo extends Component {
    render() {
        return(
            <View>
                <Text>{this.props.hoten} - {this.props.tuoi}</Text>
            </View>
        )
    }
}





var styles = StyleSheet.create({
    container:{
        height:400,width: 400, backgroundColor: 'red'
    },

    textview:{
        fontSize: 40, color:"white"
    }
})