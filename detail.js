import React, {
    Component
} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

export  default class PDetail extends Component{
    constructor(props){
        super(props);
        this.state={
      data: null
    };
  }
  render(){
    return (
      <ScrollView>
        {this.state.data?
        <View style={styles.content}>
          <Text style={styles.name}>{this.state.data.name}</Text>
          <Text style={styles.types}>
            类型：
            {this.state.data.type}
          </Text>
          <Text style={styles.address}>
            地址：
            {this.state.data.address}
          </Text>
          <Text style={styles.tag}>
            标签：
            {this.state.data.tag}
          </Text>
          <Text style={styles.server}>
            服务：
            {this.state.data.server}
          </Text>
        </View>
        :null}
      </ScrollView>
    );
  }
  componentDidMount(){
    var that = this;
    var url = Util.searchURL + 'key=' + Util.amapKey +  '&location=' + /*lnglat*/'31.755726,117.253389' +'&keywords=parking' + '&extensions=base';
      that._doGetData(url);
    Util.getJSON(url, function(data){
      if(data.status && data.info === 'OK' && data.pois.length){
        var obj = data.pois[0];
        if(obj.deep_info && obj.deep_info.tag){
          obj.server = obj.deep_info.tag;
        }
        that.setState({
          data: obj
        });
      }else{
        alert('数据服务出错');
      }

    });
  }
};

var styles = StyleSheet.create({
  container:{
    flex:1
  },
  name:{
    fontSize:15,
    color:'#1D92F5',
    fontWeight:'bold'
  },
  content:{
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  tag:{
    fontSize:13,
    marginTop:10
  },
  types:{
    marginTop:10,
    fontSize:13,
    color:'#4C4C4C'
  },
  address:{
    fontSize:13,
    color:'#4C4C4C'
  },
  server:{
    marginTop:10,
    fontSize:13
  }

});


