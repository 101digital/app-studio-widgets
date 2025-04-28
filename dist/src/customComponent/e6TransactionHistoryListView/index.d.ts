import React from "react";
import { FlatListProps, ListRenderItem } from "react-native";
export type E6TransactionHistoryListViewProps = FlatListProps<any> & {
    data: any[];
    renderItem: ListRenderItem<React.ReactNode>;
    loading?: boolean | boolean[] | undefined;
};
declare const E6TransactionHistoryListView: React.FC<E6TransactionHistoryListViewProps>;
export default E6TransactionHistoryListView;
