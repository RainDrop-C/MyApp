/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import List from './list';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  WebView,
  Image,
  TabBarIOS,
  AlertIOS,
} from 'react-native';

import Util from './util';
import Help from './setting/help';
import Detail from './setting/detail';
import Tips from './setting/tips';
//import About from './setting/about';
var img4_base64 = 'data:image/png;base64,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KwM6dwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNS0wNFQyMTo0NDo1MyswODowMIRIR4gAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIHILdZYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUzM8q8AZUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTMzWU1RyAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxMzk5MjExMDkzQpBh+QAAABN0RVh0VGh1bWI6OlNpemUAMTAuMUtCQirRrdwAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTYwMi8xMTYwMjA2LnBuZ2hohJkAAAAASUVORK5CYII=';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class TB extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTabItem:'home',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS
                    style={{height:height, width: width}}
                    tintColor="dodgerblue"
                    barTintColor="white"
                    translucent={false}
                >
                    <TabBarIOS.Item
                        title="首页"
                        icon={require('./img/home.png')}
                        onPress={() => {this.setState({selectedTabItem:'home'})}}
                        selected={this.state.selectedTabItem === 'home'}
                    >
                        <NavigatorIOS
                            style={{flex:1}}
                            initialRoute ={
                                {
                                    component: List,
                                    title:'首页',
                                    passProps:{myProp:'foo'}
                                }
                            }
                            configureScene = {(route) => {
                                return NavigatorIOS.SceneConfigs.FloatFromBottom;
                            }
                            }
                            renderScene = {(route,navigator) => {
                                let List = route.companent;
                                return <List navigator={navigator}/>
                            }}
                        >
                        </NavigatorIOS>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="定位"
                        icon={require('./img/location.png')}
                        onPress={() => {this.setState({selectedTabItem:'location'})}}
                        selected={this.state.selectedTabItem === 'location'}
                    >
                        <NavigatorIOS
                            style={{flex:1}}
                            initialRoute ={
                                {
                                    component: Location,
                                    title:'停车场',
                                }
                            }
                            configureScene = {(route) => {
                                return NavigatorIOS.SceneConfigs.FloatFromBottom;
                            }
                            }
                            renderScene = {(route,navigator) => {
                                let Location = route.companent;
                                return <Location navigator={navigator}/>
                            }}
                        >
                        </NavigatorIOS>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="博客"
                        icon={require('./img/collection.png')}
                        onPress={() => {this.setState({selectedTabItem:'collection'})}}
                        selected={this.state.selectedTabItem === 'collection'}
                    >
                    <Blog></Blog>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="设置"
                        icon={{uri: img4_base64, scale: 3}}
                        onPress={() => {this.setState({selectedTabItem:'system'})}}
                        selected={this.state.selectedTabItem ==='system'}
                    >
                        <Setting></Setting>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }
}

class Blog extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    bounces={false}
                    source={{uri: 'http://www.lovelyjiaojiao.com'}}
                    style={{marginTop:20}}>
                </WebView>
            </View>
        );
    }
}

class SettingView extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.bg}>
                    <Text style={{fontSize:18,color:'#fff',marginTop:10,fontWeight:'bold'}}>
                        设置
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
                        <Image style={styles.icon} source={require('./img/ios.png')} resizeMode="contain"/>
                        <Text style={[styles.text, {fontSize:13}]}>v2.0.0</Text>
                    </View>
                    <TouchableOpacity onPress={this._showDetail.bind(this)}>
                        <View style={styles.item}>
                            <Text style={styles.text}>功能介绍</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._showHelp.bind(this)}>
                        <View style={styles.item}>
                            <Text style={styles.text}>帮助中心</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._showTips.bind(this)}>
                        <View style={styles.item}>
                            <Text style={styles.text}>服务条款</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._showAbout.bind(this)}>
                        <View style={styles.item}>
                            <Text style={styles.text}>关于</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
    _showHelp(){
        this.props.navigator.push({
            component: Help,
            title: '帮助中心',
            barTintColor: '#fff'
        });
    }

    _showTips(){
        this.props.navigator.push({
            component: Tips,
            title: '服务条款',
            barTintColor: '#fff'
        });
    }

    _showAbout(){
        AlertIOS.alert('爱coding！爱萌妹！', '我写APP只是因为我可以。', [{text: 'Year～'}]);
    }

    _showDetail(){
        this.props.navigator.push({
            component: Detail,
            title: '功能介绍',
            barTintColor: '#fff'
        });

    }
}

//定位部分
const nearByURL = './html/nearby.html';

class Location extends Component{
    render(){
        return(<TWebView url={nearByURL} isNearBy={true}/>);
    }
}


class TWebView extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            isMargin: this.props.isMargin,
            isShowErrorPage: false,
            isNearBy: this.props.isNearBy,
        };
    }
    render(){
        //let url = {uri: this.state.url};
        if(this.state.isNearBy){
          url = require('./html/nearby.html');
        }

        return(
            <View style={styles.container}>
                {
                    this.state.isShowErrorPage?
                        <View style={styles.textView}>
                            <Text style={styles.text2}>不好意思,请检查网络连接情况或者报告错误</Text>
                        </View>
                        :
                        <WebView
                            style={[styles.container,{marginTop: this.state.isMargin || -20}]}
                            startInLoadingState={true}
                            onError={this._loadError.bind(this)}
                            source={url}>
                        </WebView>
                }
            </View>
        );
    }

    _loadError(){
        this.setState({
            isShowErrorPage: true
        });
    }
}

//end

class Setting extends Component{
    render(){
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: SettingView,
                    title: '设置',
                    navigationBarHidden: true
                }}/>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    item:{
        height:50,
         backgroundColor:'#fff',
         borderColor:'#ccc',
         justifyContent: 'center'
    },
    bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
    },
    text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
    },
    icon:{
    width:88,
    height:100
    },
    text2:{
        fontSize:16,
        fontWeight:'300'
    },
    textView:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('App', () => TB);
