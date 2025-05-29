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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const text_1 = __importDefault(require("../text"));
const theme_context_1 = require("../../context/theme-context");
const image_1 = __importDefault(require("../image"));
const button_1 = __importDefault(require("../button"));
const VERTICAL_POSITION = 30;
const HORIZONTAL_POSITION = 20;
const ASFloatingActionButton = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { style, label, textStyle, icon, onPress, floatingPosition = "bottom-right", testId = "ASFloatingActionButton" } = props, restProps = __rest(props, ["style", "label", "textStyle", "icon", "onPress", "floatingPosition", "testId"]);
    const [floatingButtonPosition, setFloatingButtonPosition] = (0, react_1.useState)(null);
    const [widgetSize, setWidgetSize] = (0, react_1.useState)({ width: 0, height: 0 });
    (0, react_1.useEffect)(() => {
        calculatePosition();
        return () => { };
    }, [floatingPosition, widgetSize]);
    const calculatePosition = () => {
        const [verticalPosition, horizontalPosition] = floatingPosition === null || floatingPosition === void 0 ? void 0 : floatingPosition.split("-");
        let vPosition = {};
        let hPosition = {};
        switch (verticalPosition) {
            case "top":
            case "bottom":
                vPosition = { [verticalPosition]: VERTICAL_POSITION };
                break;
            case "center":
                vPosition = { top: "50%", transform: [{ translateY: -50 }] };
                break;
        }
        switch (horizontalPosition) {
            case "left":
            case "right":
                hPosition = { [horizontalPosition]: HORIZONTAL_POSITION };
                break;
            case "center":
                hPosition = {
                    left: "50%",
                    transform: [
                        { translateX: -((widgetSize === null || widgetSize === void 0 ? void 0 : widgetSize.width) / 2) },
                        ...(vPosition.transform ? vPosition.transform : []),
                    ],
                };
                break;
        }
        setFloatingButtonPosition(Object.assign(Object.assign({}, vPosition), hPosition));
    };
    if (!floatingButtonPosition || (!icon && !label))
        return null;
    return (react_1.default.createElement(button_1.default, Object.assign({ testId: `button-${testId}`, onLayout: (event) => setWidgetSize({
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height,
        }), style: [
            styles.container,
            Object.assign({}, floatingButtonPosition),
            Object.assign({ backgroundColor: (colors === null || colors === void 0 ? void 0 : colors.primary) || "#fff" }, (label && { flexDirection: "row", aspectRatio: undefined })),
            style,
        ], onPress: onPress }, restProps),
        icon && typeof icon === "string" ? (react_1.default.createElement(image_1.default, { testId: `image-${testId}`, style: { width: 18, height: 18, marginRight: !!label ? 8 : 0 }, source: icon })) : (icon),
        !!label && (react_1.default.createElement(text_1.default, { testId: `label-${testId}`, style: [styles.textStyle, textStyle] }, label))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        aspectRatio: 1,
        alignSelf: "flex-start",
        position: "absolute",
    },
    textStyle: {
        fontWeight: "600",
    },
});
exports.default = (0, react_1.memo)(ASFloatingActionButton);
