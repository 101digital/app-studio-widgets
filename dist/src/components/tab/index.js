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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const horizontalLine_icon_1 = require("../../assets/icon/horizontalLine.icon");
const ASTabs = ({ children, activeTabName, onTabPress, activeTabTextColor, activeTabBorderColor = "white", tabHeaderTypography, tabViewBackgroundColor, tabHeaderStyle, enableShadow = true, }) => {
    var _a, _b;
    const [activeTab, setActiveTab] = (0, react_1.useState)(activeTabName || ((_b = (_a = children[0]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.name));
    const handleTabPress = (name) => {
        setActiveTab(name);
        if (onTabPress)
            onTabPress(name);
    };
    const flattenedTabHeaderStyle = react_native_1.StyleSheet.flatten(tabHeaderStyle);
    const backgroundColor = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.backgroundColor) || "white";
    const maxHeight = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.maxHeight) || 40;
    const borderRadius = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.borderRadius) || 8;
    const width = (flattenedTabHeaderStyle === null || flattenedTabHeaderStyle === void 0 ? void 0 : flattenedTabHeaderStyle.width) || "90%";
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: styles.scrollContainer, style: [styles.tabHeaderScroll, enableShadow && styles.shadow, { backgroundColor: backgroundColor, maxHeight: maxHeight, borderRadius: borderRadius, width: width }] }, children.map((child) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: child.props.name, style: [
                styles.tab,
            ], onPress: () => handleTabPress(child.props.name) },
            react_1.default.createElement(react_native_1.Text, { style: [
                    styles.tabText,
                    activeTab === child.props.name && { color: activeTabTextColor },
                    tabHeaderTypography
                ] }, child.props.title),
            activeTab === child.props.name && react_1.default.createElement(horizontalLine_icon_1.HorizontalLine, { color: activeTabBorderColor, width: child.props.title.length * 5, height: 2 }))))),
        react_1.default.createElement(react_native_1.View, { style: [styles.contentContainer, { backgroundColor: tabViewBackgroundColor }] }, children.map((child) => {
            if (child.props.name === activeTab) {
                return (react_1.default.createElement(react_native_1.View, { key: child.props.name, style: styles.content }, child.props.children));
            }
            return null;
        }))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexDirection: 'row',
        verticalAlign: "middle",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    tabHeaderScroll: {
        alignSelf: "center",
        verticalAlign: "middle",
        alignContent: "center",
    },
    tab: {
        paddingHorizontal: 20,
        alignItems: 'center',
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: 'transparent', // Default border color for inactive tabs
    },
    tabText: {
        fontSize: 12,
        color: '#333',
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 8,
    }
});
exports.default = ASTabs;
