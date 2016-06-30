'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';

class Main extends Component {
  render() {
    return (
    	<View>
        <StatusBar
          backgroundColor="rgba(5,165,209,0.8)"
          translucent={false}
          />
        <Image style={{height:200}} resizeMode="stretch" source={require('./img/beautiful.jpg')} />
        <Text style={styles.title}>StatusBar组件</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
})

module.exports = Main;
