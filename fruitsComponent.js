import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image, FlatList
} from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './component/productItem';
import * as cartActions from './store/actions/cart';

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import { useNavigation, navigation } from '@react-navigation/native';


const FruitsComponent = props => {
    const navigation = useNavigation();
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.productId}
            renderItem={itemData => (
                <ProductItem
                    title={itemData.item.title}
                    price={itemData.item.price}
                    amount={itemData.item.amount}
                    onViewDetail={() => {
                        navigation.navigate('Product Detail Screen')
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }}



                />
            )}


        />

    )


};




export default FruitsComponent;






