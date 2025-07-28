"use strict";
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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const native_1 = require("@react-navigation/native");
const commonUtils_1 = require("../../utils/commonUtils");
const ASContainer = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { children, style, isScrollable = true, scrollViewContentContainerStyle, scrollViewProps, disabledSafeArea, isPreview = false } = props, restProps = __rest(props, ["children", "style", "isScrollable", "scrollViewContentContainerStyle", "scrollViewProps", "disabledSafeArea", "isPreview"]);
    const insets = disabledSafeArea ? { top: 0, bottom: 0, left: 0, right: 0 } : (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const navigation = isPreview ? false : (0, native_1.useNavigation)();
    const route = isPreview ? { name: false } : (0, native_1.useRoute)();
    // Check if the current screen has a header
    const hasHeader = (!isPreview && navigation !== false && route.name !== false) ? (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.getState().routes.some((r) => { var _a; return r.name === route.name && ((_a = r.params) === null || _a === void 0 ? void 0 : _a.headerShown) !== false; }) : undefined;
    // Set hasHeader to false if it is undefined
    const isHeaderVisible = hasHeader === undefined ? true : false;
    const flattenedStyle = react_native_1.StyleSheet.flatten(style);
    const safeAreaStyle = disabledSafeArea
        ? {}
        : {
            paddingTop: isHeaderVisible ? Math.max((_b = (0, commonUtils_1.toNumber)(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.paddingTop)) !== null && _b !== void 0 ? _b : 0, insets.top, 15) : ((_c = (0, commonUtils_1.toNumber)(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.paddingTop)) !== null && _c !== void 0 ? _c : 0) + insets.top,
            paddingBottom: ((_d = (0, commonUtils_1.toNumber)(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.paddingBottom)) !== null && _d !== void 0 ? _d : 0) + insets.bottom,
            paddingLeft: ((_e = (0, commonUtils_1.toNumber)(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.paddingLeft)) !== null && _e !== void 0 ? _e : 0) + insets.left,
            paddingRight: ((_f = (0, commonUtils_1.toNumber)(flattenedStyle === null || flattenedStyle === void 0 ? void 0 : flattenedStyle.paddingRight)) !== null && _f !== void 0 ? _f : 0) + insets.right,
        };
    return (react_1.default.createElement(react_native_1.View, Object.assign({}, restProps, { style: [styles.container, style, safeAreaStyle] }), isScrollable ? (react_1.default.createElement(react_native_1.ScrollView, Object.assign({ showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false }, scrollViewProps, { contentContainerStyle: [styles.scrollViewStyle, scrollViewContentContainerStyle] }), children)) : (children)));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        flexGrow: 1,
    },
});
exports.default = ASContainer;
