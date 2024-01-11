import React, {forwardRef, ForwardRefExoticComponent, Ref, useImperativeHandle, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/src/components/Dropdown/model';
import ASText from "app-studio-widgets/src/components/text";
import {colors} from "app-studio-widgets/src/utils/colors";

type DropDownOptionsProps = {
    label: string;
    value: string;
}

type ASDropDownProps =
    Omit<DropdownProps<any>, 'labelField' | 'valueField' | 'onChange'>
    & {
    data: DropDownOptionsProps[]
    onSelect?: (item: DropDownOptionsProps) => void
    renderLeftIcon?: () => React.ReactNode
    onChangeItem?: (item: DropDownOptionsProps) => void
    label?: string
}

export type ASDropDownRef = {
    onChangeItem: (item: DropDownOptionsProps) => void;
};

const ASDropDown: ForwardRefExoticComponent<any> = forwardRef((props: ASDropDownProps, ref: Ref<any>) => {
    const {
        data,
        renderLeftIcon,
        placeholder = "Please select item",
        onSelect,
        searchPlaceholder = 'Search...',
        search = false,
        label,
        ...restProps
    } = props
    const [value, setValue] = useState<string | null>(null);

    const renderItem = (item: { label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    const onChangeItem = (item: DropDownOptionsProps | string) => {

        if (typeof item === 'string') {
            data.find((i) => {
                if (i.value === item || i.label === item) {
                    onSelect?.(i)
                    setValue(i?.value);
                }
            })


        } else {
            onSelect?.(item)
            setValue(item?.value);
        }
    }

    useImperativeHandle(
        ref,
        (): ASDropDownRef => ({
            onChangeItem
        })
    );

    return (
        <View style={{
            backgroundColor: colors.offWhite, borderRadius: 5, paddingTop: 5
        }}>
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
                value={value}
                searchPlaceholder={searchPlaceholder}
                renderLeftIcon={renderLeftIcon}
                renderItem={renderItem}
                placeholder={placeholder}
                {...restProps}
                onChange={onChangeItem}
                labelField="label"
                valueField="value"
            />
        </View>
    );
})

export default ASDropDown;

const styles = StyleSheet.create({
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
                <ASDropdown data={[
                    {label: 'Item 1', value: '1'},
                    {label: 'Item 2', value: '2'},
                    {label: 'Item 3', value: '3'},
                    {label: 'Item 4', value: '4'},
                    {label: 'Item 5', value: '5'},
                    {label: 'Item 6', value: '6'},
                    {label: 'Item 7', value: '7'},
                    {label: 'Item 8', value: '8'}]}
                            onSelect={(value) => {
                                console.log('Selected Value:', value);
                            }}
                            placeholder="Please select item"
                />
* */


// Note: ASDropdown Example
/*
                <ASDropdown data={[
                    {label: 'Item 1', value: '1'},
                    {label: 'Item 2', value: '2'},
                    {label: 'Item 3', value: '3'},
                    {label: 'Item 4', value: '4'},
                    {label: 'Item 5', value: '5'},
                    {label: 'Item 6', value: '6'},
                    {label: 'Item 7', value: '7'},
                    {label: 'Item 8', value: '8'}]}
                            onSelect={(value) => {
                                console.log('Selected Value:', value);
                            }}
                            placeholder="Please select item"
                />
* */
