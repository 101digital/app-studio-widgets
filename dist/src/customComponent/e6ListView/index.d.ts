import React from 'react';
import { FlatListProps, ListRenderItem } from 'react-native';
export type E6ASListViewProps = FlatListProps<any> & {
    data: any[];
    renderItem: ListRenderItem<React.ReactNode>;
    loading?: boolean | boolean[] | undefined;
};
declare const E6ASListView: React.FC<E6ASListViewProps>;
export default E6ASListView;
