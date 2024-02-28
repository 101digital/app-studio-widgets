var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { colors } from "../../utils/colors";
const ASCheckBox = (props) => {
    const { onChange } = props, restProps = __rest(props, ["onChange"]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const onValueChange = (newValue) => {
        setToggleCheckBox(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    return (React.createElement(CheckBox, Object.assign({ disabled: false, value: toggleCheckBox, onValueChange: onValueChange, 
        //IOS Only Props
        tintColor: colors.activeInputBorderColor, lineWidth: 2, 
        //Android Only Props
        tintColors: { true: colors.activeInputBorderColor, false: colors.gray400 } }, restProps)));
};
export default ASCheckBox;
