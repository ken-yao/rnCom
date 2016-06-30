'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  RecyclerViewBackedScrollView,
  TouchableHighlight
} from 'react-native';

class ListViewDemo extends Component {
  constructor(props){
    super(props);
    this.data = [
      {"id":1,"category":"category1","title":"title1","excerpt":"excerpt11111","content":"content111111111111111111111"},
      {"id":2,"category":"category3","title":"title2","excerpt":"excerpt222222","content":"content222222222222222222222"},
      {"id":3,"category":"category2","title":"title3","excerpt":"excerpt333333","content":"content333333333333333333333"},
      {"id":4,"category":"category1","title":"title4","excerpt":"excerpt444444","content":"content444444444444444444444"},
      {"id":5,"category":"category3","title":"title5","excerpt":"excerpt555555","content":"content555555555555555555555"},
      {"id":6,"category":"category4","title":"title6","excerpt":"excerpt666666","content":"content666666666666666666666"},
      {"id":7,"category":"category4","title":"title7","excerpt":"excerpt777777","content":"content777777777777777777777"},
      {"id":8,"category":"category2","title":"title8","excerpt":"excerpt888888","content":"content888888888888888888888"},
      {"id":9,"category":"category2","title":"title9","excerpt":"excerpt999999","content":"content999999999999999999999"},
      {"id":10,"category":"category3","title":"title10","excerpt":"excerpt10101010","content":"content101010101010101010"},
      {"id":11,"category":"category3","title":"title11","excerpt":"excerpt1111111111","content":"content111111111111111111111"},
      {"id":12,"category":"category4","title":"title12","excerpt":"excerpt1212121212","content":"content121212121212121212121"},
      {"id":13,"category":"category1","title":"title13","excerpt":"excerpt1212121212","content":"content131313131313131313131"},
      {"id":14,"category":"category1","title":"title14","excerpt":"excerpt1212121212","content":"content141414141414141414141"},
      {"id":15,"category":"category1","title":"title15","excerpt":"excerpt1212121212","content":"content151515151515151515151"},
      {"id":16,"category":"category1","title":"title16","excerpt":"excerpt1212121212","content":"content161616161616161616161"},
    ];
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1,s2) => s1 !== s2
    });
    this.state = {
      highlightColor:'red',
      dataSource:this.ds.cloneWithRowsAndSections(this.convertArrayToMap())
    };
  }

  pressFunc(rowDataid){
    console.log(rowDataid);
  }

  convertArrayToMap(){
    var categoryMap = {}; // Create the blank map
    this.data.forEach(function(item) {
      if (!categoryMap[item.category]) {
        // Create an entry in the map for the category if it hasn't yet been created
        categoryMap[item.category] = [];
      }
      categoryMap[item.category].push(item);
    });
    return categoryMap;
  }

  _renderRow(rowData,sectionID,rowID){
    return (
      <TouchableHighlight onPress={() => this.pressFunc(rowData.id)}>
        <View>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{rowData.id} {rowData.title} - {rowID}</Text>
            <Text style={{width:80,textAlign:'center',backgroundColor:'#0a8acd',borderRadius:6,color:'#fff'}}>{sectionID}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _renderSectionHeader(sectionData, category){
    return (
      <Text style={{fontSize:18,color:'#fff',backgroundColor:'#0a8acd'}}>{category}</Text>
    );
  }

  _renderHeader(){
    return (
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#FF9632'}}>
        <Text style={{textAlign:'center',marginVertical:10,color:'#fff'}}>资讯中心</Text>
      </View>
    );
  }

  _separator(sectionID,rowID){
    return (
      <View key={`${sectionID}-${rowID}`} style={{height:1,backgroundColor:'red',marginBottom:10,marginTop:6}}>
      </View>
    );
  }

  render() {
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>ListView组件</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ this._renderRow.bind(this) }
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          renderHeader={this._renderHeader.bind(this)}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          renderSeparator={this._separator.bind(this)}
          />
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
