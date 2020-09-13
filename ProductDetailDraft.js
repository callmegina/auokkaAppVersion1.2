import React, { Component, useEffect } from 'react'
import {
    Image, View, ImageBackground,
    StyleSheet, TouchableOpacity,
    ScrollView,
    Dimensions, FlatList
} from 'react-native';

import FruitComponent from './fruitsComponent';
import { useSelector } from 'react-redux';

import * as cartActions from './store/actions/cart';
import ProductItem from './component/productItem';
import Product from './models/product';



const ProductDetailDraft = props => {


    const availableProducts = useSelector(state => state.products.availableProducts);


    const productID = props.navigate.getParam('productID', 'default data');

    const productTitle = navigationData.navigation.getParam('productTitle')

    const selectedProduct = availableProducts.find(products => products.id === productID)
    useEffect(() => {
        props.navigation.setParams({ productTitle: selectedProduct.title });

    }, [selectedProduct]);


    return (

        <ScrollView>
            <View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedProduct.items.map(item => (
                    <ListItem key={item}>{item}</ListItem>
                ))}
            </View>
        </ScrollView>

    )
}

ProductDetailDraft.navigationOptions = navigationData => {
    const productID = navigationData.navigation.getParam('productID');
    const produtTitle = navigationData.navigation.getParam('productTitle');

    return {
        headerTitle: produtTitle,
    };
};

export default ProductDetailDraft;
