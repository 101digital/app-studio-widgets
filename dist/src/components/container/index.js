"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var ASContainer = function (props) {
    var _a = props || {}, children = _a.children, style = _a.style, _b = _a.isScrollable, isScrollable = _b === void 0 ? true : _b, scrollViewContentContainerStyle = _a.scrollViewContentContainerStyle, scrollViewProps = _a.scrollViewProps, restProps = __rest(_a, ["children", "style", "isScrollable", "scrollViewContentContainerStyle", "scrollViewProps"]);
    return (react_1.default.createElement(react_native_safe_area_context_1.SafeAreaView, __assign({}, restProps, { style: [styles.container, style] }), isScrollable ? (react_1.default.createElement(react_native_1.ScrollView, __assign({ showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false }, scrollViewProps, { contentContainerStyle: [styles.scrollViewStyle, scrollViewContentContainerStyle] }), children)) :
        children));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewStyle: {
        flexGrow: 1
    }
});
exports.default = ASContainer;
