"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const text_1 = __importDefault(require("../text"));
const ASBadge = (props) => {
    const { children, label, badgeStyles, badgeTextStyle, containerStyle, id } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, containerStyle], id: id },
        react_1.default.createElement(react_native_1.View, null,
            children,
            !!label && (react_1.default.createElement(react_native_1.View, { style: [styles.badgeStyles, badgeStyles] },
                react_1.default.createElement(text_1.default, { style: [styles.badgeTextStyle, badgeTextStyle] }, label))))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    badgeStyles: {
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        minWidth: 30,
        minHeight: 30,
        top: 0,
        right: 0,
    },
    badgeTextStyle: {
        fontWeight: "bold",
        fontSize: 12,
    },
});
exports.default = ASBadge;
// Note: ASBadge example
/*
                <ASBadge badgeNumber={3}>
                    <ASRow>
                        <ASText>Badge</ASText>
                        <Icon name="user-circle-o" size={30} color="theme.colors.primary"/>
                    </ASRow>
                </ASBadge>
* */
