import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {useField} from "formik";
import ASRow from "../row";
import ASButton from "../button";
import ASText from "../text";
import {ThemeContext} from "../../context/theme-context";

export type ASCounterProps = {
    minValue?: number;
    maxValue?: number;
    onValueChange?: (value: number) => void;
    name: string
}

const ASCounter: React.FC<ASCounterProps> = (props: ASCounterProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        minValue = 0,
        maxValue,
        onValueChange,
        name
    } = props
    const [field, meta, helpers] = useField(name);
    const {setValue} = helpers || {};
    const count = parseInt(field?.value)

    const handleIncrement = () => {
        const newValue = count + 1;
        if (maxValue === undefined || newValue <= maxValue) {
            setValue(newValue);
            onValueChange?.(newValue);
        }
    };

    const handleDecrement = () => {
        const newValue = count - 1;
        if (newValue >= minValue) {
            setValue(newValue);
            onValueChange?.(newValue);
        }
    };

    return (
        <View style={styles.wrapper}>
            <ASRow style={[styles.container, {borderColor: colors.gray400,}]}>
                <ASButton simpleTextButton onPress={handleDecrement}
                          style={styles.button}
                          textStyle={[styles.buttonText, {
                              color: colors.black700,
                          }]}
                          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                          label={'−'}/>
                <ASText style={[styles.countText, {color: colors.black700}]}>
                    {count}
                </ASText>
                <ASButton simpleTextButton onPress={handleIncrement}
                          style={styles.button}
                          textStyle={[styles.buttonPlusText, {
                              color: colors.black700,
                          }]}
                          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                          label={'＋'}/>
            </ASRow>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 4,
        flex: 1
    },
    button: {
        marginHorizontal: 8,
    },
    buttonText: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonPlusText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    countText: {
        fontSize: 20,
        marginHorizontal: 8,
    },
});

export default ASCounter;
