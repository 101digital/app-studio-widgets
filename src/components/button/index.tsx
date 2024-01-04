import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    return (
        <TouchableOpacity {...props}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
