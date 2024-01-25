var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
var ASPageView = function (props) {
    var pages = props.pages, style = props.style, paginationStyle = props.paginationStyle, _a = props.paginationBottomPosition, paginationBottomPosition = _a === void 0 ? 15 : _a, restprops = __rest(props, ["pages", "style", "paginationStyle", "paginationBottomPosition"]);
    var _b = useState(0), height = _b[0], setHeight = _b[1];
    var handleSetHeight = function (value) {
        if (value > height) {
            setHeight(value + paginationBottomPosition);
        }
    };
    var onLayout = function (event) {
        handleSetHeight(event.nativeEvent.layout.height);
    };
    return (React.createElement(Swiper, __assign({ showsButtons: false, loop: false, dotStyle: styles.dot, activeDotStyle: styles.activeDot }, restprops, { paginationStyle: [styles.paginationStyle, paginationStyle], style: [styles.wrapper, { height: height }, style] }), pages.map(function (page, index) { return (React.createElement(View, { onLayout: onLayout, key: index, style: styles.slide }, page)); })));
};
var styles = StyleSheet.create({
    wrapper: {},
    slide: {},
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    paginationStyle: {
        bottom: 0
    }
});
export default ASPageView;
//Note: ASPageView example
/*
    <ASPageView
                pages={[
                    <ASRow>
                        <ASText style={{ fontSize: 24}}>Test Page view</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primaryIconColor"/>
                    </ASRow>
                    ,
                    <ASText style={{textAlign: 'center', fontSize: 24}}>Welcome to App Studio</ASText>,
                    <ASColumn style={{}}>
                        <ASText>Test1</ASText>
                        <ASText>Test2</ASText>
                        <ASText>Test3</ASText>
                        <ASText>Test4</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test5</ASText>
                        <ASText>Test.....</ASText>
                    </ASColumn>
                ]}
            />
* */
