'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight
} from 'react-native';

class ModalDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      animated: true,
      modalVisible: false,
      transparent: false,
      showText:'',
      modalStatus:'Modal目前处于关闭状态'
    };
  }

  _setModalVisible(visible) {
   this.setState({
     modalVisible: visible
   });
 }

 _showModal(){
   this.setState({
     showText:'Modal显示了',
     modalStatus:'Modal打开过了'
   });
 }

  render() {
    return (
    	<View>
        <Modal
          animated={this.state.animated}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          onShow={this._showModal.bind(this)}
          >
          <View style={{width:300,height:200,marginTop:200,alignSelf:'center',justifyContent: 'center',padding: 20,backgroundColor:'rgba(229,27,81,0.7)',borderRadius:10}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color:'#fff'}}>Modal弹出窗口的内容</Text>
              <Text style={{color:'#fff'}}>{this.state.showText}</Text>
              <View style={{borderWidth:1,borderColor:'#f8f8f8',paddingVertical:8,paddingHorizontal:12,marginTop:16,borderRadius:6}}>
              <Text style={{color:'#fff'}} onPress={this._setModalVisible.bind(this, false)}>
                关闭
              </Text>
              </View>
            </View>
          </View>
        </Modal>

        <Text style={styles.title}>Modal组件</Text>
        <TouchableHighlight style={{flex:1,justifyContent:'center',margin:20,padding:20,alignItems:'center',backgroundColor:'#eee'}} underlayColor='#ddd' onPress={()=>this._setModalVisible(true)}>
          <Text style={{fontSize:18}}>Open Modal</Text>
        </TouchableHighlight>
        <Text style={{textAlign:'center'}}>{this.state.modalStatus}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
})

module.exports = ModalDemo;
