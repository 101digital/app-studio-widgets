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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const loadingIndicator_1 = __importDefault(require("../../components/loadingIndicator"));
const E6TransactionHistoryListView = (props) => {
    const { data, renderItem, loading } = props, restProps = __rest(props, ["data", "renderItem", "loading"]);
    const [transactionList, setTransactionList] = (0, react_1.useState)([]);
    const keyExtractor = (item, index) => {
        return `${(item === null || item === void 0 ? void 0 : item.id) || (item === null || item === void 0 ? void 0 : item.label) || ''} - ${index}`;
    };
    (0, react_1.useEffect)(() => {
        const transactionData = [];
        if (data) {
            for (const transactionItem of data) {
                if (transactionItem === null || transactionItem === void 0 ? void 0 : transactionItem.transactionEntries) {
                    transactionData.push(...transactionItem === null || transactionItem === void 0 ? void 0 : transactionItem.transactionEntries);
                }
            }
            setTransactionList(transactionData);
        }
        else {
            setTransactionList(data);
        }
        return () => {
        };
    }, [data]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(loadingIndicator_1.default, { style: styles.loadingIndicator, loading: loading }),
        react_1.default.createElement(react_native_gesture_handler_1.FlatList, Object.assign({ data: transactionList, renderItem: renderItem, keyExtractor: keyExtractor }, restProps))));
};
exports.default = E6TransactionHistoryListView;
const styles = react_native_1.StyleSheet.create({
    loadingIndicator: {
        marginVertical: 8
    }
});
// Note: E6TransactionHistoryListView example
/*
             <E6TransactionHistoryListView data={[{id: '1', title: 'Item 1'},
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
