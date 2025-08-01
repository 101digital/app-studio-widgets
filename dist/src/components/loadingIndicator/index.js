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
const commonUtils_1 = require("../../utils/commonUtils");
const hook_1 = require("../../utils/hook");
const ASLoadingIndicator = (props) => {
    const { loading, size = 'small', timeout = 60000, testId = 'ASLoadingIndicator' } = props, restProps = __rest(props, ["loading", "size", "timeout", "testId"]);
    const isLoading = (0, commonUtils_1.getLoadingStatus)(loading); // Handle multiple loading. If any of the workflow loading is true => Show loading
    const isTimeout = (0, hook_1.useIsTimeoutLoading)(timeout, isLoading); // If timeout stop loading to prevent indefinite loading
    if (isTimeout || !isLoading)
        return null;
    return (react_1.default.createElement(react_native_1.ActivityIndicator, Object.assign({ animating: isLoading, size: size, testID: testId, hidesWhenStopped: true, style: styles.loadingIndicator }, restProps)));
};
const styles = react_native_1.StyleSheet.create({
    loadingIndicator: {},
});
exports.default = ASLoadingIndicator;
