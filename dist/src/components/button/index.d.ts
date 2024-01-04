import React from 'react';
import { TouchableOpacityProps } from 'react-native';
interface ButtonProps extends TouchableOpacityProps {
    label: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
