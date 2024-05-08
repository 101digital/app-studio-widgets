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
const button_1 = __importDefault(require("../button"));
const text_1 = __importDefault(require("../text"));
const ASPopUp = (props) => {
    const { children, visible, isShowCloseIcon = true, onClose } = props, restProps = __rest(props, ["children", "visible", "isShowCloseIcon", "onClose"]);
    return (react_1.default.createElement(react_native_1.Modal, Object.assign({ style: styles.modalContainer, animationType: "fade", transparent: true, visible: visible, onRequestClose: () => {
        } }, restProps),
        react_1.default.createElement(react_native_1.View, { style: styles.container }, children),
        isShowCloseIcon &&
            react_1.default.createElement(button_1.default, { style: styles.closeButton, onPress: onClose },
                react_1.default.createElement(text_1.default, { style: styles.closeIconText }, "X"))));
};
const styles = react_native_1.StyleSheet.create({
    modalContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'absolute',
        top: 40,
        right: 10,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIconText: {
        fontSize: 18
    }
});
exports.default = ASPopUp;
