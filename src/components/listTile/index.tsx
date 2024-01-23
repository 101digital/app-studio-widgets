import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from "../../utils/colors";

interface ASListTileProps {
    title: string;
    subtitle?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onPress?: () => void;
}

const ASListTile: React.FC<ASListTileProps> = (props: ASListTileProps) => {
    const {
        title,
        subtitle,
        leadingIcon,
        trailingIcon,
        onPress,
    } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {leadingIcon && <View style={styles.leadingIcon}>{leadingIcon}</View>}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
                {trailingIcon && <View style={styles.trailingIcon}>{trailingIcon}</View>}
            </View>
        </TouchableOpacity>
    );
};

export default ASListTile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray80,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
    },
    leadingIcon: {
        marginRight: 16,
    },
    trailingIcon: {
        marginLeft: 16,
    },
});

/*

                        <ASListTile title={item?.label} subtitle={item?.id}
                            leadingIcon={
                                <Icon name="user-circle-o"
                                      size={30}
                                      color="theme.colors.primaryIconColor"/>
                            }
                            trailingIcon={<Icon name="gear" size={30} color="theme.colors.primaryIconColor"/>}


                          <ASListView data={[{id: '1', label: 'Item 1'},
                        {id: '2', label: 'Item 2'},
                        {id: '3', label: 'Item 3'},]} renderItem={({item}) => (
                        <ASListTile title={item?.label} subtitle={item?.id}
                                    leadingIcon={
                                        <Icon name="user-circle-o"
                                              size={30}
                                              color="theme.colors.primaryIconColor"/>
                                    }
                                    trailingIcon={<Icon name="gear" size={30} color="theme.colors.primaryIconColor"/>}
                            />
                        )}/>
* */
