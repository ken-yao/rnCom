'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }

  componentWillMount(){
    //当组件在被渲染到页面之前加载一次，此时，页面DOM还没有渲染
    Api.get('example.com/api/users').then((data) => {
      this.setState({
        users:data
      });
    })
  }

  componentDidMount(){
    //组件完成渲染时触发一次，这时，所有组件DOM结构已经被渲染到页面中，可以针对组件和DOM结构进行DOM操作
    var btn = document.getElementById('btn');
  }

  componentWillReceiveProps(nextProps){
    //当组件接收到属性变化时触发，当组件第一次初始化渲染时不会触发
  }

  shouldComponentUpdate(nextProps,nextState){
    //当组件接收到属性或状态变化时触发，当组件第一次初始化渲染时不会触发
  }

  componentWillUpdate(nextProps,nextState){
    //当组件更新前触发
  }

  componentDidUpdate(prevProps,prevState){
    //当组件完成更新后触发
  }

  componentWillUnmount(){
    //当组件在被移除前触发
  }

  render() {
    return (
    	<View>
        <Text style={styles.title}>组件</Text>
        <TouchableHighlight onPress={() => global.nav.push({id: 'Test'})}>
          <Text>Basic Component template - go to test page</Text>
        </TouchableHighlight>
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
