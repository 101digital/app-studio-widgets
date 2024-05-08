import React, {FC} from 'react'
import ASTextField, {ASTextFieldProps} from "../textField";

export type ASPasswordTextFieldProps = ASTextFieldProps & {}

const ASPasswordTextField: FC<ASPasswordTextFieldProps> = (props: ASPasswordTextFieldProps) => {
    const {} = props

    return (
        <ASTextField
            secureTextEntry={true}
            {...props}
        />
    )
}

export default ASPasswordTextField;
