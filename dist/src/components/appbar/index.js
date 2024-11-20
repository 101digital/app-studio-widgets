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
exports.DefaultBackButton = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const theme_context_1 = require("../../context/theme-context");
const text_1 = __importDefault(require("../text"));
const icon_1 = require("../../assets/icon");
const DefaultBackButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { backIconColor, backIconSize, onPressBackButton } = props || {};
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.8, style: styles.backIcon, onPress: onPressBackButton },
        react_1.default.createElement(icon_1.ArrowBackIcon, { size: backIconSize || 24, color: backIconColor || colors.primary })));
};
exports.DefaultBackButton = DefaultBackButton;
const ASAppBar = (props) => {
    const { backIconColor, backIconSize, onPressBackButton, title, traillingIcon, isPreviewScreen } = props || {};
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, { paddingTop: isPreviewScreen ? 22 : 0 }] },
        react_1.default.createElement(exports.DefaultBackButton, { backIconColor: backIconColor, backIconSize: backIconSize, onPressBackButton: onPressBackButton }),
        react_1.default.createElement(text_1.default, { style: styles.titleTextStyle }, title),
        traillingIcon ? traillingIcon : react_1.default.createElement(react_native_1.View, { style: { flex: 1 } })));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(216, 216, 216,1)',
        paddingBottom: 22,
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    backIcon: {
        flex: 1,
    },
    titleTextStyle: {
        textAlign: 'center',
        flex: 1,
        fontWeight: '500',
        fontSize: 18
    }
});
exports.default = ASAppBar;
