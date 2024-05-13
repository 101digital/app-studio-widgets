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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ASLoadingScreen = (props) => {
    const { visible, size = 'large', backgroundColor = "rgba(0,0,0,0.5)", timeout = 60000 } = props;
    const [isShow, setIsShow] = (0, react_1.useState)(true);
    // This timeout to make sure loading will turn off after some time
    // To prevent indefinite loading
    (0, react_1.useEffect)(() => {
        const timeoutLoading = setTimeout(() => {
            setIsShow(false);
        }, timeout);
        return () => {
            !!timeoutLoading && clearTimeout(timeoutLoading);
        };
    }, []);
    if (!isShow)
        return null;
    return (react_1.default.createElement(react_native_1.Modal, { style: styles.modalContainer, animationType: "fade", transparent: true, visible: visible, onRequestClose: () => {
        } },
        react_1.default.createElement(react_native_1.View, { style: [styles.container, { backgroundColor }] },
            react_1.default.createElement(react_native_1.ActivityIndicator, { animating: true, size: size, hidesWhenStopped: true, style: styles.loadingIndicator }))));
};
const styles = react_native_1.StyleSheet.create({
    modalContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingIndicator: {},
});
exports.default = ASLoadingScreen;
