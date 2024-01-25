var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useField } from "formik";
import ASWrap from "../wrap";
import { colors } from "../../utils/colors";
var ASChoiceChips = function (props) {
    var options = props.options, name = props.name;
    var _a = useField(name), field = _a[0], meta = _a[1], helpers = _a[2];
    var setValue = (helpers || {}).setValue;
    var selectedChoiceChips = field === null || field === void 0 ? void 0 : field.value;
    var _onPressChoiceChip = function (chip) { return function () {
        var _selectedChoiceChips = __spreadArray([], selectedChoiceChips, true);
        var _choiceChipIndex = _selectedChoiceChips && Array.isArray(_selectedChoiceChips) && (_selectedChoiceChips === null || _selectedChoiceChips === void 0 ? void 0 : _selectedChoiceChips.findIndex(function (c) { return (c === null || c === void 0 ? void 0 : c.value) === (chip === null || chip === void 0 ? void 0 : chip.value); }));
        _choiceChipIndex = _choiceChipIndex === false ? -1 : _choiceChipIndex;
        if (_choiceChipIndex > -1) {
            _selectedChoiceChips = __spreadArray(__spreadArray([], _selectedChoiceChips.slice(0, _choiceChipIndex), true), _selectedChoiceChips.slice(_choiceChipIndex + 1), true);
        }
        else {
            _selectedChoiceChips.push(chip);
        }
        setValue(_selectedChoiceChips);
    }; };
    var findSelected = function (value) { return Array.isArray(selectedChoiceChips) && (selectedChoiceChips === null || selectedChoiceChips === void 0 ? void 0 : selectedChoiceChips.find(function (item) { return (item === null || item === void 0 ? void 0 : item.value) === value; })); };
    return (React.createElement(ASWrap, { style: styles.container }, options.map(function (chip, index) { return (React.createElement(TouchableOpacity, { key: "".concat(chip.value).concat(index), onPress: _onPressChoiceChip(chip), style: [
            styles.chip,
            {
                backgroundColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.primaryColor : colors.offWhite,
                borderColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.primaryColor : colors.gray400,
            },
        ] },
        !!(chip === null || chip === void 0 ? void 0 : chip.icon) && React.createElement(View, { style: styles.iconContainer }, chip.icon),
        React.createElement(Text, { style: [styles.label, { color: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.offWhite : colors.black700 }] }, chip.label))); })));
};
var styles = StyleSheet.create({
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
