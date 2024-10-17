import React, { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
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
    tabHeaderTypography?: TextStyle;
    tabViewBackgroundColor?: string;
    tabHeaderStyle: ViewStyle;
    enableShadow?: boolean;
    id?: string;
};
declare const ASTabs: React.FC<TabsProps>;
export default ASTabs;
