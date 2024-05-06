import React from 'react'
import ASTextField, {ASTextFieldProps} from "../textField";

export type ASPasswordTextFieldProps = ASTextFieldProps & {}

const ASPasswordTextField = (props: ASPasswordTextFieldProps) => {
    const {} = props

    return (
        <ASTextField
            secureTextEntry={true}
            {...props}
        />
    )
}

export default ASPasswordTextField;
