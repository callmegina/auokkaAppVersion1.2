import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image, FlatList
} from "react-native";

import { useSelector, useDispatch, useState } from 'react-redux';
import ProductItem from './component/productItem';
import * as cartActions from './store/actions/cart';
//import * as productActions from './store/actions/product';


import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import { useNavigation, navigation } from '@react-navigation/native';


const DiaryComponent = props => {
    const navigation = useNavigation();

    const products = useSelector(state => state.products.availableProducts);

    const filteredProducts = products.filter(item => item.type === '乳制品');
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    console.log(cartTotalAmount)
    const productItems = useSelector(state => {
        const transformedProductItems = [];
        for (const key in state.products.items) {
            transformedProductItems.push({
                productId: key,
                productTitle: state.filteredProducts.items[key].title,
                productPrice: state.filteredProducts.items[key].price,
                productAmount: state.filteredProducts.items[key].amount,
                productImage: state.filteredProducts.items[key].imageUrl,
                productSum: state.filteredProducts.items[key].sum,
                productQuantity: state.filteredProducts.items[key].quantity,
            });

        }
        return transformedProductItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    });


    const dispatch = useDispatch();


    return (
        <FlatList
            data={filteredProducts}
            keyExtractor={item => item.productId}
            renderItem={itemData => (

                <ProductItem
                    pTitle={itemData.item.title}
                    productOriPrice={itemData.item.productOriPrice}
                    productSalePrice={itemData.item.productSalePrice}
                    pImage={itemData.item.imageUrl}
                    pQuantity={itemData.item.quantity}


                    onViewDetail={() => {
                        navigation.navigate('Detail Trial', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title,
                            productPrice: itemData.item.price,
                            productImage: itemData.item.imageUrl,
                            productType: itemData.item.type,
                            productDescription: itemData.item.description,
                            productNetWeight: itemData.item.netWeight,
                            productPrice: itemData.item.price,
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}

                    onRemove={() => {
                        dispatch(cartActions.decreaseProductItemQuantity(itemData.item));
                    }}

                    onAdd={() => {
                        dispatch(cartActions.increaseProductItemQuantity(itemData.item));
                    }}
                />
            )}
        />
    )

};





export default DiaryComponent;
