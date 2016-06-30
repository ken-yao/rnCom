'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class ScrollViewDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      status:'提示',
      data:[
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'title6',
        'title7',
        'title8',
        'title9',
        'title10',
        'title11',
        'title12'
      ]
    }
  }

  render() {
    var createRow = (title, i) => {
      return (
        <View key={i} style={{padding:10,borderBottomWidth:1,borderBottomColor:'#aaa'}}>
          <Text>{title}</Text>
        </View>
      );
    };

    return (
    	<View style={styles.container}>
        <Text style={styles.title}>ScrollView组件</Text>
        <View>
          <ScrollView style={styles.boxContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.box}><Text style={styles.centerText}>1</Text></View>
            <View style={styles.box}><Text style={styles.centerText}>2</Text></View>
            <View style={styles.box}><Text style={styles.centerText}>3</Text></View>
            <View style={styles.box}><Text style={styles.centerText}>4</Text></View>
            <View style={styles.box}><Text style={styles.centerText}>5</Text></View>
          </ScrollView>
          <View style={styles.divider}></View>
          <ScrollView style={styles.boxHorizontalContainer} contentContainerStyle={{borderWidth:1,borderColor:'#aaa',paddingVertical:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.boxHorizontal}><Text style={styles.centerText}>1</Text></View>
            <View style={styles.boxHorizontal}><Text style={styles.centerText}>2</Text></View>
            <View style={styles.boxHorizontal}><Text style={styles.centerText}>3</Text></View>
            <View style={styles.boxHorizontal}><Text style={styles.centerText}>4</Text></View>
            <View style={styles.boxHorizontal}><Text style={styles.centerText}>5</Text></View>
          </ScrollView>
          <View style={styles.divider}></View>
          <ScrollView
            onScroll={() => this.setState({status:'你滚动了ScrollView'})}
            style={{height:200,backgroundColor:'#ccc'}}
            contentContainerStyle={{paddingLeft:10}}>
              {this.state.data.map(createRow)}
          </ScrollView>
          <Text>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  scrollContainer:{padding:10,height:120},
  scroll:{padding:10,backgroundColor:'#eee',paddingBottom:50},
  boxContainer:{padding:10,height:120},
  box:{flex:1,height:50,backgroundColor:'#0a8acd',marginBottom:10,justifyContent:'center'},
  centerText:{color:'#fff',textAlign:'center'},
  boxHorizontalContainer:{flex:1,height:100},
  boxHorizontal:{width:100,height:50,backgroundColor:'#dd3333',marginHorizontal:10,justifyContent:'center'}
})

module.exports = ScrollViewDemo;
