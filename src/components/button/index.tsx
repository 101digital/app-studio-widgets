import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} {...props}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {

    },
});

export default Button;
