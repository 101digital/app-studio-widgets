import React, {ReactNode, useState} from 'react';
import {
    NativeSyntheticEvent,
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';
import {TextInputMask, TextInputMaskProps} from 'react-native-masked-text';
import {colors} from "../../utils/colors";
import {useField} from 'formik';

export type ASTextFieldProps = TextInputMaskProps &
    TextInputProps & {
    name: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    errorBorderColor?: string;
    activeBorderColor?: string;
    inactiveBorderColor?: string;
    placeholderTextColor?: string;
    style?: ASTextFieldStyles;
    formatError?: (error: string) => string;
};

export type ASTextFieldStyles = {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
};

const ASTextField = (props: ASTextFieldProps) => {
    const {
        name,
        onFocus,
        onBlur,
        suffixIcon,
        prefixIcon,
        errorBorderColor,
        activeBorderColor,
        inactiveBorderColor,
        style,
        placeholderTextColor = '#C4C4C4',
        formatError,
        options,
        onChangeText,
        ...restProps
    } = props;
    const [active, setActive] = useState(false);
    const [field, meta, helpers] = useField(name);
    const showMask = !!options?.mask;

    const handleOnFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(true);
        if (onFocus) {
            onFocus(event);
        }
    };

    const handleOnBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(false);
        field?.onBlur(name);
        helpers?.setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };

    let separatorColor: string;

    if (meta?.error && meta?.touched) {
        separatorColor = (errorBorderColor ?? colors.errorInputBorderColor)!;
    } else {
        separatorColor = active
            ? (activeBorderColor ?? colors.activeInputBorderColor)!
            : (inactiveBorderColor ?? colors.inActiveInputBorderColor)!;
    }

    const getErrorMessage = (error: string) => {
        return formatError?.(error) ?? error;
    };

    return (
        <View style={styles.containerStyle}>
            <View style={[styles.contentContainerStyle, {borderColor: separatorColor}]}>
                {prefixIcon}
                <View style={styles.inputContainerStyle}>
                    {showMask ? (
                        <TextInputMask
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            value={field?.value}
                            onChangeText={field?.onChange(name)}
                            style={styles.textInputStyle}
                            placeholderTextColor={placeholderTextColor}
                            options={options}
                            {...restProps}
                        />
                    ) : (
                        <TextInput
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            value={field?.value}
                            onChangeText={field?.onChange(name)}

                            // onChangeText={onChangeText}
                            style={styles.textInputStyle}
                            placeholderTextColor={placeholderTextColor}
                            autoComplete={'off'}
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            {...restProps}
                        />
                    )}
                </View>
                {suffixIcon}
            </View>
            {meta?.error && meta?.touched && (
                <Text style={styles.errorTextStyle}>{getErrorMessage(meta?.error)}</Text>
            )}
        </View>
    );
};

ASTextField.defaultProps = {
    type: 'custom',
};

const styles = StyleSheet.create({
    containerStyle: {
    },
    contentContainerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.lightWhite,
        borderRadius:5
    },
    inputContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    textInputStyle: {
        flex: 1,
        fontSize: 12,
        color: colors.inputColor,
        paddingBottom: 0,
        paddingTop: 0,
    },
    errorTextStyle: {
        fontSize: 12,
        color: 'red',
        marginTop: Platform.OS === 'ios' ? 5 : 10,
    },
});

export default ASTextField;
