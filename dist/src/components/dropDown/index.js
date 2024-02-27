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
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ASText from "../text";
import { colors } from "../../utils/colors";
import { useField } from "formik";
const ASDropDown = (props) => {
    const { options, renderLeftIcon, placeholder = "Please select item", onSelect, searchPlaceholder = 'Search...', search = false, label, name = '', containerStyle, iconStyles } = props, restProps = __rest(props, ["options", "renderLeftIcon", "placeholder", "onSelect", "searchPlaceholder", "search", "label", "name", "containerStyle", "iconStyles"]);
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers || {};
    const renderItem = (item) => {
        return (React.createElement(View, { style: styles.item },
            React.createElement(Text, { style: styles.textItem }, item.label)));
    };
    const _onChangeDropDownField = (item) => {
        setValue === null || setValue === void 0 ? void 0 : setValue(item === null || item === void 0 ? void 0 : item.value);
    };
    return (React.createElement(View, { style: [styles.container, containerStyle] },
        !!label && React.createElement(ASText, { style: styles.labelStyle }, label),
        React.createElement(Dropdown, Object.assign({ style: styles.dropdown, placeholderStyle: styles.placeholderStyle, selectedTextStyle: styles.selectedTextStyle, inputSearchStyle: styles.inputSearchStyle, iconStyle: [styles.iconStyle, iconStyles], search: search, maxHeight: 300, value: `${field === null || field === void 0 ? void 0 : field.value}`, searchPlaceholder: searchPlaceholder, renderLeftIcon: renderLeftIcon, renderItem: renderItem, placeholder: placeholder }, restProps, { data: options, onChange: _onChangeDropDownField, labelField: "label", valueField: "value" }))));
};
export default ASDropDown;
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.offWhite, borderRadius: 5, paddingTop: 5
    },
    dropdown: {
        marginVertical: 0,
        borderRadius: 5,
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 12,
        color: colors.black700,
    },
    placeholderStyle: {
        fontSize: 12,
        paddingHorizontal: 15,
    },
    selectedTextStyle: {
        fontSize: 12,
        color: colors.black700,
        paddingRight: 25,
        paddingLeft: 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 14,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 12,
    },
    labelStyle: {
        fontSize: 10,
        color: colors.gray400,
        paddingHorizontal: 15
    }
});
// Note: ASDropdown Example
/*
                <ASDropdown
                            name={'employmentSector'}
                            label={'Employment sector'}
                            options={[{label: 'F&B', value: 'f&b'}, {
                                label: 'Financial and Insurance/ Takaful Activities',
                                value: 'Financial and Insurance/ Takaful Activities'
                            }]}/>
* */
