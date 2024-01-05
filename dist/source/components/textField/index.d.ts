import React, { ReactNode } from 'react';
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { TextInputMaskProps } from 'react-native-masked-text';
export declare type InputFieldProps = TextInputMaskProps & TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    errorBorderColor?: string;
    activeBorderColor?: string;
    inactiveBorderColor?: string;
    placeholderTextColor?: string;
    style?: InputFieldStyles;
    formatError?: (error: string) => string;
};
export declare type InputFieldStyles = {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
};
declare const InputField: {
    (props: InputFieldProps): React.JSX.Element;
    defaultProps: {
        type: string;
    };
};
export default InputField;
