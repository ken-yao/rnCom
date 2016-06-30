'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class TextInputDemo extends Component {
  constructor(){
    super();
    this.state = {
      bgColor:'red'
    }
  }

  onFocusFunc(){
    this.setState({
      bgColor:'#0a8acd'
    });
  }
  onBlurFunc(){
    this.setState({
      bgColor:'red'
    });
  }

  render() {
    return (
    	<View>
        <Text style={styles.title}>TextInput组件</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({text})} value={this.state.text} />
        <Text>{this.state.text}</Text>
        <TextInput style={styles.inputBorder} autoCapitalize='words' />
        <TextInput style={styles.inputBorder} autoCorrect={false} autoFocus={true} />
        <TextInput style={styles.inputBorder} editable={false} placeholder='这个文本框不能编辑' />
        <TextInput style={styles.inputBorder} maxLength={6} placeholder='最大长度6位' placeholderTextColor="blue" />
        <TextInput style={styles.inputBorder} multiline={true} placeholder='多行文本框' />
        <TextInput style={styles.inputBorder} secureTextEntry={true} />
        <TextInput style={styles.inputBorder,{backgroundColor:this.state.bgColor}} onFocus={this.onFocusFunc.bind(this)} onBlur={this.onBlurFunc.bind(this)}/>
        <TextInput style={styles.inputBorder} selectTextOnFocus={true} placeholder="当获得焦点时自动选择" selectionColor='#fff' />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  input:{height:40},
  inputBorder:{height:40,borderBottomWidth:1,borderBottomColor:'#0a8acd'}
})

module.exports = TextInputDemo;
