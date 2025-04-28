// @ts-nocheck
import React, { useEffect, useState } from "react";
import { FlatListProps, ListRenderItem, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LoadingIndicator from "../../components/loadingIndicator";

export type E6TransactionHistoryListViewProps = FlatListProps<any> & {
  data: any[];
  renderItem: ListRenderItem<React.ReactNode>;
  loading?: boolean | boolean[] | undefined;
};

const E6TransactionHistoryListView: React.FC<
  E6TransactionHistoryListViewProps
> = (props: E6TransactionHistoryListViewProps) => {
  const { data, renderItem, loading, ...restProps } = props;
  const [transactionList, setTransactionList] = useState<any[]>([]);
  const keyExtractor = (item: any, index: number) => {
    return `${item?.id || item?.label || ""} - ${index}`;
  };

  useEffect(() => {
    const transactionData = [];
    if (data) {
      for (const transactionItem of data) {
        if (transactionItem?.transactionEntries) {
          transactionData.push(...transactionItem?.transactionEntries);
        }
      }
      setTransactionList(transactionData);
    } else {
      setTransactionList(data);
    }

    return () => {};
  }, [data]);

  return (
    <>
      <LoadingIndicator style={styles.loadingIndicator} loading={loading} />
      <FlatList
        data={transactionList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        {...restProps}
      />
    </>
  );
};

export default E6TransactionHistoryListView;

const styles = StyleSheet.create({
  loadingIndicator: {
    marginVertical: 8,
  },
});

// Note: E6TransactionHistoryListView example
/*
             <E6TransactionHistoryListView data={[{id: '1', title: 'Item 1'},
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
