"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAlpha = exports.rgbToHex = exports.colors = void 0;
exports.colors = {
    "primary": "#E4B700",
    "onPrimary": "#FFFFFF",
    "primaryFixed": "#000000",
    "onPrimaryFixedVariant": "#e7e6e6",
    "secondary": "#858585",
    "onSecondary": "#CCCCCC",
    "secondaryFixed": "#FCFCFC",
    "onSecondaryFixedVariant": "#00B0FF",
    "tertiary": "#b6b5b5",
    "onTertiary": "#999999",
    "tertiaryFixed": "#010101",
    "onTertiaryFixedVariant": "#2c2c2c",
    "error": "#FF0000",
    "onError": "#D32F2F",
    "errorContainer": "#f81010",
    "outline": "#4F4F4F",
    "background": "#f3f3f3",
    "surface": "#343434",
    "onSurface": "#666666",
    "surfaceVariant": "#FAF9F5",
    "accent1": "transparent",
    "accent2": "#00BA88",
    "accent3": "#0579cc",
    "accent4": "#696969",
    "accent5": "#919090",
};
const rgbToHex = (color) => {
    const a = color.replace(/[^\d,]/g, '').split(',');
    return '#' + ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1);
};
exports.rgbToHex = rgbToHex;
const addAlpha = (color, opacity) => {
    var _a;
    if (!color.startsWith('#')) {
        color = (0, exports.rgbToHex)(color);
    }
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + ((_a = _opacity.toString(16)) === null || _a === void 0 ? void 0 : _a.toUpperCase());
};
exports.addAlpha = addAlpha;
