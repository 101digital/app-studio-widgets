import React from 'react';
import { FlatListProps, ListRenderItem } from 'react-native';
export type ASListViewProps = FlatListProps<any> & {
    data: any[];
    renderItem: ListRenderItem<React.ReactNode>;
    loading?: boolean | boolean[] | undefined;
};
declare const ASListView: React.FC<ASListViewProps>;
export default ASListView;
