"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ASStack = (props) => {
    const { children, style, testId = 'ASStack' } = props;
    return react_1.default.createElement(react_native_1.View, { testID: testId, style: [style, styles.container] }, children);
};
const styles = react_native_1.StyleSheet.create({
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
