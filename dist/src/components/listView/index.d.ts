import React from 'react';
import { ListRenderItem, FlatListProps } from 'react-native';
export declare type ASListViewProps = FlatListProps<any> & {
    data: any[];
    renderItem: ListRenderItem<React.ReactNode>;
};
declare const ASListView: React.FC<ASListViewProps>;
export default ASListView;
