'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableHighlight
} from 'react-native';

class WebViewDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'http://m.baidu.com',
      status:'',
      newUrl:'http://www.163.com/',
      newStatus:''
    };
  }

  _renderLoading(){
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
            <Text>正在拼命加载中...</Text>
        </View>
    );
  }

  render() {
    const HTML = `
      <!DOCTYPE html>\n
      <html>
        <head>
          <title>Hello Static World</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=320, user-scalable=no">
          <style type="text/css">
            body {margin: 0;padding: 0;background: #dd3333;}
            h1 {margin:0,padding: 6px;font-Size:20px;text-align: center;color: #0a8acd;}
            p {text-align:center;}
          </style>
        </head>
        <body>
          <h1>使用WebView显示静态页面内容</h1>
          <p>人通常一旦失去什么，就会害怕，“未来还会再失去吗？”无法褪去的记忆与惊恐，使人的灵魂永远藏着黑暗。一道又一道的刻痕，在时间岁月的累积中，我们失去信赖的能力，失去善良的能力，失去快乐的能力。每一道过往的刻痕，折叠着随时的怨、恨、愤以及攻击。</p>
        </body>
      </html>
      `;

    return (
    	<View style={{flex:1}}>
        <Text style={styles.title}>WebView组件</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#ddd'}} onPress={()=>this.setState({url:'http://m.baidu.com'})}>
            <Text style={{textAlign:'center'}}>百度</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#ddd'}} onPress={()=>this.setState({url:'http://xw.qq.com/index.htm'})}>
            <Text style={{textAlign:'center'}}>腾讯</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#ddd'}} onPress={()=>this.setState({url:'http://sina.cn/?from=wap'})}>
            <Text style={{textAlign:'center'}}>新浪</Text>
          </TouchableHighlight>
        </View>
        <WebView
          style={{flex:1,height:200}}
          source={{uri:this.state.url}}
          onLoadStart={() => this.setState({status:'开始打开网页'})}
          onLoadEnd={() => this.setState({status:'网页加载结束'})}
          onLoad={() => this.setState({status:'网页加载完成'})}
          renderLoading={this._renderLoading.bind(this)}
          />
        <Text style={{textAlign:'center'}}>{this.state.status}</Text>
        <View style={styles.divider}></View>
        <WebView
          style={{flex:1,height:100}}
          source={{html:HTML}}
          renderLoading={this._renderLoading.bind(this)}
          startInLoadingState={true}
          />
        <View style={styles.divider}></View>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#ddd'}} onPress={()=>this.setState({newUrl:'http://www.163.com/'})}>
            <Text style={{textAlign:'center'}}>网易</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#ddd'}} onPress={()=>this.setState({newUrl:'http://www.jd.com'})}>
            <Text style={{textAlign:'center'}}>京东</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#ddd'}} onPress={()=>this.setState({newUrl:'https://m.taobao.com/#index'})}>
            <Text style={{textAlign:'center'}}>淘宝</Text>
          </TouchableHighlight>
        </View>
        <WebView
          style={{flex:1,height:200}}
          source={{uri:this.state.newUrl}}
          onLoadStart={() => this.setState({newStatus:'开始打开网页'})}
          onLoadEnd={() => this.setState({newStatus:'网页加载结束'})}
          onLoad={() => this.setState({newStatus:'网页加载完成'})}
          renderLoading={this._renderLoading.bind(this)}
          automaticallyAdjustContentInsets={true}
          startInLoadingState={true}
          />
        <Text style={{textAlign:'center'}}>{this.state.newStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},

})

module.exports = WebViewDemo;
