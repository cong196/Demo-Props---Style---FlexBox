import React, {Component} from 'react';
import {Dimensions,View,Text,TouchableOpacity} from 'react-native';

const { height } = Dimensions.get('window');
import State from './State';
import Style from './Style';
import FlexBox from './FlexBox';
import DemoProps from './Props';
import Demo11 from './Demo11';
export default class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Demo11 />
    )
  }
}
