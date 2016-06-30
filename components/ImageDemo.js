'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class ImageDemo extends Component {
  constructor(props){
      super(props);
      this.state = {
          status:'',
          result:''
      };
  }

  startFunc(){
    this.setState({
      status : '开始加载网络图片...'
    });
  }
  endFunc(){
    this.setState({
      status : '网络图片加载完成.'
    });
  }
  onLoadFunc(){
    this.setState({
      result : '加载结果'
    });
  }

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>Image组件</Text>

        <Text>使用网络图片</Text>
        <Image style={{width:100,height:100,borderWidth:1,borderColor:'#ccc'}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />

        <Text>使用本地图片</Text>
        <Image style={{width:100,height:100,borderWidth:1,borderColor:'#ccc'}} source={require('./img/beautiful.jpg')} />

        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1}}>
            <Text>resizeMode-cover</Text>
            <Image style={{width:120,height:100,borderWidth:1,borderColor:'#ccc'}}  resizeMode="cover" source={require('./img/beautiful.jpg')} />
          </View>
          <View style={{flex:1}}>
            <Text>resizeMode-contain</Text>
            <Image style={{width:120,height:100,borderWidth:1,borderColor:'#ccc'}}  resizeMode="contain" source={require('./img/beautiful.jpg')} />
          </View>
          <View style={{flex:1}}>
            <Text>resizeMode-stretch</Text>
            <Image style={{width:120,height:100,borderWidth:1,borderColor:'#ccc'}}  resizeMode="stretch" source={require('./img/beautiful.jpg')} />
          </View>
        </View>

        <View>
          <Image style={{width:150,height:150,borderWidth:1,borderColor:'#ccc'}} source={{uri: 'http://hdimagesnew.com/wp-content/uploads/2015/11/biRjno7iy.jpg'}} onLoadStart={this.startFunc.bind(this)} onLoadEnd={this.endFunc.bind(this)} onLoad={this.onLoadFunc.bind(this)} />
          <Text>{this.state.status}</Text>
          <Text>{this.state.result}</Text>
        </View>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
})

module.exports = ImageDemo;
