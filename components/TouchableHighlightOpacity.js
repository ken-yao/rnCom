'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class TouchableHighlightOpacity extends Component {
  constructor(props){
    super(props);
    this.state = {
      basic:'一个基本的按钮',
      colorBtn:'触摸变色按钮',
      color:'#0a8acd'
    }
  }

  onPressBasic(){
    this.setState({
      basic: '你点我干嘛呀'
    });
  }
  onPressColorBtn(){
    this.setState({
      colorBtn:'我是变色龙'
    });
  }
  onShowUnderlayFunc(){
    this.setState({
      color:'#fff'
    });
  }
  onHideUnderlayFun(){
    this.setState({
      color:'#000'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TouchableHighlight组件</Text>

        <TouchableHighlight onPress={this.onPressBasic.bind(this)} style={styles.basic}>
          <Text style={{textAlign:'center'}}>{this.state.basic}</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="red" onPress={this.onPressColorBtn.bind(this)} style={styles.basic}>
          <Text style={{textAlign:'center'}}>{this.state.colorBtn}</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="red" onShowUnderlay={this.onShowUnderlayFunc.bind(this)} onHideUnderlay={this.onHideUnderlayFun.bind(this)} onPress={this.onPressColorBtn.bind(this)} style={styles.basic}>
          <Text style={[{textAlign:'center'},{color:this.state.color}]}>{this.state.colorBtn}</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="red" activeOpacity={0.5} onShowUnderlay={this.onShowUnderlayFunc.bind(this)} onHideUnderlay={this.onHideUnderlayFun.bind(this)} onPress={this.onPressColorBtn.bind(this)} style={styles.basic}>
          <Text style={[{textAlign:'center'},{color:this.state.color}]}>{this.state.colorBtn}</Text>
        </TouchableHighlight>

        <View style={styles.divider}></View>

        <Text style={styles.title}>TouchableOpacity组件</Text>

        <TouchableOpacity onPress={this.onPressBasic.bind(this)} activeOpacity={0.5} style={styles.basic}>
          <Text style={{textAlign:'center'}}>{this.state.basic}</Text>
        </TouchableOpacity>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  basic:{margin:10,padding:10,borderWidth:1,borderColor:'#0a8acd',borderStyle:'solid',borderRadius:6},

})

module.exports = TouchableHighlightOpacity;
