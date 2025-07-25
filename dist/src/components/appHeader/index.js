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
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const text_1 = __importDefault(require("../text"));
const ASAppHeader = (_a) => {
    var _b, _c, _d, _e;
    var { styles: customStyles = {}, backButton, headerTitle, actions = [], isPreview } = _a, restProps = __rest(_a, ["styles", "backButton", "headerTitle", "actions", "isPreview"]);
    const renderIcon = (icon, size = 24, color = "#000") => {
        if (typeof icon === "string") {
            if (icon.startsWith("http")) {
                return (react_1.default.createElement(react_native_1.Image, { source: { uri: icon }, style: {
                        width: size,
                        height: size,
                        tintColor: color,
                    } }));
            }
            else {
                return (react_1.default.createElement(text_1.default, { style: {
                        fontSize: size,
                        fontFamily: "Material Icon",
                        color: color,
                    }, accessibilityLabel: "back_button_icon" }, icon));
            }
        }
        return icon;
    };
    const renderActions = (alignment) => {
        const filteredActions = actions.filter((action) => action.alignment === alignment);
        return filteredActions.map((action, idx) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${alignment}-${idx}`, onPress: action.onPress, style: [
                stylesObj.actionButton,
                idx === filteredActions.length - 1 ? { marginRight: 0 } : null,
            ] }, renderIcon(action.icon, action.iconSize, action.color))));
    };
    const renderBackButton = () => {
        if (!(backButton === null || backButton === void 0 ? void 0 : backButton.isEnabled))
            return null;
        const btn = (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: backButton.onPress, style: stylesObj.backButton }, renderIcon(backButton.icon, backButton.size, backButton.color)));
        if (backButton.isLargerBackButton) {
            return react_1.default.createElement(react_native_1.View, { style: stylesObj.fullRowBack }, btn);
        }
        return btn;
    };
    const getTitleContainerStyle = () => {
        const alignment = headerTitle.alignment || "center";
        if (alignment === "center") {
            return {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                zIndex: -1,
                pointerEvents: "none",
                paddingHorizontal: 8,
            };
        }
        return {
            flex: 1,
            justifyContent: "center",
            alignItems: alignment === "left" ? "flex-start" : "flex-end",
            paddingHorizontal: 8,
        };
    };
    const getTitleTextAlign = () => {
        switch (headerTitle.alignment) {
            case "left":
                return "left";
            case "right":
                return "right";
            case "center":
            default:
                return "center";
        }
    };
    const insets = isPreview ? null : (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    return (react_1.default.createElement(react_native_1.View, Object.assign({}, restProps, { style: [
            customStyles,
            {
                paddingTop: ((_b = Number(customStyles === null || customStyles === void 0 ? void 0 : customStyles.paddingTop)) !== null && _b !== void 0 ? _b : 0) + ((_c = insets === null || insets === void 0 ? void 0 : insets.top) !== null && _c !== void 0 ? _c : 0), // Handle safe area view
                height: ((_d = Number(customStyles === null || customStyles === void 0 ? void 0 : customStyles.height)) !== null && _d !== void 0 ? _d : 0) + ((_e = insets === null || insets === void 0 ? void 0 : insets.top) !== null && _e !== void 0 ? _e : 0), // Handle safe area view
            },
        ] }),
        (backButton === null || backButton === void 0 ? void 0 : backButton.isEnabled) &&
            backButton.isLargerBackButton &&
            renderBackButton(),
        " ",
        react_1.default.createElement(react_native_1.View, { style: stylesObj.headerContainer },
            react_1.default.createElement(react_native_1.View, { style: stylesObj.leftContainer },
                !(backButton === null || backButton === void 0 ? void 0 : backButton.isLargerBackButton) && renderBackButton(),
                renderActions("left")),
            react_1.default.createElement(react_native_1.View, { style: getTitleContainerStyle() },
                react_1.default.createElement(react_native_1.Text, { style: [
                        stylesObj.titleText,
                        headerTitle.textStyles,
                        { textAlign: getTitleTextAlign() },
                    ], numberOfLines: 1 }, headerTitle.title)),
            react_1.default.createElement(react_native_1.View, { style: stylesObj.rightContainer }, renderActions("right")))));
};
const stylesObj = react_native_1.StyleSheet.create({
    headerContainer: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    backButton: {
        marginRight: 8,
    },
    fullRowBack: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    actionButton: {
        marginHorizontal: 6,
    },
});
exports.default = ASAppHeader;
