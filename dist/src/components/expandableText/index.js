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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const ASExpandableText = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { initialLines = 1, text, textStyle, readMoreTextStyles } = props;
    const [isExpanded, setIsExpanded] = react_1.default.useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(text_1.default, { numberOfLines: isExpanded ? undefined : initialLines, style: [styles.textStyle, { color: colors.black, }, textStyle] }, text),
        (text === null || text === void 0 ? void 0 : text.length) > initialLines && (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: toggleExpansion },
            react_1.default.createElement(text_1.default, { style: [styles.readMoreTextStyle, {
                        color: colors.gray400,
                    }, readMoreTextStyles] }, isExpanded ? 'Read less' : 'Read more')))));
};
const styles = react_native_1.StyleSheet.create({
    textStyle: {},
    readMoreTextStyle: {
        fontSize: 12
    }
});
exports.default = ASExpandableText;
// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
