'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

class SwitchDemo extends Component {
  constructor(){
    super();
    this.state = {
      show:false
    };
  }

  renderView(){
    if(this.state.show){
      return (
        <View style={styles.box}>
          <Text>你看到我了</Text>
        </View>
      );
    }else{
      return false;
    }
  }

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>Switch组件</Text>
        <Switch
          onValueChange={(value) => this.setState({show: value})}
          value={this.state.show} />
        <Switch
          style={{alignSelf:'center'}}
          onValueChange={(value) => this.setState({show: value})}
          value={this.state.show} />
        <Switch
          style={{alignSelf:'flex-start'}}
          onValueChange={(value) => this.setState({show: value})}
          value={this.state.show} />
        {this.renderView()}
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

module.exports = SwitchDemo;
