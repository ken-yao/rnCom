'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid
} from 'react-native';

class ViewPagerAndroidDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0
    };
  }

_pageSelected(e){
  console.log(e);
  this.setState({
    selected: e.nativeEvent.position
  });
}

  render() {
    var intros = ['复仇者联盟3','复仇者联盟2','漫威动画电影','钢铁侠3','蚁人'];
    var images = [
      {
        intro:'复仇者联盟3',
        url:'http://i.annihil.us/u/prod/marvel/i/mg/a/10/54ebd9917f0e7.jpg'
      },
      {
        intro:'复仇者联盟2',
        url:'http://ifanboy.com/wp-content/uploads/2012/02/newavengersposter.jpg'
      },
      {
        intro:'漫威动画电影',
        url:'http://x.annihil.us/u/prod/marvel/i/mg/6/b0/5375c397eef00.jpg'
      },
      {
        intro:'钢铁侠3',
        url:'http://x.annihil.us/u/prod/marvel/i/mg/9/40/508563b9dc2ac.jpg'
      },
      {
        intro:'蚁人',
        url:'http://x.annihil.us/u/prod/marvel/i/mg/3/60/55495e0e6a260.jpg'
      }];
    return (
    	<View>
        <Text style={styles.title}>ViewPagerAndroid组件</Text>
        <Text style={{textAlign:'center'}}>{this.state.selected}</Text>
        <ViewPagerAndroid style={{flex:1,margin:10,height:500}} initialPage={0} onPageSelected={this._pageSelected.bind(this)}>
          {images.map((elem,index) => {
            return (
              <View key={index} style={{flex:1}}>
                <Image style={{flex:1}} resizeMode="cover" source={{uri: elem.url}} />
                <Text style={{fontSize:20,textAlign:'center'}}>{elem.intro}</Text>
              </View>
            );
          })}
        </ViewPagerAndroid>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},

})

module.exports = ViewPagerAndroidDemo;
