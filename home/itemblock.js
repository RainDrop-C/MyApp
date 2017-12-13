import React, {
    Component
} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    PixelRatio,
    WebView,
    Navigator
} from 'react-native';

import Util from '../util';
class ItemBlock extends Component{
    constructor(props){
        super(props);
        this.state = {id:2};
    }
  render(){
    var size ={
      width: parseInt(this.props.width),
      height: parseInt(this.props.width),
      backgroundColor: this.props.color,
    };
    return (
      <TouchableHighlight underlayColor="#fff" onPress={this._loadPage.bind(this)}>
        <View style={[styles.itemBlock, size]}>
          <View>
            <Text style={styles.font18}>{this.props.title}</Text>
          </View>
          <View>
            <Text style={styles.font10}>{this.props.partment}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  //加载页面
    _loadPage(){
       const {nav} = this.props;
        if (nav) {
            nav.push({
                name: 'ParkingMap',
                component:PWebView,
                params: {
                    id: this.state.id
                }
            })
        }
}
};
/*url=require('../parkingLot/text.html')*/
class PWebView extends Component{
    render(){
        return(
            <View style={{flex:1}}>
              <WebView
                  automaticallyAdjustContentInsets={false}
                  bounces={false}
                  source={{url:'http://192.168.1.102:6868/index.html'}}
                 // source={{url:'http://192.168.1.205:6868/index.html'}}
                  style={{marginTop:20}}>
              </WebView>
            </View>
        );
    }
};

var styles = StyleSheet.create({
  itemBlock:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginLeft:10,
  },
  font18:{
    color:'#fff',
    fontSize:18,
    fontWeight:'500',
  },
  font10:{
    color:'#fff',
    fontSize:10,
  },
});

module.exports = ItemBlock;