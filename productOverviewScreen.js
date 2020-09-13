import React, { Component } from 'react'
import {
    Image, View, ImageBackground,
    StyleSheet, TouchableOpacity,
    ScrollView,
    Dimensions, FlatList
} from 'react-native';

import {
    Container, Header, Content,
    Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

import FruitComponent from './fruitsComponent';
import { useSelector, useDispatch } from 'react-redux';
const { width } = Dimensions.get('window');
const height = width * 10 / 300;


import * as cartActions from './store/actions/cart';
import ProductItem from './component/productItem';

const ProductsOverviewScreen = props => {

    const navigation = useNavigation();

    const availableProducts = useSelector(state => state.products.filteredProducts);
    const displayedProductrs = availableProducts.filter(
        products => products.id.indexOf(productId) >= 0
    )
    const products = useSelector(state => state.products.availableProducts);


    return (

        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <ProductItem
                        title={itemData.item.title}
                        origPrice={itemData.item.origPrice}
                        amount={itemData.item.amount}
                    />
                )}
            />
        </View>
    )
}
export default ProductsOverviewScreen;
