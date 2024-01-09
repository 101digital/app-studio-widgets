import React from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type WrapperDirection = 'row' | 'column';

type WrapProps = {
    children: React.ReactNode;
    direction?: WrapperDirection;
    style?: StyleProp<ViewStyle>;
    itemMargin?: DimensionValue
}

const ASWrapper: React.FC<WrapProps> = (props: WrapProps) => {
    const {children, direction = 'row', style, itemMargin} = props

    return (
        <View style={[styles.container, {flexDirection: direction}, style]}>
            {!!itemMargin ? React.Children.map(children, (child: React.ReactNode, index: number) => (
                <View key={index} style={[styles.item, {margin: itemMargin || 5}]}>
                    {child}
                </View>
            )) : children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        margin: 5,
    },
});

export default ASWrapper;

// NOTE:  ASWrapper Example
/*
                <ASWrapper direction="column" style={{ backgroundColor: 'blue', maxHeight:50 }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Column</ASText>
                </ASWrapper>

                <ASWrapper direction="row" style={{ backgroundColor: 'darkgreen' }}>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                    <ASText style={{color: 'cyan'}}>Test Wrapper Row</ASText>
                </ASWrapper>
* */
