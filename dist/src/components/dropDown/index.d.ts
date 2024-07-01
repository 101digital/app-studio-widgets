import React from "react";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";
import { DropdownProps } from "react-native-element-dropdown/src/components/Dropdown/model";
import { FieldHookConfig } from "formik";
export type DropDownOptionsProps = {
    [key: string]: any;
};
export type ASDropDownProps = Omit<DropdownProps<any>, "labelField" | "valueField" | "onChange" | "data"> & {
    options: DropDownOptionsProps[] | undefined;
    name: string | FieldHookConfig<any>;
    labelField: string;
    valueField: string;
    onSelect?: (item: DropDownOptionsProps) => void;
    renderLeftIcon?: () => React.ReactNode;
    onChangeItem?: (item: DropDownOptionsProps) => void;
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
    iconStyles?: StyleProp<ImageStyle>;
};
declare const ASDropDown: React.FC<ASDropDownProps>;
export default ASDropDown;
