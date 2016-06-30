'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from 'react-native';

class TouchableWithoutFeedbackDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      basic:'TouchableWithoutFeedback按钮',
      colorBtn:'触摸变色按钮',
      color:'#0a8acd',
      nativeColor:'red'
    }
  }

  onPressBasic(){
    this.setState({
      basic: '你点我干嘛呀'
    });
  }
  onPressFunc(){
    this.setState({
      colorBtn: '点击进入退出'
    });
  }
  onPressInFunc(){
    this.setState({
      color:'red'
    });
  }
  onPressOutFunc(){
    this.setState({
      color:'blue'
    });
  }

  onPressNative(){
    this.setState({
      nativeColor:'blue'
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TouchableWithoutFeedback组件</Text>

        <TouchableWithoutFeedback onPress={this.onPressBasic.bind(this)}>
          <View style={styles.basic}>
            <Text style={{textAlign:'center'}}>{this.state.basic}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.onPressFunc.bind(this)} onPressIn={this.onPressInFunc.bind(this)} onPressOut={this.onPressOutFunc.bind(this)}>
          <View style={styles.basic}>
            <Text style={[{textAlign:'center'},{color:this.state.color}]}>{this.state.colorBtn}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback delayPressIn={1000} delayPressOut={1000} onPress={this.onPressFunc.bind(this)} onPressIn={this.onPressInFunc.bind(this)} onPressOut={this.onPressOutFunc.bind(this)}>
          <View style={styles.basic}>
            <Text style={[{textAlign:'center'},{color:this.state.color}]}>{this.state.colorBtn}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.onPressBasic.bind(this)} disabled={true}>
          <View style={styles.basic}>
            <Text style={{textAlign:'center'}}>这个按钮点击不了</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.divider}></View>

        <TouchableWithoutFeedback hitSlop={{top:30,left:30,bottom:30,right:30}} onPress={this.onPressFunc.bind(this)} onPressIn={this.onPressInFunc.bind(this)} onPressOut={this.onPressOutFunc.bind(this)}>
          <View style={{backgroundColor:'#ccc'}}>
            <Text style={[{textAlign:'center'},{color:this.state.color}]}>{this.state.colorBtn}</Text>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.title}>TouchableNativeFeedback组件</Text>

        <TouchableNativeFeedback onPress={this.onPressNative.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.basic}>
            <Text style={[{textAlign:'center'},{color:this.state.nativeColor}]}>{this.state.colorBtn}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.onPressNative.bind(this)} background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
          <View style={styles.basic}>
            <Text style={[{textAlign:'center'},{color:this.state.nativeColor}]}>{this.state.colorBtn}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.onPressNative.bind(this)} background={TouchableNativeFeedback.Ripple('red', true)}>
          <View style={styles.basic}>
            <Text style={[{textAlign:'center'},{color:this.state.nativeColor}]}>{this.state.colorBtn}</Text>
          </View>
        </TouchableNativeFeedback>
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

module.exports = TouchableWithoutFeedbackDemo;
