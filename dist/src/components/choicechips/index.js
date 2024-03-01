"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const formik_1 = require("formik");
const wrap_1 = __importDefault(require("../wrap"));
const colors_1 = require("../../utils/colors");
const ASChoiceChips = (props) => {
    const { options, name } = props;
    const [field, meta, helpers] = (0, formik_1.useField)(name);
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
    return (react_1.default.createElement(wrap_1.default, { style: styles.container }, options.map((chip, index) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${chip.value}${index}`, onPress: _onPressChoiceChip(chip), style: [
            styles.chip,
            {
                backgroundColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors_1.colors.primaryColor : colors_1.colors.offWhite,
                borderColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors_1.colors.primaryColor : colors_1.colors.gray400,
            },
        ] },
        !!(chip === null || chip === void 0 ? void 0 : chip.icon) && react_1.default.createElement(react_native_1.View, { style: styles.iconContainer }, chip.icon),
        react_1.default.createElement(react_native_1.Text, { style: [styles.label, { color: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors_1.colors.offWhite : colors_1.colors.black700 }] }, chip.label))))));
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = ASChoiceChips;
