'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

class ViewDemo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>View组件</Text>
      	<View style={styles.box}>
          <Text>这是一个包含于VIew组件中的Text文本组件</Text>
          <TouchableHighlight>
            <Text>可触控高亮组件</Text>
          </TouchableHighlight>
          <View style={[styles.box,styles.innerBox]}>
            <Text>这是一个嵌套View组件</Text>
          </View>
        </View>
        <View style={[styles.box,styles.background,styles.borderRadiusT]}>
          <Text>设置背景颜色，边框和边框圆角</Text>
        </View>
        <View style={[styles.box,styles.background,styles.opacityT]}>
          <Text>设置背景颜色，透明度</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.item}>
            <Text>项目一</Text>
          </View>
          <View style={styles.item}>
            <Text>项目二</Text>
          </View>
          <View style={styles.item}>
            <Text>项目三</Text>
          </View>
          <View style={styles.item}>
            <Text>项目四</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  box:{margin:10,padding:10,borderWidth:1,borderColor:'#0a8acd',borderStyle:'solid'},
  innerBox:{backgroundColor:'#ccc',margin:10},
  background:{backgroundColor:'#fff333'},
  borderRadiusT :{borderRadius:15},
  opacityT:{opacity:0.5},
  subContainer:{flexDirection: 'row',margin:10,justifyContent:'center',alignItems:'center'},
  item:{flex:1,height:100,backgroundColor:'#ddd',padding:10,borderWidth:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}
})

module.exports = ViewDemo;
