"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeContextValue = exports.ThemeContext = exports.themeDefaultValue = exports.defaultTheme = void 0;
const react_1 = require("react");
const colors_1 = require("../../utils/colors");
const fonts_1 = require("../../utils/fonts");
const defaultTheme = (fonts, colors) => {
    return {
        colors: colors,
        fonts: fonts,
    };
};
exports.defaultTheme = defaultTheme;
exports.themeDefaultValue = {
    colors: colors_1.colors,
    fonts: fonts_1.fonts,
};
exports.ThemeContext = (0, react_1.createContext)(exports.themeDefaultValue);
const useThemeContextValue = (initial, initI18n) => {
    var _a, _b;
    const [colors] = (0, react_1.useState)((_a = initial.colors) !== null && _a !== void 0 ? _a : {});
    const [fonts] = (0, react_1.useState)((_b = initial.fonts) !== null && _b !== void 0 ? _b : {});
    return (0, react_1.useMemo)(() => ({
        colors,
        fonts
    }), [
        colors,
        fonts
    ]);
};
exports.useThemeContextValue = useThemeContextValue;
