"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const commonUtils_1 = require("../../utils/commonUtils");
const hook_1 = require("../../utils/hook");
const ASLoadingScreen = (props) => {
    const { loading, size = "large", backgroundColor = "rgba(0,0,0,0.5)", timeout = 40000, testId = "ASLoadingScreen", } = props;
    // Handle multiple loading. If any of the workflow loading is true => Show loading
    const isLoading = (0, commonUtils_1.getLoadingStatus)(loading);
    // If timeout stop loading screen to prevent indefinite loading
    const isTimeout = (0, hook_1.useIsTimeoutLoading)(timeout, isLoading);
    if (isTimeout)
        return null;
    return (react_1.default.createElement(react_native_1.Modal, { style: styles.modalContainer, animationType: "fade", transparent: true, visible: isLoading, onRequestClose: () => { }, testID: `modalView-${testId}` },
        react_1.default.createElement(react_native_1.View, { style: [styles.container, { backgroundColor }] },
            react_1.default.createElement(react_native_1.ActivityIndicator, { testID: `indicatorView-${testId}`, animating: true, size: size, hidesWhenStopped: true, style: styles.loadingIndicator }))));
};
const styles = react_native_1.StyleSheet.create({
    modalContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingIndicator: {},
});
exports.default = ASLoadingScreen;
