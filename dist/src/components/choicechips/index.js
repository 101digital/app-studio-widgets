"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const formik_1 = require("formik");
const wrap_1 = __importDefault(require("../wrap"));
const ASChoiceChips = (props) => {
    const { options, name, isSingleChoice = true, returnedKey, contentLayout = "space-between", choiceChipTextStyles, choiceChipStyles, selectedChipBackgroundColor, selectedChipBorderColor, selectedChipTextColor, } = props;
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const selectedChoiceChips = field === null || field === void 0 ? void 0 : field.value;
    const flattenedContainerStyle = react_native_1.StyleSheet.flatten(choiceChipStyles);
    const flattenedBackgroundColor = flattenedContainerStyle === null || flattenedContainerStyle === void 0 ? void 0 : flattenedContainerStyle.backgroundColor;
    const flattenedBorderColor = flattenedContainerStyle === null || flattenedContainerStyle === void 0 ? void 0 : flattenedContainerStyle.borderColor;
    const flattenedTextColor = react_native_1.StyleSheet.flatten(choiceChipTextStyles);
    const _onPressChoiceChip = (chip) => () => {
        if (Array.isArray(selectedChoiceChips)) {
            let _selectedChoiceChips = [...selectedChoiceChips];
            let _choiceChipIndex = _selectedChoiceChips &&
                Array.isArray(_selectedChoiceChips) &&
                (_selectedChoiceChips === null || _selectedChoiceChips === void 0 ? void 0 : _selectedChoiceChips.findIndex((c) => (c === null || c === void 0 ? void 0 : c.value) === (chip === null || chip === void 0 ? void 0 : chip.value)));
            _choiceChipIndex = _choiceChipIndex === false ? -1 : _choiceChipIndex;
            if (_choiceChipIndex > -1) {
                _selectedChoiceChips = [
                    ..._selectedChoiceChips.slice(0, _choiceChipIndex),
                    ..._selectedChoiceChips.slice(_choiceChipIndex + 1),
                ];
            }
            else {
                _selectedChoiceChips.push(chip);
            }
            setValue(_selectedChoiceChips);
        }
    };
    const _onPressSingleChoiceChip = (chip) => () => {
        setValue(returnedKey ? chip === null || chip === void 0 ? void 0 : chip[returnedKey] : chip === null || chip === void 0 ? void 0 : chip.value);
    };
    const findSelected = (value) => {
        if (isSingleChoice) {
            return selectedChoiceChips === value;
        }
        else {
            return (Array.isArray(selectedChoiceChips) &&
                (selectedChoiceChips === null || selectedChoiceChips === void 0 ? void 0 : selectedChoiceChips.find((item) => (item === null || item === void 0 ? void 0 : item.value) === value)));
        }
    };
    return (react_1.default.createElement(wrap_1.default, { style: [styles.container, { justifyContent: contentLayout }] }, options.map((chip, index) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${chip.value}${index}`, onPress: isSingleChoice
            ? _onPressSingleChoiceChip(chip)
            : _onPressChoiceChip(chip), style: [
            styles.chip,
            choiceChipStyles,
            {
                backgroundColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value)
                    ? selectedChipBackgroundColor
                    : flattenedBackgroundColor,
                borderColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value)
                    ? selectedChipBorderColor
                    : flattenedBorderColor,
            },
        ] },
        !!(chip === null || chip === void 0 ? void 0 : chip.icon) && (react_1.default.createElement(react_native_1.View, { style: styles.iconContainer }, chip.icon)),
        react_1.default.createElement(react_native_1.Text, { style: [
                styles.label,
                choiceChipTextStyles,
                {
                    color: findSelected(chip === null || chip === void 0 ? void 0 : chip.value)
                        ? selectedChipTextColor
                        : flattenedTextColor === null || flattenedTextColor === void 0 ? void 0 : flattenedTextColor.color,
                },
            ] }, chip.label))))));
};
const styles = react_native_1.StyleSheet.create({
    container: {},
    chip: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 6,
    },
    iconContainer: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
});
exports.default = ASChoiceChips;
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
