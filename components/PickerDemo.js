'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableHighlight
} from 'react-native';

class PickerDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      gender:'man',
      index:null
    };
  }

  render() {
    return (
    	<View>
        <Text style={styles.title}>Picker组件</Text>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={(itemValue,itemPosition) => this.setState({gender: itemValue,index:itemPosition})}>
            <Picker.Item label="男" value="man" />
            <Picker.Item label="女" value="woman" />
          </Picker>
          <Text>选择了：{this.state.index}-{this.state.gender}</Text>
          <View style={styles.divider}></View>
          <Picker
            enabled={false}
            selectedValue={this.state.gender}
            onValueChange={(gender) => this.setState({gender: gender})}>
            <Picker.Item label="男" value="man" />
            <Picker.Item label="女" value="woman" />
          </Picker>
          <View style={styles.divider}></View>
          <Picker
            mode='dropdown'
            selectedValue={this.state.gender}
            onValueChange={(gender) => this.setState({gender: gender})}>
            <Picker.Item label="男" value="man" />
            <Picker.Item label="女" value="woman" />
          </Picker>
          <View style={styles.divider}></View>
          <Picker
            style={{paddingHorizontal:10,backgroundColor:'#0a8acd',color:'#fff'}}
            prompt='请选择性别'
            selectedValue={this.state.gender}
            onValueChange={(gender) => this.setState({gender: gender})}>
            <Picker.Item label="男" value="man" />
            <Picker.Item label="女" value="woman" />
          </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
})

module.exports = PickerDemo;
