import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

import Util from './../util';

class Detail extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.text}></Text>
          <Text style={styles.text}>附近停车场并对停车位停的车辆进行检测</Text>
        </View>

        <View style={styles.center}>
          <Text style={styles.text}>显示我的个人网站</Text>
        </View>

        <View style={styles.center}>
          <Text style={styles.text}>显示个人设置</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  center:{
    justifyContent:'center',
    alignItems: 'center'
  },
  icon:{
    width:300,
    height:530
  },
  items:{
    width:300,
    marginBottom:10,
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 1*Util.pixel, height: Util.pixel},
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:15
  }
});

module.exports = Detail;