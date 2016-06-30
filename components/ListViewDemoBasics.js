'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class ListViewDemo extends Component {
  constructor(props){
    super(props);
    this.data = [
      {"id":1,"title":"title1","excerpt":"excerpt11111","content":"content111111111111111111111"},
      {"id":2,"title":"title2","excerpt":"excerpt222222","content":"content222222222222222222222"},
      {"id":3,"title":"title3","excerpt":"excerpt333333","content":"content333333333333333333333"},
      {"id":4,"title":"title4","excerpt":"excerpt444444","content":"content444444444444444444444"},
      {"id":5,"title":"title5","excerpt":"excerpt555555","content":"content555555555555555555555"},
      {"id":6,"title":"title6","excerpt":"excerpt666666","content":"content666666666666666666666"},
      {"id":7,"title":"title7","excerpt":"excerpt777777","content":"content777777777777777777777"},
      {"id":8,"title":"title8","excerpt":"excerpt888888","content":"content888888888888888888888"},
      {"id":9,"title":"title9","excerpt":"excerpt999999","content":"content999999999999999999999"},
      {"id":10,"title":"title10","excerpt":"excerpt10101010","content":"content101010101010101010"},
      {"id":11,"title":"title11","excerpt":"excerpt1111111111","content":"content111111111111111111111"},
      {"id":12,"title":"title12","excerpt":"excerpt1212121212","content":"content121212121212121212121"},
    ];
    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    this.state = {
      dataSource:this.ds.cloneWithRows(this.data)
    };
  }

  _renderRow(rowData, sectionID, rowID, highlightRow){
    return (
      <View style={{padding:10,borderBottomWidth:1,borderBottomColor:'#ccc',marginBottom:5}}>
        <Text style={{fontSize:18,fontWeight:'bold',color:'#444'}}>{rowData.id} {rowData.title} - rowID:{rowID}</Text>
        <Text>{rowData.excerpt}</Text>
      </View>
    );
  }

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>ListView组件</Text>
        <ListView dataSource={this.state.dataSource} renderRow={ this._renderRow.bind(this) } />
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

module.exports = ListViewDemo;
