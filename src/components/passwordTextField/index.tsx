import React, {FC, useState} from 'react'
import {TouchableOpacity} from 'react-native'
import ASTextField, {ASTextFieldProps} from "../textField";
import {ShowPasswordIcon} from "../../assets/icon";

export type ASPasswordTextFieldProps = ASTextFieldProps & {}

const ASPasswordTextField: FC<ASPasswordTextFieldProps> = (props: ASPasswordTextFieldProps) => {
    const {} = props
    const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true)

    const onPressSecureTextEntry = () => {
        setIsSecureTextEntry((prev:boolean) => !prev)
    }

    return (
        <ASTextField
            secureTextEntry={isSecureTextEntry}
            suffixIcon={
                <TouchableOpacity
                    onPress={onPressSecureTextEntry}>
                    <ShowPasswordIcon/>
                </TouchableOpacity>
            }
            {...props}
        />
    )
}

export default ASPasswordTextField;
