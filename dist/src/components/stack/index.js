"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ASStack = function (props) {
    var children = props.children, style = props.style;
    return react_1.default.createElement(react_native_1.View, { style: [style, styles.container] }, children);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        position: 'relative',
    },
});
exports.default = ASStack;
// NOTE:  ASStack Example
/*
            <ASStack>
                <ASImage style={{top:5}}  source={'https:i.imgur.com/oLgjoWx.png'}   roundImageSize={'30%'}   />
                 <ASText style={{bottom:20}}>Text on top</ASText>
            </ASStack>
* */
