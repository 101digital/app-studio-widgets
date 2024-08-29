import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextStyle } from 'react-native';

type TabProps = {
  name: string;
  title: string;
  children: ReactNode;
};

type TabsProps = {
  children: React.ReactElement<TabProps>[];
  activeTabName: string;
  onTabPress?: (name: string) => void;
  activeTabTextColor?: string;
  activeTabBorderColor?: string;
  tabHeaderTypography? : TextStyle;
  tabViewBackgroundColor?: string;
  tabHeaderBackgroundColor?: string;
};

const ASTabs: React.FC<TabsProps> = ({
  children,
  activeTabName,
  onTabPress,
  activeTabTextColor = '#007AFF',
  activeTabBorderColor = '#007AFF',
  tabHeaderTypography,
  tabViewBackgroundColor,
  tabHeaderBackgroundColor
}) => {
  const [activeTab, setActiveTab] = useState<string>(activeTabName || children[0]?.props?.name);

  const handleTabPress = (name: string) => {
    setActiveTab(name);
    if (onTabPress) onTabPress(name);
  };

  return (
    <View style={styles.container}>
      {/* Scrollable Tab Headers */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={[styles.tabHeaderScroll, {backgroundColor: tabHeaderBackgroundColor}]}
      >
        {children.map((child) => (
          <TouchableOpacity
            key={child.props.name}
            style={[
              styles.tab,
              activeTab === child.props.name && { borderBottomColor: activeTabBorderColor },
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

export default ASTabs;
