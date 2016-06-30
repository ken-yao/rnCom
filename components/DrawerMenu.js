'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator,
    DrawerLayoutAndroid,
    ListView
} from 'react-native';

var Main = require('./Main');
var ViewDemo = require('./ViewDemo');
var TextDemo = require('./TextDemo');
var TouchableHighlightOpacity = require('./TouchableHighlightOpacity');
var TouchableWithoutFeedbackDemo = require('./TouchableWithoutFeedbackDemo');
var ImageDemo = require('./ImageDemo');
var TextInputDemo = require('./TextInputDemo');
var SwitchDemo = require('./SwitchDemo');
var SliderDemo = require('./SliderDemo');
var ListViewDemo = require('./ListViewDemo');
var ModalDemo = require('./ModalDemo');
var PickerDemo = require('./PickerDemo');
var RefreshControlDemo = require('./RefreshControlDemo');
var ScrollViewDemo = require('./ScrollViewDemo');
var WebViewDemo = require('./WebViewDemo');
var ViewPagerAndroidDemo = require('./ViewPagerAndroidDemo');
var ProgressBarAndroidDemo = require('./ProgressBarAndroidDemo');
var ToolbarAndroidDemo = require('./ToolbarAndroidDemo');
var StatusBarDemo = require('./StatusBarDemo');
var DrawerLayoutAndroidDemo = require('./DrawerLayoutAndroidDemo');
var NavigatorDemo = require('./NavigatorDemo');

class DrawerMenu extends Component {
    constructor(props){
        super(props);
        let menuArray = [{id:'Main'},{id:'View'},{id:'Text'},{id:'TouchableHighlightOpacity'},{id:'TouchableWithoutFeedback'},{id:'Image'},{id:'TextInput'},{id:'Switch'},{id:'Slider'},{id:'Picker'},{id:'Modal'},{id:'ListView'},{id:'ScrollView'},{id:'RefreshControl'},{id:'WebView'},{id:'ViewPagerAndroid'},{id:'ProgressBarAndroid'},{id:'ToolbarAndroid'},{id:'StatusBar'},{id:'DrawerLayoutAndroid'},{id:'Navigator'}];
        this.state = {
            dataSource : new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2,
            }).cloneWithRows(menuArray),
        };
    }

    openDrawer(){
        this.refs['DRAWER'].openDrawer();
    };

    closeDrawer(){
        this.refs['DRAWER'].closeDrawer();
    }

    goTo(n) {
        nav.push({
            id: n.id,
        });
        this.closeDrawer();
    }

    renderScene(route, nav) {
      switch (route.id){
          case 'Main':
              return (<Main navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'View':
              return (<ViewDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Text':
              return (<TextDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'TouchableHighlightOpacity':
              return (<TouchableHighlightOpacity navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'TouchableWithoutFeedback':
              return (<TouchableWithoutFeedbackDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Image':
              return (<ImageDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Image':
              return (<ImageDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'TextInput':
              return (<TextInputDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Switch':
              return (<SwitchDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Slider':
              return (<SliderDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'ListView':
              return (<ListViewDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Modal':
              return (<ModalDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Picker':
              return (<PickerDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'RefreshControl':
              return (<RefreshControlDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'ScrollView':
              return (<ScrollViewDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'WebView':
              return (<WebViewDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'ViewPagerAndroid':
              return (<ViewPagerAndroidDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'ProgressBarAndroid':
              return (<ProgressBarAndroidDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'ToolbarAndroid':
              return (<ToolbarAndroidDemo navigator={nav} {...this.props} {...route.passProps} openDrawer={this.openDrawer.bind(this)} />);
              break;
          case 'StatusBar':
              return (<StatusBarDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'DrawerLayoutAndroid':
              return (<DrawerLayoutAndroidDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Navigator':
              return (<NavigatorDemo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'Test':
              return (<Test navigator={nav} {...this.props} {...route.passProps} />);
              break;
      }
	}

  render() {
  	var navigationView = (
          <View style={styles.container}>
              <Text style={styles.menuTitle}>React Native Components</Text>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo(rowData)}><Text style={styles.menuItem}>{rowData.id}</Text></TouchableHighlight>}
              />
          </View>
    );

    return (
        <DrawerLayoutAndroid
        	  ref={'DRAWER'}
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.left}
            renderNavigationView={() => navigationView}>

            <View style={styles.container}>
                <Navigator
                    initialRoute={{id:'Main'}}
                    ref={((nav) => { global.nav = nav })}
                    renderScene={this.renderScene.bind(this)}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                          return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                />
            </View>

        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  menuTitle:{
    marginTop: 16,
    marginBottom:16,
    color:'#4f4f4f',
    fontSize: 20,
    textAlign: 'center'
  },
  menuItem:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    margin:10,
  }
});

module.exports = DrawerMenu;
