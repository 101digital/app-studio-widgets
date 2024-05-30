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
exports.ShowPasswordIcon = void 0;
const react_1 = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const theme_context_1 = require("../../context/theme-context");
const ShowPasswordIcon = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { size = 20, color = colors.primary } = props;
    return (react_1.default.createElement(react_native_svg_1.default, { width: size, height: size, viewBox: `0 0 ${size} ${size}`, fill: "none" },
        react_1.default.createElement(react_native_svg_1.Path, { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.27985 2.22003C3.13767 2.08755 2.94963 2.01543 2.75532 2.01885C2.56102 2.02228 2.37564 2.10099 2.23822 2.23841C2.10081 2.37582 2.0221 2.56121 2.01867 2.75551C2.01524 2.94981 2.08737 3.13785 2.21985 3.28003L16.7198 17.78C16.7885 17.8537 16.8713 17.9128 16.9633 17.9538C17.0553 17.9948 17.1546 18.0168 17.2553 18.0186C17.356 18.0204 17.4561 18.0019 17.5494 17.9642C17.6428 17.9264 17.7277 17.8703 17.7989 17.7991C17.8701 17.7278 17.9262 17.643 17.964 17.5496C18.0017 17.4562 18.0202 17.3562 18.0184 17.2555C18.0167 17.1548 17.9946 17.0555 17.9536 16.9635C17.9126 16.8715 17.8535 16.7887 17.7798 16.72L16.0348 14.975C17.5204 13.85 18.6631 12.3333 19.3348 10.595C19.4815 10.2136 19.4815 9.79142 19.3348 9.41003C18.6086 7.5234 17.3278 5.90107 15.6612 4.75681C13.9946 3.61255 12.0204 3.00005 9.99885 3.00003C8.34282 2.99729 6.71227 3.40768 5.25485 4.19403L3.27985 2.22003ZM7.75185 6.69003L8.84385 7.78203C9.31561 7.53545 9.85377 7.44589 10.38 7.52639C10.9062 7.6069 11.3929 7.85326 11.7694 8.22961C12.1459 8.60596 12.3924 9.09266 12.473 9.61883C12.5537 10.145 12.4643 10.6832 12.2178 11.155L13.3088 12.247C13.8324 11.4772 14.071 10.5488 13.9836 9.62183C13.8961 8.69491 13.488 7.82754 12.8297 7.16919C12.1713 6.51085 11.304 6.10278 10.377 6.01531C9.45012 5.92784 8.52172 6.16646 7.75185 6.69003Z", fill: color }),
        react_1.default.createElement(react_native_svg_1.Path, { d: "M10.7479 13.9295L13.2709 16.4525C12.219 16.8158 11.1137 17.0007 10.0009 16.9995C5.74288 16.9995 2.10688 14.3395 0.663883 10.5895C0.516987 10.2078 0.516987 9.78522 0.663883 9.40353C1.15235 8.13994 1.8923 6.98868 2.83888 6.01953L6.06988 9.25153C5.94778 9.89235 5.98426 10.5533 6.17614 11.1768C6.36803 11.8003 6.70949 12.3674 7.17076 12.8287C7.63204 13.2899 8.19914 13.6314 8.82262 13.8233C9.44611 14.0152 10.1071 14.0516 10.7479 13.9295Z", fill: color })));
};
exports.ShowPasswordIcon = ShowPasswordIcon;
