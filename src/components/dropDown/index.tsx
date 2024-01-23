import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/src/components/Dropdown/model';
import ASText from "../text";
import {colors} from "../../utils/colors";
import {FieldHookConfig, useField} from "formik";

export type DropDownOptionsProps = {
    label: string;
    value: string;
}

export type ASDropDownProps =
    Omit<DropdownProps<any>, 'labelField' | 'valueField' | 'onChange'>
    & {
    data: DropDownOptionsProps[]
    onSelect?: (item: DropDownOptionsProps) => void
    renderLeftIcon?: () => React.ReactNode
    onChangeItem?: (item: DropDownOptionsProps) => void
    label?: string
    name: string | FieldHookConfig<any>
}

const ASDropDown: React.FC<ASDropDownProps> = (props: ASDropDownProps) => {
    const {
        data,
        renderLeftIcon,
        placeholder = "Please select item",
        onSelect,
        searchPlaceholder = 'Search...',
        search = false,
        label,
        name = '',
        ...restProps
    } = props
    const [field, meta, helpers] = useField<string>(name);
    const {setValue} = helpers || {};

    const renderItem = (item: { label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    const _onChangeDropDownField = (item: DropDownOptionsProps) => {
        setValue?.(item?.value)
    }

    return (
        <View style={styles.container}>
            <ASText style={styles.labelStyle}>{label}</ASText>

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search={search}
                maxHeight={300}
                value={`${field?.value}`}
                searchPlaceholder={searchPlaceholder}
                renderLeftIcon={renderLeftIcon}
                renderItem={renderItem}
                placeholder={placeholder}
                {...restProps}
                onChange={_onChangeDropDownField}
                labelField="label"
                valueField="value"
            />
        </View>
    );
}

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
        paddingHorizontal: 15,
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 15
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
                            data={[{label: 'F&B', value: 'f&b'}, {
                                label: 'Financial and Insurance/ Takaful Activities',
                                value: 'Financial and Insurance/ Takaful Activities'
                            }]}/>
* */
