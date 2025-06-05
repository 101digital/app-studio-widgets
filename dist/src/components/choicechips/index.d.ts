import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
export type ChipProps = {
    id?: string;
    label: string;
    value: string;
    icon?: React.ReactNode;
    [key: string]: string | React.ReactNode;
};
export type ASChoiceChipsProps = {
    options: ChipProps[];
    name: string;
    isSingleChoice?: boolean;
    returnedKey?: string;
    contentLayout?: "center" | "space-around" | "space-between" | "space-evenly" | "flex-start" | "flex-end";
    choiceChipTextStyles?: StyleProp<TextStyle>;
    selectedChipTextColor?: string;
    selectedChipBackgroundColor?: string;
    selectedChipBorderColor?: string;
    choiceChipStyles?: StyleProp<ViewStyle>;
    isOverlayEnabled?: boolean;
    onChange?: (value: any) => void;
    id?: string;
    testId?: string;
};
declare const ASChoiceChips: React.FC<ASChoiceChipsProps>;
export default ASChoiceChips;
