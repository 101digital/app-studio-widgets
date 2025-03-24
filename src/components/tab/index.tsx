import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextStyle, ViewStyle } from 'react-native';
import { HorizontalLine } from "../../assets/icon/horizontalLine.icon";

type TabProps = {
  name: string;
  title: string;
  children: ReactNode;
};

export type TabsProps = {
  children: React.ReactElement<TabProps>[];
  activeTabName: string;
  onTabPress?: (name: string) => void;
  activeTabTextColor?: string;
  activeTabBorderColor?: string;
  tabHeaderTypography? : TextStyle;
  tabHeaderStyle: ViewStyle;
  enableShadow?: boolean;
  id?: string;
  contentOffset: number;
  tabViewStyle: ViewStyle;
  style: ViewStyle;
  tabTitleOffset?: number;
};

const ASTabs: React.FC<TabsProps> = ({
  children,
  activeTabName,
  onTabPress,
  activeTabTextColor,
  activeTabBorderColor = "white",
  tabHeaderTypography,
  tabHeaderStyle,
  enableShadow = true,
  contentOffset = 1,
  tabViewStyle,
  style,
  id,
  tabTitleOffset = 20
}) => {
  const [activeTab, setActiveTab] = useState<string>(activeTabName || children[0]?.props?.name);

  const handleTabPress = (name: string) => {
    setActiveTab(name);
    if (onTabPress) onTabPress(name);
  };

  const flattenedTabHeaderStyle = StyleSheet.flatten(tabHeaderStyle);
  const hedaerBackgroundColor = flattenedTabHeaderStyle?.backgroundColor || "white";
  const borderRadius = flattenedTabHeaderStyle?.borderRadius || 8;
  const width = flattenedTabHeaderStyle?.width || "90%";
  const maxHeight = flattenedTabHeaderStyle?.height || 50;
  const height = flattenedTabHeaderStyle?.height || 50;

  return (
    <View style={[styles.container, style, {backgroundColor: "rgba(52, 52, 52, alpha)"}]} id={id}>
      {/* Scrollable Tab Headers */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={[styles.tabHeaderScroll, enableShadow && styles.shadow, {backgroundColor: hedaerBackgroundColor, borderRadius: borderRadius, width: width, maxHeight: maxHeight, height: height}]}
      >
        {children.map((child) => (
          <TouchableOpacity
            key={child.props.name}
            style={[
              styles.tab, {paddingHorizontal: tabTitleOffset}
            ]}
            onPress={() => handleTabPress(child.props.name)}
          >
            <Text
              style={[
                styles.tabText,
                tabHeaderTypography,
                activeTab === child.props.name && { color: activeTabTextColor }
              ]}
            >
              {child.props.title}
            </Text>
            {activeTab === child.props.name && <HorizontalLine color={activeTabBorderColor} width={child.props.title.length * 6 } height={2} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Content */}
      <View style={[styles.contentContainer, tabViewStyle, {marginTop: contentOffset}]}>
        {children.map((child) => {
          if (child.props.name === activeTab) {
            return (
              <View key={child.props.name} style={[styles.content]}>
                {child}
              </View>
            );
          }
          return null;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  scrollContainer: {
    flexDirection: 'row',
    verticalAlign: "middle",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  tabHeaderScroll: {
    alignSelf: "center",
    alignContent: "center",
  },
  tab: {
    // paddingHorizontal: 20,
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
    minHeight: 50,
    marginTop: 1
  },
  content: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  }
});

export default ASTabs;
