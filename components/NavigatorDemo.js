'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

var Main = require('./Main');
var ViewDemo = require('./ViewDemo');
var TextDemo = require('./TextDemo');
var TouchableHighlightOpacity = require('./TouchableHighlightOpacity');

class NavigatorDemo extends Component {
	//定义Navigator的renderScene
  renderScene(route, nav) {
    switch (route.id){
        case 'Main':
            return (
              <Main navigator={nav} {...route.passProps} />
            );
            break;
        case 'View':
            return (
              <Text navigator={nav} {...route.passProps}/>
            );
            break;
        case 'Text':
            return (
              <Text navigator={nav} {...route.passProps} />
            );
            break;
        case 'TouchableHighlightOpacity':
            return (
              <TouchableHighlightOpacity navigator={nav} {...route.passProps} />
            );
            break;
        case 'Default':
            return (
              <Main navigator={nav} {...route.passProps} />
            );
            break;
    }
	}

	render() {
		return (
			<View>
				<Text style={styles.title}>Navigator组件</Text>
        <TouchableHighlight style={styles.itemContainer} underlayColor='#eee' onPress={()=>nav.push({id:'Main'})}>
          <Text style={styles.menuItem}>首页</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemContainer} underlayColor='#eee' onPress={()=>nav.push({id:'Text'})}>
          <Text style={styles.menuItem}>Text</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemContainer} underlayColor='#eee' onPress={()=>nav.push({id:'View'})}>
          <Text style={styles.menuItem}>View</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.itemContainer} underlayColor='#eee' onPress={()=>nav.push({id:'TouchableHighlightOpacity'})}>
          <Text style={styles.menuItem}>TouchableHighlightOpacity</Text>
        </TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  itemContainer:{borderWidth:1,padding:8,borderColor:'#0a8acd',margin:10},
  menuItem:{textAlign:'center'}
})

module.exports = NavigatorDemo;
