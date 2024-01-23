import React from 'react';
import {ColorValue, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {FieldHookConfig, useField} from "formik";
import ASText from "../text";
import {colors} from "../../utils/colors";

export type ASRadioButtonItemProps = {
    label: string;
    value: string
}

export type ASRadioButtonProps = {
    options: ASRadioButtonItemProps[];
    name: string | FieldHookConfig<any>
    radioButtonStyle?: StyleProp<ViewStyle>;
    innerCircleStyle?: StyleProp<ViewStyle>;
    color?: ColorValue
    labelStyle?: StyleProp<TextStyle>
}

const ASRadioButton: React.FC<ASRadioButtonProps> = (props: ASRadioButtonProps) => {
    const {options = [], name, radioButtonStyle, innerCircleStyle, color = colors.primaryColor, labelStyle} = props;
    const [field, meta, helpers] = useField(name);
    const {setValue} = helpers || {};

    const _onPressRadioButton = (item: ASRadioButtonItemProps) => () => {
        setValue?.(item?.value)
    }

    return (
        <>
            {
                options.map((item: ASRadioButtonItemProps, index: number) => {
                    return (
                        <TouchableOpacity key={`${index}${item?.label}`} onPress={_onPressRadioButton(item)}
                                          style={styles.container}>
                            <View style={[styles.radioButton, radioButtonStyle, {borderColor: color}]}>
                                {item?.value === field?.value &&
                                    <View style={[styles.innerCircle, innerCircleStyle, {backgroundColor: color}]}/>}
                            </View>
                            <ASText style={[styles.label, labelStyle]}>{item?.label}</ASText>
                        </TouchableOpacity>
                    )
                })
            }
        </>)
};

export default ASRadioButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    label: {},
});
