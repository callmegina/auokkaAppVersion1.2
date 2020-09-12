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


const FruitsComponent = props => {

    const products = useSelector(state => state.products.availableProducts);


    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    title={itemData.item.title}
                    origPrice={itemData.item.origPrice}
                    amount={itemData.item.amount}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductsOverviewScreen', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        });
                    }}

                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct));
                    }}
                />


            )}
        />

    );
};

FruitsComponent.navigationOptions = navData => {
    const { navigation } = navData;
    return {
        headerTitle: navData.navigation.getParam('productId')
    };
};


export default FruitsComponent;






