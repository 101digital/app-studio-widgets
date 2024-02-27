import React from 'react';
import { FlatListProps, ListRenderItem } from 'react-native';
export type ASListViewItemProps = {
    label: string;
    id?: string;
};
export type ASListViewProps = FlatListProps<any> & {
    data: ASListViewItemProps[];
    renderItem: ListRenderItem<React.ReactNode>;
};
declare const ASListView: React.FC<ASListViewProps>;
export default ASListView;
