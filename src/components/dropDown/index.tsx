import React, {useContext,useState} from 'react';
import {ImageStyle, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/src/components/Dropdown/model';
import ASText from "../text";
import {isAndroid} from "../../utils/commonUtils";
import {FieldHookConfig, useField} from "formik";
import {ThemeContext} from "../../context/theme-context";

export type DropDownOptionsProps = {
    [key :string]: any
}

export type ASDropDownProps =
    Omit<DropdownProps<any>, 'labelField' | 'valueField' | 'onChange' | 'data'>
    & {
    options: DropDownOptionsProps[]
    name: string | FieldHookConfig<any>
    labelField:string
    valueField:string
    onSelect?: (item: DropDownOptionsProps) => void
    renderLeftIcon?: () => React.ReactNode
    onChangeItem?: (item: DropDownOptionsProps) => void
    label?: string
    containerStyle?: StyleProp<ViewStyle>
    iconStyles?: StyleProp<ImageStyle>
}

const ASDropDown: React.FC<ASDropDownProps> = (props: ASDropDownProps) => {
    const {colors} = useContext(ThemeContext);
    const {
        options,
        renderLeftIcon,
        placeholder = "Please select item",
        onSelect,
        searchPlaceholder = 'Search...',
        search = false,
        label,
        name,
        containerStyle,
        iconStyles,
        selectedTextStyle,
        labelField,
        valueField,
        ...restProps
    } = props
    const [field, meta, helpers] = useField<string>(name);
    const {setValue} = helpers || {};
    const [isFocus, setIsFocus] = useState(false);

    const renderItem = (item:DropDownOptionsProps) => {
        return (
            <View style={styles.item}>
                <Text style={[styles.textItem, {
                    color: colors.surface,
                }]}>
                    { item[labelField]}</Text>
            </View>
        );
    };

    const _onChangeDropDownField = (item:DropDownOptionsProps) => {
        setValue?.(item?.[valueField] )
    }

    console.log('lisdufghg=====',field?.value)

    return (
        <View style={[styles.container, {
            backgroundColor: colors.secondaryFixed,
        }, containerStyle]}>
            {!!label && <ASText style={[styles.labelStyle, {
                color: colors.onTertiary,
            }]}>{label}</ASText>}

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={[styles.iconStyle, iconStyles]}
                search={search}
                maxHeight={300}
                value={field?.value}
                searchPlaceholder={searchPlaceholder}
                renderLeftIcon={renderLeftIcon}
                renderItem={renderItem}
                placeholder={placeholder}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                {...restProps}
                selectedTextStyle={[styles.selectedTextStyle, {
                    color: colors.surface,
                }, selectedTextStyle]}
                data={options}
                onChange={_onChangeDropDownField}
                labelField={labelField}
                valueField={valueField}
            />
        </View>
    );
}

export default ASDropDown;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 4
    },
    dropdown: {
        borderRadius: 5,
        minWidth: isAndroid ? 60 : 'auto',
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
    },
    placeholderStyle: {
        fontSize: 12,
        paddingHorizontal: 15,
    },
    selectedTextStyle: {
        fontSize: isAndroid ? 12 : 12,
        paddingRight: isAndroid ? 0 : 30,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 12,
    },
    labelStyle: {
        fontSize: 10,
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
