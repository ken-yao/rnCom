'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight
} from 'react-native';

class DrawerLayoutAndroidDemo extends Component {
  _openDrawer(){
      this.refs['myDrawer'].openDrawer();
  };

  _closeDrawer(){
      this.refs['myDrawer'].closeDrawer();
  }

  render() {
    var navView = (
      <View style={{flex:1,padding:20}}>
        <Text style={{textAlign:'center',lineHeight:50,fontSize:20}}>用户中心</Text>
        <Text style={styles.item}>登录</Text>
        <Text style={styles.item}>关于</Text>
        <Text style={styles.item}>分享</Text>
        <Text style={styles.item}>更新</Text>
        <Text style={styles.item}>设置</Text>
        <TouchableHighlight style={{padding:10,borderWidth:1,width:80}} onPress={this._closeDrawer.bind(this)}>
          <Text>关闭抽屉</Text>
        </TouchableHighlight>
      </View>
    );
    return (
      <DrawerLayoutAndroid
      	  ref={'myDrawer'}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Right}
          statusBarBackgroundColor='#dd3333'
          renderNavigationView={() => navView}>
          <View style={styles.container}>
            <Text style={styles.title}>DrawerLayoutAndroid组件</Text>
            <Text>内容区域</Text>
            <TouchableHighlight style={{padding:10,borderWidth:1,width:80}} onPress={this._openDrawer.bind(this)}>
              <Text>打开抽屉</Text>
            </TouchableHighlight>
          </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  item:{lineHeight:30}
})

module.exports = DrawerLayoutAndroidDemo;
