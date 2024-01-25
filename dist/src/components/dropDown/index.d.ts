import React from 'react';
import { DropdownProps } from 'react-native-element-dropdown/src/components/Dropdown/model';
import { FieldHookConfig } from "formik";
export declare type DropDownOptionsProps = {
    label: string;
    value: string;
};
export declare type ASDropDownProps = Omit<DropdownProps<any>, 'labelField' | 'valueField' | 'onChange' | 'data'> & {
    options: DropDownOptionsProps[];
    onSelect?: (item: DropDownOptionsProps) => void;
    renderLeftIcon?: () => React.ReactNode;
    onChangeItem?: (item: DropDownOptionsProps) => void;
    label?: string;
    name: string | FieldHookConfig<any>;
};
declare const ASDropDown: React.FC<ASDropDownProps>;
export default ASDropDown;
