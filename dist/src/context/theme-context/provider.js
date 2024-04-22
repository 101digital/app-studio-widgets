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
exports.useThemeFonts = exports.useThemeColors = exports.ThemeProvider = exports.createThemeData = void 0;
const lodash_1 = require("lodash");
const react_1 = __importStar(require("react"));
const context_1 = require("./context");
const colors_1 = require("../../utils/colors");
const fonts_1 = require("../../utils/fonts");
const createThemeData = (theme) => {
    const _fonts = (0, lodash_1.defaultsDeep)(theme.fonts, fonts_1.fonts);
    const _colors = (0, lodash_1.defaultsDeep)(theme.colors, colors_1.colors);
    return (0, lodash_1.defaultsDeep)(theme, (0, context_1.defaultTheme)(_fonts, _colors));
};
exports.createThemeData = createThemeData;
const ThemeProvider = (props) => {
    const { children, theme, i18n } = props;
    const themeContextData = (0, context_1.useThemeContextValue)(theme, i18n);
    return (react_1.default.createElement(context_1.ThemeContext.Provider, { value: themeContextData }, children));
};
exports.ThemeProvider = ThemeProvider;
const useThemeColors = () => (0, react_1.useContext)(context_1.ThemeContext).colors;
exports.useThemeColors = useThemeColors;
const useThemeFonts = () => (0, react_1.useContext)(context_1.ThemeContext).fonts;
exports.useThemeFonts = useThemeFonts;
