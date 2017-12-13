import React, {
    Component
} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    PixelRatio,
    Platform,
    AlertIOS,
    ActivityIndicator,
    TouchableOpacity,
    ActionSheetIOS,
    AsyncStorage
} from 'react-native';

let Util = {
    //单位像素
    pixel: 1 / PixelRatio.get(),
    //屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    //post
    post(url, data, callback) {
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                console.log(JSON.parse(responseText));
            });
    },

    //get
    getJSON: function(url, callback){
        fetch(url)
            .then((response) => response.text())
            .then((jsonData) => {
                callback(JSON.parse(jsonData))
                })//你后面还可以继续疯狂的接.then并且传递数据，尽管试试吧！
            .catch((error) => {          //注意尾部添加异常回调
                console.log(error);
            });
    },
    amapKey: '67bf6404fc9d235a59ad61f4f3639237',
    //周边搜索服务
    searchURL: 'https://restapi.amap.com/v3/place/around?',

    detailURL: 'http://restapi.amap.com/v3/place/detail?'
};
var Geolocation = require('Geolocation');
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
//import Detail from './detail';
import ItemBlock from './home/itemblock';
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            width : Math.floor(((Util.size.width - 20) - 50) / 4),
        items:[
            {
                id:1,
                title: '电子系',
                partment: '地下停车场',
                color: '#126AFF',
            },
            {
                id:2,
                title: '教学楼',
                partment: '地下停车场',
                color: '#FFD600',
            },
            {
                id:3,
                title: '春雨路',
                partment: '路边停车场',
                color: '#F80728',
            },
            {
                id:4,
                title: '镇海路',
                partment: '路边停车场',
                color: '#05C147',
            },
        ],
            //new add

        list:null,
            count:0,
        }
    };


    render(){
        var Items1 = [];
        var Items2 = [];
        var items = this.state.items;

        for(var i = 0; i < 4; i++){
            Items1.push(
                <ItemBlock
                    key={items[i].id}
                    title={items[i].title}
                    partment={items[i].partment}
                    width={this.state.width}
                    color={items[i].color}
                    nav={this.props.navigator}
                />
            );
        }

        for(var i = 4; i < items.length; i++){
            Items2.push(
                <ItemBlock
                    key={items[i].id}
                    title={items[i].title}
                    partment={items[i].partment}
                    width={this.state.width}
                    color={items[i].color}
                    nav={this.props.navigator}
                />
            );
        }

        var items3 = [];
        if(this.state.list){
            var len = this.state.list.length > 10 ? 10 : this.state.list.length;
            for(var i = 0; i < len; i++){
                var obj = this.state.list[i];
                items3.push(
                    <TouchableOpacity key={'listItem' + i} style={styles.item}>
                        <View style={styles.row}>
                            <View style={{flex:1}}>
                                <Text numberOfLines={1} style={styles.name}>{obj.name}</Text>
                                <Text numberOfLines={1} style={styles.type}>{obj.type}</Text>
                            </View>
                            <View style={styles.distance}>
                                <Text numberOfLines={1} style={[styles.mi, {color:'#4C4C4C'}]}>
                                    {obj.distance}米
                                </Text>
                                <Text numberOfLines={1} style={styles.address}>{obj.address}</Text>
                            </View>
                        </View>
                        {
                            obj.tel.length ?
                                (<TouchableOpacity style={styles.phone} onPress={this._call.bind(this, obj.tel)}>
                                    <Text numberOfLines={1} >电话</Text>
                                </TouchableOpacity>)
                                :null
                        }
                    </TouchableOpacity>
                );
            }
        }
        var placeholder = '搜索';
        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemRow}>
                    {Items1}
                </View>
                <View style={styles.itemRow}>
                    {Items2}
                </View>
                <View style={styles.container}>
                    <Swiper style={styles.wrapper} height={240} autoplay
                            dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                            activeDot={<View style={{backgroundColor: 'greenyellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                            paginationStyle={{
                                bottom: 23, left: null, right: 10
                            }}

                            loop>
                        <View style={styles.slide} >
                            <Text numberOfLines={1}>May your love soar on the wings of a dove in flight.</Text>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/sw1.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Text numberOfLines={1}>I'll think of you every step of the way.</Text>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/sw2.jpg')} />
                        </View>
                        <View style={styles.slide} >
                            <Text numberOfLines={1}>The unexamined life is not worth living.</Text>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/sw4.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Text numberOfLines={1}>Advertising room for lease.</Text>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/sw3.jpg')} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.searchBg}>
                    <TextInput style={styles.input} placeholder={placeholder}
                               onPress={()=>AlertIOS.alert('sorry，我暂时没开发。', [{text: '无奈'}])}/>
                    <View>
                        <Text style={styles.tip}>
                            已为您筛选
                            <Text style={{color:'#FA2530'}}>{this.state.count}</Text>
                            条数据
                        </Text>
                    </View>
                </View>
                {items3}

                {items3.length? null : <View style={styles.activity}><ActivityIndicator color="#248BFD"/></View>}

                <View style={{height:40}}></View>
            </ScrollView>
        );
    }
    componentDidMount(){
        var that =this;
        Geolocation.getCurrentPosition(function(gl){
            var lnglat = gl.coords.longitude + ',' + gl.coords.latitude;
            console.log(lnglat);
            AsyncStorage.setItem('pos', lnglat);
            var url = Util.searchURL + 'key=' + Util.amapKey +  '&location=' + /*lnglat*/'31.755726,117.253389' +'&keywords=parking' + '&extensions=base';
              that._doGetData(url);
        });
}
    _doGetData(url){
    var that = this;
    Util.getJSON(url, function(data){
        if(data.status && data.info === 'OK'){
            var count = data.pois.length > 10? 10: data.pois.length;
            that._addStorage(data);
            that.setState({
                list: data.pois,
                count: count
            });
        }else{
            alert('没有查询到相应的数据');
        }
    });
}
   //加载详情页
    _loadDetail(id, name) {
        const {nav} = this.props;
        console.log(nav);
        if (nav) {
            nav.push({
                title: name,
                component: PDetail,
                params: {
                    id: id,
                }
            });
        }
    }

    _onChangeText(val){
    this.setState({
        keywords: val
    });
}
    _onEndEditing(){
    var that = this;
    var url = Util.searchURL + 'key=' + Util.amapKey +  '&location=' + /*lnglat*/'31.755726,117.253389' +'&keywords=parking' + '&extensions=base';
        that._doGetData(url);
    that.setState({
        list: null
    });
    AsyncStorage.getItem('pos', function(err, result){
        if(true){
            if(!err){
                url += '&location=' + result;
                that._doGetData(url);
            }else{
                alert('定位失败');
            }
        }else{
            url += '&location=' + '121.390686,31.213976';
            that._doGetData(url);
        }
    });
}

    //添加到本地存储
    _addStorage(data){
    var posArr = [];
    var len = data.pois.length > 10? 10: data.pois.length;
    for(var i = 0; i < len; i++){
        posArr.push(data.pois[i].location);
    }
    var posStr = posArr.join(',');
    AsyncStorage.setItem('_'  + this.props.type , posStr);
}

    //拨打电话
    _call(tel){
    if(tel.length){
        var arr = tel.split(';');
        var BUTTONS = [];
        for(var i in arr){
            BUTTONS.push(arr[i]);
        }
        BUTTONS.push('取消');

        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1
        }, function(index){
            arr[index] && LinkingIOS.openURL('tel://' + arr[index]);
        });
    }else{
        alert('没有提供号码');
    }
}

};
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
        flex:1,
        padding:10,
    },
    itemRow:{
        flexDirection:'row',
        marginBottom:20,
    },
    searchbar:{
        marginTop:Platform.OS ==='ios'?5:0,
        height:25,
        flexDirection:'row'
    },
    input2:{
        flex:1,
        borderColor:'gray',
        borderWidth:2,
       borderRadius:10,
       /* marginLeft: 20,  //左右留出一定的空间
        marginRight: 20*/
    },
    button:{
        flex:1,
    },
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width:width,
        flex: 1
    },
    input:{
        height:38,
        marginLeft:10,
        marginRight:10,
        borderWidth:Util.pixel,
        paddingLeft:5,
        marginTop:10,
        borderColor: '#868687',
        borderRadius:3,
        fontSize:15
    },
    tip:{
        fontSize:12,
        marginLeft:10,
        marginTop:5,
        color: '#505050'
    },
    row:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        paddingTop:5
    },
    distance:{
        width:120,
        alignItems:'flex-end',
    },
    name:{
        fontSize:15,
        marginBottom:6
    },
    type:{
        fontSize:12,
        color:'#686868'
    },
    mi:{
        fontSize:12,
        color:'#686868'
    },
    address:{
        fontSize:12,
        marginTop:5,
        color:'#686868'
    },
    phone:{
        marginLeft:10,
        marginRight:10,
        height:30,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:Util.pixel,
        borderColor:'#ccc',
        borderRadius:2,
    },
    searchBg:{
        backgroundColor:'#fff',
        paddingBottom:10
    },
    item:{
        marginTop:10,
        backgroundColor:'#fff',
        paddingBottom:10,
        borderTopWidth:Util.pixel,
        borderBottomWidth:Util.pixel,
        borderColor:'#ccc'
    },
    activity:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
    }
});

module.exports = List;