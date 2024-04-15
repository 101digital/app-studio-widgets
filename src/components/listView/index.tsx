import React from 'react';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';

export type ASListViewProps = FlatListProps<any> & {
    data: any[]
    renderItem: ListRenderItem<React.ReactNode>
}

const ASListView: React.FC<ASListViewProps> = (props: ASListViewProps) => {
    const {
        data,
        renderItem,
        ...restProps
    } = props;

    const keyExtractor = (item: any, index: number) => {
        return `${item?.id || item?.label || ''} - ${index}`
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            {...restProps}
        />
    );
};


export default ASListView;


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
