import React, {useState,useContext} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {ThemeContext} from "../../context/theme-context";

export type ASCheckBoxProps = {
    onChange?: (value: boolean) => void
}

const ASCheckBox: React.FC<ASCheckBoxProps> = (props: ASCheckBoxProps) => {
    const {colors} = useContext(ThemeContext);
    const {onChange, ...restProps} = props
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)

    const onValueChange = (newValue: boolean) => {
        setToggleCheckBox(newValue)
        onChange?.(newValue)
    }

    return (
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={onValueChange}

            //IOS Only Props
            tintColor={colors.onSecondaryFixedVariant}
            lineWidth={2}

            //Android Only Props
            tintColors={{ true: colors.onSecondaryFixedVariant, false:colors.onSurface }}
            {...restProps}
        />
    )
}

export default ASCheckBox
