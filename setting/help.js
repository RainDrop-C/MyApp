import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

import Util from './../util';

class Help extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>该APP是用ReactNative进行开发</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>用处是进行停车场的定位</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>这里面Blog是我自己个人的主页</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>定位用的是高德地图提供的服务</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>我的个人邮箱：353144270@qq.com</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>......</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:3
  }
});

module.exports = Help;