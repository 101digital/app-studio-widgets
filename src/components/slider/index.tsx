import React,{useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider, {SliderProps} from '@react-native-community/slider';
import {useField} from "formik";
import ASText from "../text";
import {ThemeContext} from "../../context/theme-context";

export type ASSliderProps = SliderProps & {
    onChange?: (value: number) => void;
    minimumValue: number;
    maximumValue: number;
    name: string
}

const ASSlider: React.FC<ASSliderProps> = (props: ASSliderProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        minimumValue,
        maximumValue,
        step = 1,
        name,
        onChange,
        ...restProps
    } = props
    const [field, meta, helpers] = useField(name);
    const {setValue} = helpers || {};
    const sliderValue = parseFloat(field?.value)

    const _onValueChange = (value: number) => {
        setValue?.(value)
        onChange?.(value)
    }

    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                value={sliderValue}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                step={step}
                thumbTintColor={colors.primary}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor={colors.onTertiary}
                {...restProps}
                onValueChange={_onValueChange}
            />
            {!!sliderValue && <ASText style={styles.valueText}>{sliderValue}</ASText>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    slider: {
        width: '100%',
    },
    valueText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },
});

export default ASSlider;

/*
    <ASSlider  name={'age'} minimumValue={1} maximumValue={99} />
* */
