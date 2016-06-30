'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

class TextDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'点我点我'
    }
  }

  onPressMe(){
    this.setState({
      text: '叫你点你就点，你傻呀！',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Text组件</Text>
        <Text>
          父Text组件
          <Text>子Text组件</Text>
        </Text>
        <View style={styles.divider}></View>
      	<View style={styles.box}>
          <Text>普通文本</Text>
          <Text style={styles.colorText}>文字颜色</Text>
          <Text style={styles.fontFamilyText}>文字字体</Text>
          <Text style={styles.fontSizeText}>文字大小</Text>
          <Text style={styles.fontStyleText}>文字样式-斜体</Text>
          <Text style={styles.fontWeightText}>粗体文字</Text>
          <Text style={styles.lineHeightText}>文字行高</Text>
          <Text style={styles.textShadow}>文字阴影</Text>
        </View>
        <View style={styles.divider}></View>
        <Text style={{fontStyle:'italic'}}>
          父Text组件的样式是斜体
          <Text style={{color:'#0a8acd'}}>子Text组件继承了父Text组件的“斜体”样式</Text>
        </Text>
        <View style={styles.divider}></View>
        <Text>这是一段长文本，这真是一段长文本，这真是一段很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本。</Text>
        <Text numberOfLines={2} style={{color:'red'}}>这里只显示两行：但这是一段长文本，这真是一段长文本，这真是一段很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本，这真的是一段很长很长的文本。</Text>
        <View style={styles.divider}></View>
        <Text onPress={this.onPressMe.bind(this)}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  box:{paddingLeft:10,paddingRight:10},
  colorText:{color:'#fff100'},
  fontFamilyText:{fontFamily:'微软雅黑'},
  fontSizeText:{fontSize:40},
  fontStyleText:{fontStyle:'italic'},
  fontWeightText:{fontWeight:'700'},
  lineHeightText:{flex:1,lineHeight:50,backgroundColor:'#ddd',textAlignVertical:'center'},
  textShadow:{textShadowColor:'#444',textShadowOffset:{width:2,height:2},textShadowRadius:4}
})

module.exports = TextDemo;
