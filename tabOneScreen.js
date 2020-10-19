import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    Platform,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import OrderItem from '././component/orderItem';
import * as orderActions from '././store/actions/orders';

const TabOne = props => {
    const [isLoading, setIsLoading] = useState(false);
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true);
        dispatch(ordersActions.fetchOrders()).then(() => {
            setIsLoading(false);
        });
    }, [dispatch]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    if (orders.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No order found, maybe start ordering some products?</Text>
            </View>
        );
    }


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
