'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
} from 'react-native';

class ProgressBarAndroidDemo extends Component {
  render() {
    return (
    	<View>
        <Text style={styles.title}>ProgressBarAndroid组件</Text>
        <ProgressBarAndroid />
        <ProgressBarAndroid color='#dd3333' />
        <ProgressBarAndroid indeterminate={true} />
        <ProgressBarAndroid styleAttr='Small' />
        <ProgressBarAndroid styleAttr='Large' />
        <ProgressBarAndroid styleAttr='Horizontal' />
        <ProgressBarAndroid styleAttr='Horizontal' progress={0.4} />
        <ProgressBarAndroid styleAttr='Inverse' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},

})

module.exports = ProgressBarAndroidDemo;
