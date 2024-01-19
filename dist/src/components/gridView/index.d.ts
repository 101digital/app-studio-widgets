import React from 'react';
import { ListRenderItem } from 'react-native';
import { ASListViewProps } from "../listView";
export declare type ASGridViewProps = ASListViewProps & {
    data: any[];
    renderItem: ListRenderItem<React.ReactNode>;
    numColumns: number;
};
declare const ASGridView: React.FC<ASGridViewProps>;
export default ASGridView;
