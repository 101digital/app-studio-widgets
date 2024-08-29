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
const ASTabs = ({ children, activeTabName, onTabPress, activeTabTextColor = '#007AFF', activeTabBorderColor = '#007AFF', tabHeaderTypography, tabViewBackgroundColor, tabHeaderBackgroundColor }) => {
    var _a, _b;
    const [activeTab, setActiveTab] = (0, react_1.useState)(activeTabName || ((_b = (_a = children[0]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.name));
    const handleTabPress = (name) => {
        setActiveTab(name);
        if (onTabPress)
            onTabPress(name);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: styles.scrollContainer, style: [styles.tabHeaderScroll, { backgroundColor: tabHeaderBackgroundColor }] }, children.map((child) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: child.props.name, style: [
                styles.tab,
                activeTab === child.props.name && { borderBottomColor: activeTabBorderColor },
            ], onPress: () => handleTabPress(child.props.name) },
            react_1.default.createElement(react_native_1.Text, { style: [
                    styles.tabText,
                    activeTab === child.props.name && { color: activeTabTextColor },
                    tabHeaderTypography
                ] }, child.props.title))))),
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
    },
    tabHeaderScroll: {
        maxHeight: 50,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent', // Default border color for inactive tabs
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
});
exports.default = ASTabs;
