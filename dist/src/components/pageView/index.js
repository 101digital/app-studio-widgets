"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_swiper_1 = __importDefault(require("react-native-swiper"));
const theme_context_1 = require("../../context/theme-context");
const ASPageView = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { children, style, paginationStyle, paginationBottomPosition = 15 } = props, restprops = __rest(props, ["children", "style", "paginationStyle", "paginationBottomPosition"]);
    const [height, setHeight] = (0, react_1.useState)(0);
    const [startSwiper, setStartSwiper] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
    return (startSwiper && react_1.default.createElement(react_native_swiper_1.default, Object.assign({ showsButtons: false, loop: false, dotStyle: [styles.dot, { backgroundColor: colors.black500, }], activeDotStyle: [styles.activeDot, { backgroundColor: colors.white, }] }, restprops, { paginationStyle: [styles.paginationStyle, paginationStyle], style: [styles.wrapper, { height }, style] }), Array.isArray(children) ? children.map((page, index) => (react_1.default.createElement(react_native_1.View, { onLayout: onLayout, key: index, style: styles.slide }, page))) :
        react_1.default.createElement(react_native_1.View, { onLayout: onLayout, style: styles.slide }, children)));
};
const styles = react_native_1.StyleSheet.create({
    wrapper: {},
    slide: {},
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    paginationStyle: {
        bottom: 0
    }
});
exports.default = ASPageView;
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
