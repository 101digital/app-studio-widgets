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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const ASBadge = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { children, label, badgeStyles, badgeTextStyle, containerStyle } = props;
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, containerStyle] },
        react_1.default.createElement(react_native_1.View, null,
            children,
            !!label && (react_1.default.createElement(react_native_1.View, { style: [
                    styles.badgeStyles,
                    {
                        backgroundColor: colors.background,
                        borderColor: colors.accent2,
                    },
                    badgeStyles,
                ] },
                react_1.default.createElement(text_1.default, { style: [styles.badgeTextStyle, badgeTextStyle] }, label))))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    badgeStyles: {
        top: -15,
        right: -12,
        borderRadius: 30,
        height: 25,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        flex: 0,
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
