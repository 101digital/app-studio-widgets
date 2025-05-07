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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const theme_context_1 = require("../../context/theme-context");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const ASPageView = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { children, style, paginationStyle, paginationBottomPosition = 0, horizontal = true, snapToAlignment = "center", showsHorizontalScrollIndicator = false, showsVerticalScrollIndicator = false, testId = 'ASPageView' } = props, restProps = __rest(props, ["children", "style", "paginationStyle", "paginationBottomPosition", "horizontal", "snapToAlignment", "showsHorizontalScrollIndicator", "showsVerticalScrollIndicator", "testId"]);
    const [height, setHeight] = (0, react_1.useState)(0);
    const [width, setWidth] = (0, react_1.useState)(0);
    const onLayout = (event) => {
        const heightValue = event.nativeEvent.layout.height;
        const widthValue = event.nativeEvent.layout.width;
        if (heightValue > height) {
            setHeight(heightValue + paginationBottomPosition);
        }
        if (widthValue > width) {
            setWidth(widthValue + paginationBottomPosition);
        }
    };
    const snapConfig = horizontal
        ? { snapToOffsets: [0, width], horizontal: true }
        : { snapToOffsets: [0, height] };
    return (
    // <PagerView
    //     initialPage={0}
    //     showsButtons={false}
    //     orientation={"horizontal"}
    //     loop={false}
    //     dotStyle={[styles.dot, {backgroundColor: colors.black500,}]}
    //     activeDotStyle={[styles.activeDot, {backgroundColor: colors.white,}]}
    //     {...restprops}
    //     style={[styles.wrapper, style]}
    // >
    //     {Array.isArray(children) ? children.map((page: React.ReactNode, index: number) => (
    //             <View onLayout={onLayout}
    //                   key={index} style={styles.slide}>
    //                 {page}
    //             </View>
    //         )) :
    //         <View onLayout={onLayout}
    //               style={styles.slide}>
    //             {children}
    //         </View>
    //     }
    // </PagerView>
    react_1.default.createElement(react_native_gesture_handler_1.ScrollView, Object.assign({ horizontal: horizontal, decelerationRate: 0, snapToInterval: width, snapToAlignment: snapToAlignment, showsHorizontalScrollIndicator: showsHorizontalScrollIndicator, showsVerticalScrollIndicator: showsVerticalScrollIndicator, testID: `scrollView-${testId}` }, snapConfig, restProps), Array.isArray(children) ? (children.map((page, index) => (react_1.default.createElement(react_native_1.View, { testID: `childView-${index}-${testId}`, onLayout: onLayout, key: index, style: styles.slide }, page)))) : (react_1.default.createElement(react_native_1.View, { testID: `slideView-${testId}`, onLayout: onLayout, style: styles.slide }, children))));
};
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        width: "100%",
    },
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
        bottom: 0,
    },
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
