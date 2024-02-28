import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useField } from "formik";
import ASWrap from "../wrap";
import { colors } from "../../utils/colors";
const ASChoiceChips = (props) => {
    const { options, name } = props;
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers || {};
    const selectedChoiceChips = field === null || field === void 0 ? void 0 : field.value;
    const _onPressChoiceChip = (chip) => () => {
        let _selectedChoiceChips = [...selectedChoiceChips];
        let _choiceChipIndex = _selectedChoiceChips && Array.isArray(_selectedChoiceChips) && (_selectedChoiceChips === null || _selectedChoiceChips === void 0 ? void 0 : _selectedChoiceChips.findIndex((c) => (c === null || c === void 0 ? void 0 : c.value) === (chip === null || chip === void 0 ? void 0 : chip.value)));
        _choiceChipIndex = _choiceChipIndex === false ? -1 : _choiceChipIndex;
        if (_choiceChipIndex > -1) {
            _selectedChoiceChips = [..._selectedChoiceChips.slice(0, _choiceChipIndex), ..._selectedChoiceChips.slice(_choiceChipIndex + 1)];
        }
        else {
            _selectedChoiceChips.push(chip);
        }
        setValue(_selectedChoiceChips);
    };
    const findSelected = (value) => Array.isArray(selectedChoiceChips) && (selectedChoiceChips === null || selectedChoiceChips === void 0 ? void 0 : selectedChoiceChips.find((item) => (item === null || item === void 0 ? void 0 : item.value) === value));
    return (React.createElement(ASWrap, { style: styles.container }, options.map((chip, index) => (React.createElement(TouchableOpacity, { key: `${chip.value}${index}`, onPress: _onPressChoiceChip(chip), style: [
            styles.chip,
            {
                backgroundColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.primaryColor : colors.offWhite,
                borderColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.primaryColor : colors.gray400,
            },
        ] },
        !!(chip === null || chip === void 0 ? void 0 : chip.icon) && React.createElement(View, { style: styles.iconContainer }, chip.icon),
        React.createElement(Text, { style: [styles.label, { color: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.offWhite : colors.black700 }] }, chip.label))))));
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
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
