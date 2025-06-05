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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ASTabs = ({ children, activeTabName, onTabPress, activeTabTextColor, activeTabBorderColor = "white", tabHeaderTypography, tabHeaderStyle, enableShadow = true, contentOffset = 1, tabViewStyle, style, id, testId = "ASTabs", tabTitleOffset = 8, }) => {
    var _a, _b;
    const [activeTab, setActiveTab] = (0, react_1.useState)(activeTabName || ((_b = (_a = children[0]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.name));
    const handleTabPress = (name) => {
        setActiveTab(name);
        if (onTabPress)
            onTabPress(name);
    };
    const flattenedTabHeaderStyle = react_native_1.StyleSheet.flatten(tabHeaderStyle);
    const hedaerBackgroundColor = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.backgroundColor) || "white";
    const borderRadius = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.borderRadius) || 8;
    const width = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.width) || "90%";
    const maxHeight = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.height) || 50;
    const height = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.height) || 50;
    return (react_1.default.createElement(react_native_1.View, { testID: testId, style: [
            styles.container,
            style,
            { backgroundColor: "rgba(52, 52, 52, alpha)" },
        ], id: id },
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: styles.scrollContainer, style: [
                styles.tabHeaderScroll,
                enableShadow && styles.shadow,
                {
                    backgroundColor: hedaerBackgroundColor,
                    borderRadius: borderRadius,
                    width: width,
                    maxHeight: maxHeight,
                    height: height,
                },
            ], testID: `scrollView-${testId}` }, children.map((child) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: child.props.name, style: [
                styles.tab,
                {
                    paddingHorizontal: tabTitleOffset,
                    borderBottomColor: activeTab === child.props.name
                        ? activeTabBorderColor
                        : "transparent",
                },
            ], onPress: () => handleTabPress(child.props.name), testID: `button-${testId}` },
            react_1.default.createElement(react_native_1.Text, { style: [
                    styles.tabText,
                    tabHeaderTypography,
                    activeTab === child.props.name && { color: activeTabTextColor },
                ], testID: `title-${testId}` }, child.props.title))))),
        react_1.default.createElement(react_native_1.View, { testID: `contentView-${testId}`, style: [
                styles.contentContainer,
                tabViewStyle,
                { marginTop: contentOffset },
            ] }, children.map((child) => {
            if (child.props.name === activeTab) {
                return (react_1.default.createElement(react_native_1.View, { key: child.props.name, style: [styles.content] }, child));
            }
            return null;
        }))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    scrollContainer: {
        flexDirection: "row",
        verticalAlign: "middle",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        flex: 1,
    },
    tabHeaderScroll: {
        alignSelf: "center",
        alignContent: "center",
    },
    tab: {
        // paddingHorizontal: 20,
        alignItems: "center",
        textAlign: "center",
        borderBottomWidth: 2,
    },
    tabText: {
        fontSize: 12,
        color: "#333",
    },
    contentContainer: {
        flex: 1,
        minHeight: 50,
        marginTop: 1,
    },
    content: {
        flex: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 8,
    },
});
exports.default = ASTabs;
