import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/src/components/Dropdown/model';

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
}

const ASDropDown: React.FC<ASDropDownProps> = (props: ASDropDownProps) => {
    const {
        data,
        renderLeftIcon,
        placeholder = "Please select item",
        onSelect,
        searchPlaceholder = 'Search...',
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

    const onChangeItem = (item: DropDownOptionsProps) => {
        onSelect?.(item)
        setValue(item?.value);
    }

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
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
    );
};

export default ASDropDown;

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
