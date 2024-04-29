"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const formik_1 = require("formik");
const wrap_1 = __importDefault(require("../wrap"));
const theme_context_1 = require("../../context/theme-context");
const ASChoiceChips = (props) => {
    const { colors } = (0, react_1.useContext)(theme_context_1.ThemeContext);
    const { options, name, isSingleChoice = true, returnedKey } = props;
    const [field, meta, helpers] = (0, formik_1.useField)(name);
    const { setValue } = helpers || {};
    const selectedChoiceChips = field === null || field === void 0 ? void 0 : field.value;
    const _onPressChoiceChip = (chip) => () => {
        if (Array.isArray(selectedChoiceChips)) {
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
            return Array.isArray(selectedChoiceChips) && (selectedChoiceChips === null || selectedChoiceChips === void 0 ? void 0 : selectedChoiceChips.find((item) => (item === null || item === void 0 ? void 0 : item.value) === value));
        }
    };
    return (react_1.default.createElement(wrap_1.default, { style: styles.container }, options.map((chip, index) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: `${chip.value}${index}`, onPress: isSingleChoice ? _onPressSingleChoiceChip(chip) : _onPressChoiceChip(chip), style: [
            styles.chip,
            {
                backgroundColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.primaryColor : colors.offWhite,
                borderColor: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.primaryColor : colors.gray400,
            },
        ] },
        !!(chip === null || chip === void 0 ? void 0 : chip.icon) && react_1.default.createElement(react_native_1.View, { style: styles.iconContainer }, chip.icon),
        react_1.default.createElement(react_native_1.Text, { style: [styles.label, { color: findSelected(chip === null || chip === void 0 ? void 0 : chip.value) ? colors.offWhite : colors.black700 }] }, chip.label))))));
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
