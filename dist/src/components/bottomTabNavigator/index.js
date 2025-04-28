"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const react_native_1 = require("react-native");
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
const ICON_SIZE = 24;
const ASBottomTabNavigation = ({ tabs, activeColor = "#007AFF", inactiveColor = "#8e8e93", tabBarStyle, }) => {
    return (react_1.default.createElement(Tab.Navigator, { screenOptions: ({ route }) => {
            const tab = tabs.find((t) => t.name === route.name);
            return {
                tabBarStyle,
                headerShown: false,
                tabBarButton: (props) => {
                    var _a;
                    const { onPress, accessibilityState } = props;
                    const focused = (_a = accessibilityState === null || accessibilityState === void 0 ? void 0 : accessibilityState.selected) !== null && _a !== void 0 ? _a : false;
                    const tintColor = focused ? activeColor : inactiveColor;
                    if (!tab)
                        return null;
                    let IconComponent = null;
                    if (typeof tab.icon === "string") {
                        const isURL = tab.icon.startsWith("http://") ||
                            tab.icon.startsWith("https://");
                        if (isURL) {
                            IconComponent = (react_1.default.createElement(react_native_1.Image, { source: { uri: tab.icon }, style: [{ width: ICON_SIZE, height: ICON_SIZE }] }));
                        }
                        else {
                            IconComponent = (react_1.default.createElement(FontAwesome_1.default, { name: tab.icon, size: ICON_SIZE, color: tintColor }));
                        }
                    }
                    else {
                        const SVGIcon = tab.icon;
                        IconComponent = (react_1.default.createElement(SVGIcon, { width: ICON_SIZE, height: ICON_SIZE, fill: tintColor }));
                    }
                    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [
                            styles.customTabButton,
                            focused && { backgroundColor: tab.selectedBackgroundColor },
                            tab.tabStyle,
                        ], onPress: onPress },
                        IconComponent,
                        react_1.default.createElement(react_native_1.Text, { style: [
                                styles.tabLabel,
                                { color: tintColor },
                                tab.labelStyle,
                            ] }, tab.title)));
                },
            };
        } }, tabs.map((tab) => (react_1.default.createElement(Tab.Screen, { key: tab.name, name: tab.name, component: tab.component })))));
};
const styles = react_native_1.StyleSheet.create({
    customTabButton: {
        alignItems: "center",
        justifyContent: "center",
        // paddingVertical: 8,
        // paddingHorizontal: 12,
        // borderRadius: 16,
        // backgroundColor: "#fff",
        margin: 4,
        flex: 1
    },
    activeTab: {
        backgroundColor: "#e6f0ff",
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 4,
    },
});
exports.default = ASBottomTabNavigation;
