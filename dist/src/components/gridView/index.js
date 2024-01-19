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
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ASListView from "../listView";
var ASGridView = function (props) {
    var data = props.data, renderItem = props.renderItem, _a = props.numColumns, numColumns = _a === void 0 ? 3 : _a, restProps = __rest(props, ["data", "renderItem", "numColumns"]);
    var renderGridItem = function (_a) {
        var item = _a.item;
        return (React.createElement(View, { style: styles.gridItem }, renderItem === null || renderItem === void 0 ? void 0 : renderItem(item)));
    };
    var keyExtractor = function (item, index) {
        return "".concat(item.id || item.name || item.label || '', " - ").concat(index);
    };
    return (React.createElement(ASListView, __assign({ data: data, renderItem: renderGridItem, keyExtractor: keyExtractor, numColumns: numColumns }, restProps)));
};
var styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        // margin: 8,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 8,
        backgroundColor: 'red'
    },
});
export default ASGridView;
