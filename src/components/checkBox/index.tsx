import React, {useState} from 'react';
import {View} from  'react-native';
import CheckBox from '@react-native-community/checkbox';
import {colors} from "app-studio-widgets/src/utils/colors";

type ASCheckBox = {
    onChange?: (value: boolean) => void
}

const ASCheckBox: React.FC<ASCheckBox> = (props: ASCheckBox) => {
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
            tintColor={colors.activeInputBorderColor}
            lineWidth={2}

            //Android Only Props
            tintColors={{ true: colors.activeInputBorderColor, false:colors.gray400 }}
            {...restProps}
        />
    )
}

export default ASCheckBox
