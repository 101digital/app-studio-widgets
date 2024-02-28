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
const ASContainer = (props) => {
    const _a = props || {}, { children, style, isScrollable = true, scrollViewContentContainerStyle, scrollViewProps, disabledSafeArea } = _a, restProps = __rest(_a, ["children", "style", "isScrollable", "scrollViewContentContainerStyle", "scrollViewProps", "disabledSafeArea"]);
    return (react_1.default.createElement(react_native_safe_area_context_1.SafeAreaView, Object.assign({ edges: disabledSafeArea ? [] : ['right', 'left', 'top', "bottom"] }, restProps, { style: [styles.container, style] }), isScrollable ? (react_1.default.createElement(react_native_1.ScrollView, Object.assign({ showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false }, scrollViewProps, { contentContainerStyle: [styles.scrollViewStyle, scrollViewContentContainerStyle] }), children)) :
        children));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewStyle: {
        flexGrow: 1
    }
});
exports.default = ASContainer;
