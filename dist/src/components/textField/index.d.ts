import React, { ReactNode } from 'react';
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { TextInputMaskProps, TextInputMaskTypeProp } from 'react-native-masked-text';
export type ASTextFieldStyles = {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
};
export type ASTextFieldProps = Omit<TextInputMaskProps, "type"> & TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    errorBorderColor?: string;
    activeBorderColor?: string;
    inactiveBorderColor?: string;
    placeholderTextColor?: string;
    style?: ASTextFieldStyles;
    formatError?: (error: string) => string;
    label?: string;
    type?: TextInputMaskTypeProp;
    isShowError?: boolean;
};
declare const ASTextField: {
    (props: ASTextFieldProps): React.JSX.Element;
    defaultProps: {
        type: string;
    };
};
export default ASTextField;
