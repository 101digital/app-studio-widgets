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
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const loadingIndicator_1 = __importDefault(require("../loadingIndicator"));
const ASListView = (props) => {
    const { data, renderItem, loading, testId = 'ASListView' } = props, restProps = __rest(props, ["data", "renderItem", "loading", "testId"]);
    const keyExtractor = (item, index) => {
        return `${(item === null || item === void 0 ? void 0 : item.id) || (item === null || item === void 0 ? void 0 : item.label) || ''} - ${index}`;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(loadingIndicator_1.default, { style: styles.loadingIndicator, loading: loading, testID: `loadingView-${testId}` }),
        react_1.default.createElement(react_native_gesture_handler_1.FlatList, Object.assign({ testID: `list-${testId}`, data: data, renderItem: renderItem, keyExtractor: keyExtractor }, restProps))));
};
exports.default = ASListView;
const styles = react_native_1.StyleSheet.create({
    loadingIndicator: {
        marginVertical: 8
    }
});
// Note: ASListView example
/*
             <ASListView data={[{id: '1', title: 'Item 1'},
                        {id: '2', title: 'Item 2'},
                        {id: '3', title: 'Item 3'},]}
                numColumns={3}
                renderItem={({item}: { item: any }) => {
                    return (
                        <ASColumn  style={{alignItems:'center'}}>
                            <ASText style={{flex:1, backgroundColor:'red',}}>{item?.title}</ASText>
                        </ASColumn>
                    )
                }}/>
* */
