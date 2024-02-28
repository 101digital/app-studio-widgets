var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { FlatList } from 'react-native';
const ASListView = (props) => {
    const { data, renderItem } = props, restProps = __rest(props, ["data", "renderItem"]);
    const keyExtractor = (item, index) => {
        return `${item.id || item.label || ''} - ${index}`;
    };
    return (React.createElement(FlatList, Object.assign({ data: data, renderItem: renderItem, keyExtractor: keyExtractor }, restProps)));
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
