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
const ASTabView = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { children, style, isScrollable = true, scrollViewContentContainerStyle, scrollViewProps, title, name, testId = "ASTabView" } = props, restProps = __rest(props, ["children", "style", "isScrollable", "scrollViewContentContainerStyle", "scrollViewProps", "title", "name", "testId"]);
    return (react_1.default.createElement(react_native_1.View, Object.assign({}, restProps, { style: [styles.container, style], testID: `view-${testId}` }), isScrollable ? (react_1.default.createElement(react_native_1.ScrollView, Object.assign({ testID: `scrollView-${testId}`, style: { flex: 1 }, showsVerticalScrollIndicator: false, showsHorizontalScrollIndicator: false }, scrollViewProps, { contentContainerStyle: [
            scrollViewContentContainerStyle,
            { paddingBottom: 50 },
        ], nestedScrollEnabled: true }), children)) : (children)));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = ASTabView;
