'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';

class RefreshControlDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiUrl:'http://www.sameroad.cn/wp-json/wp/v2/posts',
      pageSize:5,
      page:1,
      loaded: false,
      data:[],
      isRefreshing:false,
      dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 !== row2,
      })
    };
  }

  componentDidMount(){
      this.fetchData();
  };

  fetchData(){
    var REQUEST_URL = this.state.apiUrl + '?filter[posts_per_page]='+this.state.pageSize + '&page='+ this.state.page;
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        var dataArray = responseData.concat(this.state.data);
        this.setState({
            data:dataArray,
            dataSource: this.state.dataSource.cloneWithRows(dataArray),
            loaded:true,
            page:this.state.page + 1,
            isRefreshing:false
        });
      })
      .done();
  };

  pressFunc(rowDataid){
    console.log(rowDataid);
  }

  _formatDate(date){
    var dt = new Date(date);
    return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
  }

  _renderRow(rowData){
    return (
        <TouchableHighlight onPress={() => this.pressFunc(rowData.id)} underlayColor="#eee">
        <View style={{padding:10,borderBottomWidth:1,borderColor:'#ccc'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{rowData.title.rendered}</Text>
            <Text>{this._formatDate(rowData.date)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onRefresh(){
    this.setState({isRefreshing:true})
    this.fetchData();
  }

  renderLoadingView(){
      return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
              <Text>正在拼命加载中...</Text>
          </View>
      );
  }

  render() {
    if(!this.state.loaded){
        return this.renderLoadingView();
    }
    return (
    	<View style={styles.container}>
        <Text style={styles.title}>RefreshControl组件</Text>
        <ListView
          refreshControl={
            <RefreshControl
              colors={['#0a8acd','#BDECFF']}
              progressBackgroundColor='#eee'
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              />
          }
          dataSource={this.state.dataSource}
          renderRow={ this._renderRow.bind(this) }
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

module.exports = RefreshControlDemo;
