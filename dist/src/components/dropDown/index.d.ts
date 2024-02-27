import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { DropdownProps } from 'react-native-element-dropdown/src/components/Dropdown/model';
import { FieldHookConfig } from "formik";
export type DropDownOptionsProps = {
    label: string;
    value: string;
};
export type ASDropDownProps = Omit<DropdownProps<any>, 'labelField' | 'valueField' | 'onChange' | 'data'> & {
    options: DropDownOptionsProps[];
    onSelect?: (item: DropDownOptionsProps) => void;
    renderLeftIcon?: () => React.ReactNode;
    onChangeItem?: (item: DropDownOptionsProps) => void;
    label?: string;
    name: string | FieldHookConfig<any>;
    containerStyle?: StyleProp<ViewStyle>;
    iconStyles?: StyleProp<ImageStyle>;
};
declare const ASDropDown: React.FC<ASDropDownProps>;
export default ASDropDown;
