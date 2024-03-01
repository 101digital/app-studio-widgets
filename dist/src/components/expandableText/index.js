"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const text_1 = __importDefault(require("../text"));
const ASExpandableText = (props) => {
    const { initialLines = 1, text, textStyle, readMoreTextStyles } = props;
    const [isExpanded, setIsExpanded] = react_1.default.useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(text_1.default, { numberOfLines: isExpanded ? undefined : initialLines, style: [styles.textStyle, textStyle] }, text),
        text.length > initialLines && (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: toggleExpansion },
            react_1.default.createElement(text_1.default, { style: [styles.readMoreTextStyle, readMoreTextStyles] }, isExpanded ? 'Read less' : 'Read more')))));
};
const styles = react_native_1.StyleSheet.create({
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
