import React from 'react';
import {ListRenderItem, StyleSheet, View} from 'react-native';
import ASListView, {ASListViewProps} from "../listView";

export type ASGridViewProps = ASListViewProps & {
    data: any[]
    renderItem: ListRenderItem<React.ReactNode>
    numColumns: number
}

const ASGridView: React.FC<ASGridViewProps> = (props: ASGridViewProps) => {
    const {
        data,
        renderItem,
        numColumns = 3,
        ...restProps
    } = props;

    const renderGridItem = ({item}: { item: any }) => {
        return (
            <View style={styles.gridItem}>
                {renderItem?.(item)}
            </View>
        );
    };

    const keyExtractor = (item: any, index: number) => {
        return `${item.id || item.name || item.label || ''} - ${index}`
    }

    return (
        <ASListView
            data={data}
            renderItem={renderGridItem}
            keyExtractor={keyExtractor}
            numColumns={numColumns}
            {...restProps}
        />
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        // margin: 8,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 8,
        backgroundColor: 'red'
    },
});

export default ASGridView;
