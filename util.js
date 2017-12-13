import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
  PixelRatio
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
                callback(JSON.parse(responseText));
            });
    },

    //get
    getJSON(url, callback){
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            });
    },
   // amapKey: '98cd4d3c1c2865132e73d851654c9c1b',
    amapKey: '4566be41f567114ca4518fc685db8d62',
    //周边搜索服务
    searchURL: 'http://restapi.amap.com/v3/place/around?',

    detailURL: 'http://restapi.amap.com/v3/place/detail?'
};

module.exports = Util;