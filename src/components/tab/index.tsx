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
  tabViewBackgroundColor?: string;
  tabHeaderStyle: ViewStyle;
  enableShadow?: boolean;
  id?: string;
};

const ASTabs: React.FC<TabsProps> = ({
  children,
  activeTabName,
  onTabPress,
  activeTabTextColor,
  activeTabBorderColor = "white",
  tabHeaderTypography,
  tabViewBackgroundColor,
  tabHeaderStyle,
  enableShadow = true,
  id
}) => {
  const [activeTab, setActiveTab] = useState<string>(activeTabName || children[0]?.props?.name);

  const handleTabPress = (name: string) => {
    setActiveTab(name);
    if (onTabPress) onTabPress(name);
  };

  const flattenedTabHeaderStyle = StyleSheet.flatten(tabHeaderStyle);
  const backgroundColor = flattenedTabHeaderStyle?.backgroundColor || "white";
  const maxHeight = flattenedTabHeaderStyle?.maxHeight || 40;
  const borderRadius = flattenedTabHeaderStyle?.borderRadius || 8;
  const width = flattenedTabHeaderStyle?.width || "90%";

  return (
    <View style={styles.container} id={id}>
      {/* Scrollable Tab Headers */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={[styles.tabHeaderScroll, enableShadow && styles.shadow, {backgroundColor: backgroundColor, maxHeight: maxHeight, borderRadius: borderRadius, width: width}]}
      >
        {children.map((child) => (
          <TouchableOpacity
            key={child.props.name}
            style={[
              styles.tab,
            ]}
            onPress={() => handleTabPress(child.props.name)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === child.props.name && { color: activeTabTextColor },
                tabHeaderTypography
              ]}
            >
              {child.props.title}
            </Text>
            {activeTab === child.props.name && <HorizontalLine color={activeTabBorderColor} width={child.props.title.length * 5} height={2} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tab Content */}
      <View style={[styles.contentContainer, {backgroundColor: tabViewBackgroundColor}]}>
        {children.map((child) => {
          if (child.props.name === activeTab) {
            return (
              <View key={child.props.name} style={styles.content}>
                {child.props.children}
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

export default ASTabs;
