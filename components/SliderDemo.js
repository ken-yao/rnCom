'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

class SliderDemo extends Component {
  constructor(){
    super();
    this.state = {
      s:0.3,
      c:2,
      d:5,
      e:0
    };
  }

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>Slider组件</Text>
        <Slider disabled={true}/>
        <View style={styles.divider}></View>
        <Slider value={this.state.s} onValueChange={(value) => this.setState({s: value})} />
        <Text>{this.state.s}</Text>
        <View style={styles.divider}></View>
        <Slider value={2} maximumValue={10} minimumValue={0}  />
        <View style={styles.divider}></View>
        <Slider value={this.state.c} maximumValue={10} minimumValue={1} step={1} onValueChange={(value) => this.setState({c: value})} />
        <Text>{this.state.c}</Text>
        <View style={styles.divider}></View>
        <Slider value={this.state.d} maximumValue={10} minimumValue={1} step={1} onSlidingComplete={(value) => this.setState({e: value})} />
        <Text>{this.state.e}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  box:{borderWidth:1,borderColor:'#ccc',padding:10,margin:10}
})

module.exports = SliderDemo;
