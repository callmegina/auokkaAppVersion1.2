import React, { Component } from 'react';
import {
    Image, View, ImageBackground,
    StyleSheet, TouchableOpacity,
    ScrollView,
    Dimensions,
    FlatList
} from 'react-native';

import { useSelector } from 'react-redux';
import {
    Container, Header, Content,
    Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';;

const { width } = Dimensions.get('window');
const height = width * 10 / 300;


import ProductDetailItem from './component/productDetailItem';
const ProductDetailFinal = props => {

    const productId = props.route.params.productId;
    console.log(productId);
    /*    const productTitle = props.route.params.productTitle;
       const productPrice = props.route.params.productPrice;
       const productImage = props.route.params.productImage;
       const productType = props.route.params.productType;
       const productDescription= props.route.params.productDescription;
       const productNetWeight = props.route.params.productNetWeight;
       const productPrice = props.route.params.productPrice;
    */


    const products = useSelector(state => state.products.availableProducts);
    const filteredProducts = products.filter(item => item.id === productId);

    return (
        <FlatList
            data={filteredProducts}
            keyExtractor={item => item.productId}
            renderItem={itemData => (
                <ProductDetailItem
                    title={itemData.item.title}

                    price={itemData.item.price}
                    image={itemData.item.imageUrl}
                    description={itemData.item.description}
                    netWeight={itemData.item.netWeight}


                />
            )}
        />

    )
}

export default ProductDetailFinal;