import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { SvgProps } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import {ThemeContext} from "../../context/theme-context";

const Tab = createBottomTabNavigator();

export type ASTabItemProps = {
  name: string;
  component: React.ComponentType<any>;
  title: string;
  icon: string | React.FC<SvgProps>;
  tabStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  selectedBackgroundColor?: string;
  badgeCount?: number;
};

export type ASBottomTabNavigationProps = {
  tabs: ASTabItemProps[];
  activeColor?: string;
  inactiveColor?: string;
  tabBarStyle?: ViewStyle;
  activeTabBackgroundColor?: string;
  activeIconColor?: string;
};

const ICON_SIZE = 24;
const DEFAULT_ICON = "question-circle";

const ASBottomTabNavigation: React.FC<ASBottomTabNavigationProps> = ({
  tabs,
  activeColor = "#007AFF",
  inactiveColor = "#8e8e93",
  tabBarStyle,
  activeTabBackgroundColor = "#e6f0ff",
  activeIconColor = "#007AFF",
}) => {
  const { colors } = useContext(ThemeContext);

  const resolveColor = (color: string) => {
    const colorKey = color.split(".")[1] as keyof typeof colors;
    if (color.startsWith("colors.") && colorKey in colors) {
      return colors[colorKey]; // Resolve color from ThemeContext
    }
    return color; // Return the original color if not a reference
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const tab = tabs.find((t) => t.name === route.name);

        return {
          headerShown: false,
          tabBarStyle,
          tabBarButton: (props) => {
            const { onPress, accessibilityState } = props;
            const focused = accessibilityState?.selected ?? false;

            const tintColor = resolveColor(
              focused ? activeIconColor : inactiveColor
            );

            const labelColor = resolveColor(
              focused ? activeIconColor : inactiveColor
            );
            if (!tab) return null;

            const renderIcon = () => {
              if (typeof tab.icon === "string") {
                const isURL =
                  tab.icon.startsWith("http://") ||
                  tab.icon.startsWith("https://");
                return isURL ? (
                  <Image
                    source={{ uri: tab.icon }}
                    style={{ width: ICON_SIZE, height: ICON_SIZE, tintColor }}
                  />
                ) : (
                  <Icon
                    name={tab.icon || DEFAULT_ICON}
                    size={ICON_SIZE}
                    color={tintColor} // Ensure correct color is applied
                  />
                );
              } else {
                const SVGIcon = tab.icon;
                return (
                  <SVGIcon
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    fill={tintColor} // Ensure correct color is applied
                  />
                );
              }
            };

            const renderLabel = () => {
             
              return (
                <Text
                  style={[
                    { color: labelColor }, // Dynamically resolved color
                    styles.tabLabel,
                    tab.labelStyle,
                  ]}
                >
                  {tab.title}
                </Text>
              );
            };

            return (
              <TouchableOpacity
                onPress={onPress}
                style={[
                  styles.customTabButton,
                  focused && {
                    backgroundColor:
                      tab.selectedBackgroundColor || activeTabBackgroundColor,
                  },
                  tab.tabStyle,
                ]}
              >
                {renderIcon()}
                {tab.badgeCount ? (
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badge}>{tab.badgeCount}</Text>
                  </View>
                ) : null}
                {renderLabel()}
              </TouchableOpacity>
            );
          },
        };
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customTabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    position: "relative",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  }, 
  badgeContainer: {
    position: "absolute",
    top: -4,
    right: -10,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
    zIndex: 10,
  },
  badge: {
    color: "white",
    fontSize: 10,
  },
});

export default ASBottomTabNavigation;