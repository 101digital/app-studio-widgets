import React from 'react';
import {FlatListProps, ListRenderItem, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler'
import LoadingIndicator from "../loadingIndicator";

export type ASListViewProps = FlatListProps<any> & {
    data: any[]
    renderItem: ListRenderItem<React.ReactNode>
    loading?: boolean | boolean[] | undefined
    accessibilityLabel?: string;
    testId?: string
}

const ASListView: React.FC<ASListViewProps> = (props: ASListViewProps) => {
    const {
        data,
        renderItem,
        loading,
        testId='ASListView',
        ...restProps
    } = props;

    const keyExtractor = (item: any, index: number) => {
        return `${item?.id || item?.label || ''} - ${index}`
    }

    return (
        <>
            <LoadingIndicator style={styles.loadingIndicator} loading={loading} testID={`loadingView-${testId}`}/>
            <FlatList
                testID={`list-${testId}`}
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                {...restProps}
            />
        </>
    );
};

export default ASListView;

const styles = StyleSheet.create({
    loadingIndicator: {
        marginVertical: 8
    }
})


// Note: ASListView example
/*
             <ASListView data={[{id: '1', title: 'Item 1'},
                        {id: '2', title: 'Item 2'},
                        {id: '3', title: 'Item 3'},]}
                numColumns={3}
                renderItem={({item}: { item: any }) => {
                    return (
                        <ASColumn  style={{alignItems:'center'}}>
                            <ASText style={{flex:1, backgroundColor:'red',}}>{item?.title}</ASText>
                        </ASColumn>
                    )
                }}/>
* */
