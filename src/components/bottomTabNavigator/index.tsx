import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  Image,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { SvgProps } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export type ASTabItemProps = {
  name: string;
  component: React.ComponentType<any>;
  title: string;
  icon: string | React.FC<SvgProps>;
  tabStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  selectedBackgroundColor?: string;
};

export type ASBottomTabNavigationProps = {
  tabs: ASTabItemProps[];
  activeColor?: string;
  inactiveColor?: string;
  tabBarStyle?: ViewStyle;
};

const ICON_SIZE = 24;

const ASBottomTabNavigation: React.FC<ASBottomTabNavigationProps> = ({
  tabs,
  activeColor = "#007AFF",
  inactiveColor = "#8e8e93",
  tabBarStyle,
}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => {
        const tab = tabs.find((t) => t.name === route.name);

        return {
          tabBarStyle,
          headerShown: false,
          tabBarButton: (props: any) => {
            const { onPress, accessibilityState } = props;
            const focused = accessibilityState?.selected ?? false;
            const tintColor = focused ? activeColor : inactiveColor;

            if (!tab) return null;

            let IconComponent = null;
            if (typeof tab.icon === "string") {
              const isURL =
                tab.icon.startsWith("http://") ||
                tab.icon.startsWith("https://");
              if (isURL) {
                IconComponent = (
                  <Image
                    source={{ uri: tab.icon }}
                    style={[{ width: ICON_SIZE, height: ICON_SIZE }]}
                  />
                );
              } else {
                IconComponent = (
                  <Icon name={tab.icon} size={ICON_SIZE} color={tintColor} />
                );
              }
            } else {
              const SVGIcon = tab.icon;
              IconComponent = (
                <SVGIcon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill={tintColor}
                />
              );
            }

            return (
              <TouchableOpacity
                style={[
                  styles.customTabButton,
                  focused && { backgroundColor: tab.selectedBackgroundColor },
                  tab.tabStyle,
                ]}
                onPress={onPress}
              >
                {IconComponent}
                <Text
                  style={[
                    styles.tabLabel,
                    { color: tintColor },
                    tab.labelStyle,
                  ]}
                >
                  {tab.title}
                </Text>
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
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 8,
    // paddingHorizontal: 12,
    // borderRadius: 16,
    // backgroundColor: "#fff",
    margin: 4,
    flex: 1,
  },
  activeTab: {
    backgroundColor: "#e6f0ff",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default ASBottomTabNavigation;
