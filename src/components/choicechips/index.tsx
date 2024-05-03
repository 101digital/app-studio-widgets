import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useField} from "formik";
import ASWrap from "../wrap";
import {ThemeContext} from "../../context/theme-context";

export type ChipProps = {
    id?: string;
    label: string;
    value: string
    icon?: React.ReactNode;
    [key: string]: string | React.ReactNode
}

export type ASChoiceChipsProps = {
    options: ChipProps[];
    name: string;
    isSingleChoice?: boolean
    returnedKey?: string;
    contentLayout?: 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-start' | 'flex-end'
}

const ASChoiceChips: React.FC<ASChoiceChipsProps> = (props: ASChoiceChipsProps) => {
    const {colors} = useContext(ThemeContext);
    const {options, name, isSingleChoice = true, returnedKey, contentLayout = 'space-between'} = props
    const [field, meta, helpers] = useField(name);
    const {setValue} = helpers || {};
    const selectedChoiceChips: ChipProps[] | string = field?.value

    const _onPressChoiceChip = (chip: ChipProps) => () => {
        if (Array.isArray(selectedChoiceChips)) {
            let _selectedChoiceChips: ChipProps[] = [...selectedChoiceChips]
            let _choiceChipIndex: number | boolean = _selectedChoiceChips && Array.isArray(_selectedChoiceChips) && _selectedChoiceChips?.findIndex((c: ChipProps) => c?.value === chip?.value)
            _choiceChipIndex = _choiceChipIndex === false ? -1 : _choiceChipIndex

            if (_choiceChipIndex > -1) {
                _selectedChoiceChips = [..._selectedChoiceChips.slice(0, _choiceChipIndex), ..._selectedChoiceChips.slice(_choiceChipIndex + 1)];
            } else {
                _selectedChoiceChips.push(chip);
            }
            setValue(_selectedChoiceChips)
        }
    }

    const _onPressSingleChoiceChip = (chip: ChipProps) => () => {
        setValue(returnedKey ? chip?.[returnedKey] : chip?.value)
    }

    const findSelected = (value: string) => {
        if (isSingleChoice) {
            return selectedChoiceChips === value
        } else {
            return Array.isArray(selectedChoiceChips) && selectedChoiceChips?.find((item: ChipProps) => item?.value === value)
        }
    }

    return (
        <ASWrap style={[styles.container, {justifyContent: contentLayout}]}>
            {options.map((chip, index) => (
                <TouchableOpacity
                    key={`${chip.value}${index}`}
                    onPress={isSingleChoice ? _onPressSingleChoiceChip(chip) : _onPressChoiceChip(chip)}
                    style={[
                        styles.chip,
                        {
                            backgroundColor: findSelected(chip?.value) ? colors.primary : colors.secondaryFixed,
                            borderColor: findSelected(chip?.value) ? colors.primary : colors.onSurface,
                        },
                    ]}
                >
                    {!!chip?.icon && <View style={styles.iconContainer}>{chip.icon}</View>}
                    <Text
                        style={[styles.label, {color: findSelected(chip?.value) ? colors.secondaryFixed : colors.surface}]}>
                        {chip.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </ASWrap>
    );
};

const styles = StyleSheet.create({
    container: {},
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
        margin: 4,
    },
    iconContainer: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
});

export default ASChoiceChips;


//

// <ASChoiceChips options={[
//                     {value: 'car', label: 'Car'},
//                     {value: 'plane', label: 'Plane'},
//                     {value: 'bike', label: 'Bike'},
//                     {value: 'ship', label: 'Ship'},
//                     {value: 'heli', label: 'Helicopter'},
//                     {value: 'shuttle', label: 'Space shuttle'}
//                 ]}
//                name={'transport'}/>
