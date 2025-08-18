import React, { useContext, useState } from "react";
import {
  ImageStyle,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/src/components/Dropdown/model";
import ASText from "../text";
import { hexToRgbaWithOpacity, isAndroid } from "../../utils/commonUtils";
import { FieldHookConfig, useField } from "formik";
import { ThemeContext } from "../../context/theme-context";
import ASOverlay from "../overlay";
import ASButton from "../button";
import { DownIcon } from "../../assets/icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type DropDownOptionsProps = {
  [key: string]: any;
};

export type ASDropDownProps = Omit<
  DropdownProps<any>,
  "labelField" | "valueField" | "onChange" | "data"
> & {
  options: DropDownOptionsProps[] | undefined;
  name: string | FieldHookConfig<any>;
  labelField: string;
  valueField: string;
  onSelect?: (item: DropDownOptionsProps | string[]) => void;
  renderLeftIcon?: () => React.ReactNode;
  onChangeItem?: (item: DropDownOptionsProps) => void;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyles?: StyleProp<ImageStyle>;
  placeholderTextStyles?: StyleProp<TextStyle>;
  dropdownTextStyles?: StyleProp<TextStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  isOverlayEnabled?: boolean;
  onChange?: (item: any) => void;
  id?: string;
  isMultiChoices?: boolean;
  iconColor?: string;
  testId?: string;
};

const ASDropDown: React.FC<ASDropDownProps> = (props: ASDropDownProps) => {
  const { colors } = useContext(ThemeContext);
  const {
    options,
    renderLeftIcon,
    placeholder = "Please select item",
    onSelect,
    searchPlaceholder = "Search...",
    search = false,
    label,
    name,
    containerStyle,
    iconStyles,
    selectedTextStyle,
    labelField = "label",
    valueField = "value",
    placeholderTextStyles,
    dropdownTextStyles,
    labelTextStyle,
    isOverlayEnabled,
    id,
    onChange,
    isMultiChoices = false,
    iconColor,
    testId = "ASDropdown",
    disable = false,
    ...restProps
  } = props;
  const [field, meta, helpers] = useField<string | string[]>(name);
  const { setValue } = helpers || {};
  const [isFocus, setIsFocus] = useState(false);
  const insets = useSafeAreaInsets();

  const flattenedLabelStyle = StyleSheet.flatten(labelTextStyle) || {};
  const labelFontSize =
    flattenedLabelStyle?.fontSize || styles.labelStyle.fontSize;
  const labelTopPosition = -labelFontSize * 0.8;
  const flatttenedContainerStyle = StyleSheet.flatten(containerStyle) || {};

  const borderColor = (meta.error && meta.error.length > 0) ? colors.error : isFocus ? colors.secondary : colors.backgroundTertiary;

  const renderSingleChoiceItem = (item: DropDownOptionsProps) => {
    const isSelected = field?.value === item?.value;
    return (
      <View
        style={[
          styles.item,
          {
            ...(isSelected
              ? { backgroundColor: hexToRgbaWithOpacity(colors.primary) }
              : {}),
          },
        ]}
      >
        <Text
          style={[
            styles.textItem,
            {
              color: colors.surface,
            },
            dropdownTextStyles,
          ]}
        >
          {item[labelField]}
        </Text>
      </View>
    );
  };

  const renderMultipleChoiceItem = (item: DropDownOptionsProps) => {
    const isSelected =
      Array.isArray(field?.value) &&
      field?.value?.some((_value: string | number) => _value === item?.value);
    return (
      <View
        style={[
          styles.item,
          {
            ...(isSelected
              ? { backgroundColor: hexToRgbaWithOpacity(colors.primary) }
              : {}),
          },
        ]}
      >
        <Text
          style={[
            styles.textItem,
            {
              color: colors.surface,
            },
            dropdownTextStyles,
          ]}
        >
          {item[labelField]}
        </Text>
      </View>
    );
  };

  const renderSelectedItem = (item: any, unSelect?: (_item: any) => void) => {
    return (
      <ASButton
        style={[
          styles.multipleSelectionButton,
          { borderColor: borderColor },
        ]}
        onPress={() => unSelect?.(item)}
      >
        <ASText style={{}}>{item.label}</ASText>
      </ASButton>
    );
  };

  const _onChangeDropDownField = (item: DropDownOptionsProps) => {
    setValue?.(item?.[valueField]);
    onSelect?.(item); // Trigger the onSelect callback if provided
    onChange?.(item?.[valueField]); // Trigger onChange event if provided
  };

  const _onChangeMultipleDropDownField = (item: string[]) => {
    setValue?.(item);
    onSelect?.(item); // Trigger the onSelect callback if provided
    onChange?.(item); // Trigger onChange event if provided
  };

  return (
    <View
      testID={`view-${testId}`}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor
        },
        flatttenedContainerStyle,
        { alignItems: "stretch", flexDirection: "column" },
        {
          /* Need to have this logic beacuse the DropDown has extra padding so it always a bit bigger to other widget even though they have the same padding
                      Solution is to subtract 1 pixel from the top and bottom padding to compensate for the DropDown extra padding
                    */
          paddingTop:
            typeof flatttenedContainerStyle?.paddingTop === "number" &&
            flatttenedContainerStyle.paddingTop > 0
              ? flatttenedContainerStyle.paddingTop - 1
              : 0,
          paddingBottom:
            typeof flatttenedContainerStyle?.paddingBottom === "number" &&
            flatttenedContainerStyle.paddingBottom > 0
              ? flatttenedContainerStyle.paddingBottom - 1
              : 0,
        },
      ]}
      id={id}
    >
      {!isMultiChoices ? (
        <Dropdown
          testID={`dropdown-${testId}`}
          style={styles.dropdown}
          containerStyle={Platform.OS === 'android' ? { marginTop: -insets.top, padding: 15 } : undefined}
          placeholderStyle={[
            styles.placeholderStyle,
            placeholderTextStyles,
            {
              ...(flatttenedContainerStyle?.alignItems === "center" && {
                textAlign: "center",
              }),
            },
          ]}
          inputSearchStyle={styles.inputSearchStyle}
          disable={disable}
          iconStyle={[styles.iconStyle, iconStyles]}
          search={search}
          maxHeight={300}
          value={field?.value}
          searchPlaceholder={searchPlaceholder}
          // renderLeftIcon={renderLeftIcon}
          // renderItem={renderSingleChoiceItem}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          // renderRightIcon={()=><DownIcon color={iconColor}/>}
          {...restProps}
          selectedTextStyle={[
            styles.selectedTextStyle,
            {
              color: disable ? colors.backgroundTertiary : colors.surface,
            },
            selectedTextStyle,
          ]}
          data={options || []}
          onChange={_onChangeDropDownField}
          labelField={labelField}
          valueField={valueField}
          mode="auto"
          
        />
      ) : (
        <MultiSelect
          testID={`dropdownMultipleSelect-${testId}`}
          style={styles.dropdown}
          placeholderStyle={[styles.placeholderStyle, placeholderTextStyles]}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={[styles.iconStyle, iconStyles]}
          search={search}
          maxHeight={300}
          containerStyle={Platform.OS === 'android' ? { marginTop: -insets.top, padding: 15 } : undefined}
          value={field?.value || []}
          searchPlaceholder={searchPlaceholder}
          renderLeftIcon={renderLeftIcon}
          renderItem={renderMultipleChoiceItem}
          renderSelectedItem={renderSelectedItem}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          renderRightIcon={() => <DownIcon color={iconColor} />}
          {...restProps}
          selectedTextStyle={[
            styles.selectedTextStyle,
            {
              color: disable ? '#999999' : colors.surface,
            },
            selectedTextStyle,
          ]}
          data={options || []}
          onChange={_onChangeMultipleDropDownField}
          labelField={labelField}
          valueField={valueField}
          disable={disable}
        />
      )}

      {!!label && !!field.value && (
        <ASText
          style={[
            styles.labelStyle,
            {
              top: labelTopPosition,
              left: 12,
              backgroundColor: flatttenedContainerStyle?.backgroundColor,
              paddingHorizontal: 2
            },
            labelTextStyle,
            {
              color: !!meta.error ? colors.error : isFocus ? colors.secondary : colors.onTertiary,
            }
          ]}
          testID={`label-${testId}`}
        >
          {label}
        </ASText>
      )}

      {isOverlayEnabled && <ASOverlay testId={`dropdownOverlay-${testId}`}/>}
    </View>
  );
};

export default ASDropDown;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    position: "relative",
    width: "100%",
  },
  dropdown: {
    minWidth: isAndroid ? 60 : "auto",
  },
  item: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 10,
    paddingHorizontal: 2,
  },
  selectedTextStyle: {
    flex: 1,
    fontSize: isAndroid ? 10 : 12,
    paddingRight: isAndroid ? 0 : 30,
    alignSelf: "center",
    paddingVertical: isAndroid ? 4 : 10,
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
    position: "absolute",
  },
  multipleSelectionButton: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
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
