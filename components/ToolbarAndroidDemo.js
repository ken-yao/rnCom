'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

class ToolbarAndroidDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: undefined,
    };
  }

  _onActionSelected(index){
    this.setState({
      menu: index
    });
  }

  render() {
    var myToolbarActions = [
      {title:'设置', icon: require('./img/setting.png'),show:'ifRoom'},
      {title:'登陆', icon: require('./img/login.png'),show:'ifRoom'},
      {title:'编辑', icon: require('./img/edit.png'),show:'ifRoom'},
      {title:'新建', icon: require('./img/edit.png'),show:'ifRoom'},
      {title:'分享', icon: require('./img/edit.png'),show:'ifRoom'}
    ];
    var myToolbarActions2 = [
      {title:'设置', icon: require('./img/setting.png'),show:'always'},
      {title:'登陆', icon: require('./img/login.png'),show:'always'},
      {title:'编辑', icon: require('./img/edit.png'),show:'always'},
      {title:'新建', icon: require('./img/edit.png'),show:'always'},
      {title:'分享', icon: require('./img/edit.png'),show:'always'}
    ];
    var myToolbarActions3 = [
      {title:'设置', icon: require('./img/setting.png'),show:'never'},
      {title:'登陆', icon: require('./img/login.png'),show:'never'},
      {title:'编辑', icon: require('./img/edit.png'),show:'never'},
      {title:'新建', icon: require('./img/edit.png'),show:'never'},
      {title:'分享', icon: require('./img/edit.png'),show:'never'}
    ];
    var testActions = [
      {title:'设置'},
      {title:'登陆'},
      {title:'编辑'}
    ];
    return (
    	<View>
        <Text style={styles.title}>ToolbarAndroid组件</Text>
        <ToolbarAndroid
          style={{height:56,backgroundColor:'#ddd'}}
          navIcon={require('./img/nav.png')}
          title="我的应用"
          titleColor="#dd3333"
          subtitle="一个React Native应用"
          subtitleColor="#0a8acd"
          contentInsetStart={10}
          contentInsetEnd={120}
          onIconClicked={this.props.openDrawer}
          actions={myToolbarActions} />
        <View style={styles.divider}></View>
        <ToolbarAndroid
          style={{height:56,backgroundColor:'#ddd'}}
          navIcon={require('./img/nav.png')}
          title="我的应用"
          titleColor="#dd3333"
          subtitle="一个React Native应用"
          subtitleColor="#0a8acd"
          onActionSelected={this._onActionSelected.bind(this)}
          onIconClicked={this.props.openDrawer}
          actions={myToolbarActions2} />
        <Text style={{textAlign:'center'}}>{this.state.menu}</Text>
        <View style={styles.divider}></View>
        <ToolbarAndroid
          style={{height:56,backgroundColor:'#ddd'}}
          navIcon={require('./img/nav.png')}
          logo={require('./img/react.png')}
          overflowIcon={require('./img/overflowIcon.png')}
          onIconClicked={this.props.openDrawer}
          actions={myToolbarActions3} />
        <Text style={{textAlign:'center'}}>{this.state.status}</Text>
        <View style={styles.divider}></View>
        <ToolbarAndroid
          style={{height:56,backgroundColor:'#ddd'}}
          navIcon={require('./img/nav.png')}
          logo={require('./img/react.png')}
          onIconClicked={this.props.openDrawer}
          actions={testActions} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
})

module.exports = ToolbarAndroidDemo;
