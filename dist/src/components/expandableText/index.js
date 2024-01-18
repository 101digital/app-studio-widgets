"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../../utils/colors");
var text_1 = __importDefault(require("../text"));
var ASExpandableText = function (props) {
    var _a = props.initialLines, initialLines = _a === void 0 ? 1 : _a, text = props.text, textStyle = props.textStyle, readMoreTextStyles = props.readMoreTextStyles;
    var _b = react_1.default.useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var toggleExpansion = function () {
        setIsExpanded(!isExpanded);
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(text_1.default, { numberOfLines: isExpanded ? undefined : initialLines, style: [styles.textStyle, textStyle] }, text),
        text.length > initialLines && (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: toggleExpansion },
            react_1.default.createElement(text_1.default, { style: [styles.readMoreTextStyle, readMoreTextStyles] }, isExpanded ? 'Read less' : 'Read more')))));
};
var styles = react_native_1.StyleSheet.create({
    textStyle: {
        color: colors_1.colors.black,
    },
    readMoreTextStyle: {
        color: colors_1.colors.gray400,
        fontSize: 12
    }
});
exports.default = ASExpandableText;
// NOTE:  ASExpandableText Example
/*
         <ASExpandableText initialLines={1}
                           text={'Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum '}/>

* */
