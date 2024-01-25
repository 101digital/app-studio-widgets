import React from 'react';
import { FlatListProps, ListRenderItem } from 'react-native';
export declare type ASListViewItemProps = {
    label: string;
    id?: string;
};
export declare type ASListViewProps = FlatListProps<any> & {
    data: ASListViewItemProps[];
    renderItem: ListRenderItem<React.ReactNode>;
};
declare const ASListView: React.FC<ASListViewProps>;
export default ASListView;
