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
import { Switch } from 'react-native';
import { colors } from "../../utils/colors";
const ASSwitch = (props) => {
    const { enableThumbColor = colors.offWhite, disabledThumbColor = colors.offWhite, onChange } = props, restProps = __rest(props, ["enableThumbColor", "disabledThumbColor", "onChange"]);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => {
            onChange === null || onChange === void 0 ? void 0 : onChange(!previousState);
            return !previousState;
        });
    };
    return (React.createElement(Switch, Object.assign({ trackColor: { false: colors.gray400, true: colors.green }, ios_backgroundColor: colors.black500, onValueChange: toggleSwitch, value: isEnabled, thumbColor: isEnabled ? enableThumbColor : disabledThumbColor }, restProps)));
};
export default ASSwitch;
