import React from "react";
import {
    View, Button, Text, StyleSheet,
    FlatList,
    ScrollView
} from "react-native";
import { useSelector } from 'react-redux';
import OrderItem from '././component/orderItem';


const TabOne = props => {
    const orders = useSelector(state => state.orders.orders);

    return (
        <ScrollView>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <OrderItem
                        amount={itemData.item.totalAmount}
                        date={itemData.item.readableDate}
                        items={itemData.item.items}
                    />
                )}
            />
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default TabOne;
