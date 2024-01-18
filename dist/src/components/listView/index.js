"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ASListView = function (props) {
    var data = props.data, renderItem = props.renderItem;
    var keyExtractor = function (item, index) {
        return "".concat(item.id || item.name || item.label || '', " - ").concat(index);
    };
    return (react_1.default.createElement(react_native_1.FlatList, { data: data, renderItem: renderItem, keyExtractor: keyExtractor }));
};
var styles = react_native_1.StyleSheet.create({
    container: {}
});
exports.default = ASListView;
