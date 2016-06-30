'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Main extends Component {

  render() {
    return (
    	<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24}}>React Native</Text>
        <Text style={{fontSize:24}}>系列教程</Text>
        <Text style={{fontSize:24}}>组件篇</Text>
        <Text style={{marginTop:30}}>向右拖动查看组件</Text>
      </View>
    );
  }

}

module.exports = Main;
