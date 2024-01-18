"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ASWrap = function (props) {
    var children = props.children, _a = props.direction, direction = _a === void 0 ? 'row' : _a, style = props.style, itemMargin = props.itemMargin;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, { flexDirection: direction }, style] }, !!itemMargin ? react_1.default.Children.map(children, function (child, index) { return (react_1.default.createElement(react_native_1.View, { key: index, style: [styles.item, { margin: itemMargin || 5 }] }, child)); }) : children));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        margin: 5,
    },
});
exports.default = ASWrap;
// NOTE:  ASWrapper Example
/*
                <ASWrapper direction="column" style={{ backgroundColor: 'blue', maxHeight:50 }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                </ASWrapper>

                <ASWrapper direction="row" style={{ backgroundColor: 'darkgreen' }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                </ASWrapper>
* */
