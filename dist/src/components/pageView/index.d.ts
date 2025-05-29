import { ReactNode } from "react";
import { StyleProp, ViewStyle, ScrollViewProps } from "react-native";
export type ASPageViewProps = ScrollViewProps & {
    children: ReactNode[];
    style?: StyleProp<ViewStyle>;
    paginationStyle?: StyleProp<ViewStyle>;
    paginationBottomPosition?: number;
    snapToAlignment?: "center" | "end" | "start";
    showsHorizontalScrollIndicator: boolean;
    showsVerticalScrollIndicator: boolean;
    testId?: string;
};
declare const ASPageView: (props: ASPageViewProps) => ReactNode;
export default ASPageView;
