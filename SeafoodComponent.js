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
import { render } from "react-dom";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const SeafoodComponent = (props) => {


    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    title={itemData.item.title}
                    amount={itemData.item.amount}
                    price={itemData.item.price}
                    onViewDetail={() =>
                        navigation.navigate('Cart Screen')}
                />
            )} />
    )
}


export default SeafoodComponent;
