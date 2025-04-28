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
// @ts-nocheck
const button_1 = __importDefault(require("../button"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_modal_1 = __importDefault(require("react-native-modal"));
const closeIcon_icon_1 = require("../../assets/icon/closeIcon.icon");
const row_1 = __importDefault(require("../row"));
const text_1 = __importDefault(require("../text"));
const deviceHeight = react_native_1.Platform.OS === "ios"
    ? react_native_1.Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");
const ASBottomSheet = (props) => {
    const { children, backdropOpacity, height, onClose, label, labelTextStyles } = props, restProps = __rest(props, ["children", "backdropOpacity", "height", "onClose", "label", "labelTextStyles"]);
    return (react_1.default.createElement(react_native_modal_1.default, Object.assign({ deviceHeight: deviceHeight, backdropTransitionInTiming: 50, backdropTransitionOutTiming: 50, hideModalContentWhileAnimating: true, useNativeDriverForBackdrop: true, useNativeDriver: true, backdropOpacity: backdropOpacity, statusBarTranslucent: true, style: styles.modalStyle, onModalHide: onClose }, restProps),
        react_1.default.createElement(react_native_1.View, { style: [styles.containerStyle, { height: height }] },
            react_1.default.createElement(row_1.default, { style: styles.headerRow },
                label && (react_1.default.createElement(text_1.default, { style: [styles.titleStyle, labelTextStyles] }, label)),
                react_1.default.createElement(button_1.default, { onPress: () => onClose(), style: styles.closeButtonStyle },
                    react_1.default.createElement(closeIcon_icon_1.CloseIcon, null))),
            react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.contentContainerStyle }, children))));
};
ASBottomSheet.defaultProps = {
    isVisible: false,
    backdropOpacity: 0.5,
    animationIn: "slideInUp",
    animationOut: "slideOutDown",
};
const styles = react_native_1.StyleSheet.create({
    modalStyle: {
        justifyContent: "flex-end",
        margin: 0,
    },
    containerStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
    },
    headerRow: {
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainerStyle: {
        justifyContent: "center",
        top: 24,
        paddingHorizontal: 16,
    },
    closeButtonStyle: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    titleStyle: {
        flex: 1,
        textAlign: "center",
        top: 12,
    },
});
exports.default = ASBottomSheet;
