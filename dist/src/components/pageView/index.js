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
const ASPageView = (props) => {
    const { pages, style, paginationStyle, paginationBottomPosition = 15 } = props, restprops = __rest(props, ["pages", "style", "paginationStyle", "paginationBottomPosition"]);
    const [height, setHeight] = useState(0);
    const [startSwiper, setStartSwiper] = useState(false);
    useState(() => {
        const timeout = setTimeout(() => {
            setStartSwiper(true);
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
        // @ts-ignore
    }, []);
    const handleSetHeight = (value) => {
        if (value > height) {
            setHeight(value + paginationBottomPosition);
        }
    };
    const onLayout = (event) => {
        handleSetHeight(event.nativeEvent.layout.height);
    };
    return (startSwiper && React.createElement(Swiper, Object.assign({ showsButtons: false, loop: false, dotStyle: styles.dot, activeDotStyle: styles.activeDot }, restprops, { paginationStyle: [styles.paginationStyle, paginationStyle], style: [styles.wrapper, { height }, style] }), pages.map((page, index) => (React.createElement(View, { onLayout: onLayout, key: index, style: styles.slide }, page)))));
};
const styles = StyleSheet.create({
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
