import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image, FlatList
} from "react-native";




import { useSelector, useDispatch, useState } from 'react-redux';
import ProductItem from './component/productItem';
import * as cartActions from './store/actions/cart';

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import { render } from "react-dom";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const SeafoodComponent = (props) => {
    const navigation = useNavigation();
    const products = useSelector(state => state.products.availableProducts);

    const filteredProducts = products.filter(item => item.type === '乳制品');
    const dispatch = useDispatch();


    const productItems = useSelector(state => {
        const transformedProductItems = [];
        for (const key in state.products.items) {
            transformedProductItems.push({
                productId: key,
                productTitle: state.filteredProducts.items[key].title,
                productPrice: state.filteredProducts.items[key].price,
                productAmount: state.filteredProducts.items[key].amount,
                productImage: state.filteredProducts.items[key].imageUrl,
                productSum: state.filteredProducts.items[key].sum
            });
        }
        return transformedProductItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    });


    const editProductHander = (id) => {
        navigation.navigate('Detail Final', { productId: id });
    }


    return (
        <FlatList
            data={filteredProducts}
            keyExtractor={item => item.productId}
            renderItem={itemData => (
                <ProductItem
                    title={itemData.item.title}
                    price={itemData.item.price}
                    image={itemData.item.imageUrl}

                    netWeight={itemData.item.netWeight}
                    onViewDetail={() => {
                        editProductHander(itemData.item.id);
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}

                    onRemove={() => {
                        dispatch(cartActions.decreaseCartQuantity(itemData.item.productId));
                    }}

                    onAdd={() => {
                        dispatch(cartActions.increaseCartQuantity(itemData.item.productId));
                    }}
                />
            )}
        />
    )
}


export default SeafoodComponent;
