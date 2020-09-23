import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image, FlatList,
    ScrollView, TextInput

} from "react-native";

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert
} from 'native-base';

import { Feather } from '@expo/vector-icons';


import { useNavigation, navigation } from '@react-navigation/native';
import Product from "./models/product";
import CartItem from './component/cartItem';


import * as cartActions from './store/actions/cart';
import { useSelector, useDispatch } from 'react-redux';

const CartScreen = props => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                productQuantity: state.cart.items[key].productQuantity,
                productAmount: state.cart.items[key].productAmount,
                productImage: state.cart.items[key].productImage,
            });
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );
    });
    const dispatch = useDispatch();




    return (

        <View style={styles.container}>

            <ScrollView>
                <View style={styles.firstSection}>
                    <View style={styles.firstSectionOne}>
                        <Text style={{ fontWeight: "bold" }} >收件地址</Text>
                    </View>
                    <TouchableOpacity style={styles.fristSectionTwo}
                        onPress={() => navigation.navigate('AddShipAddress',
                            { screen: 'AddShipAddress' })}
                        style={styles.btnShipAddress}>
                        <Text style={{ paddingLeft: 9 }} >点击选择收件地址</Text>
                        <Icon name="arrow-forward"
                            style={{
                                color: 'grey',
                            }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.secondSection}>
                    <View style={styles.secondSectionOne}>
                        <Text style={{
                            fontWeight: "bold",
                            marginTop: 10,
                            marginLeft: 10,
                        }}>优惠码</Text>
                    </View>
                    <TouchableOpacity style={styles.secondSectionTwo}>
                        <TextInput
                            style={{
                                height: 55,
                                marginLeft: 10
                            }}
                            placeholder="可以在此处填写优惠码"

                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.secondDivTwo}>
                    <View style={styles.secondDivTwoOne}>
                        <FlatList
                            data={cartItems}
                            keyExtractor={item => item.productId}
                            renderItem={itemData => (
                                <CartItem

                                    productTitle={itemData.item.productTitle}
                                    productQuantity={itemData.item.productQuantity}
                                    productAmount={itemData.item.productAmount}
                                    productPrice={itemData.item.productPrice}
                                    productImage={itemData.item.productImage}


                                    onRemove={() => {
                                        dispatch(cartActions.decreaseCartQuantity(itemData.item.productId));
                                    }}

                                    onAdd={() => {
                                        dispatch(cartActions.increaseCartQuantity(itemData.item.productId));
                                    }}


                                />
                            )}
                        />

                    </View>
                </View>




                <View style={styles.footer}>

                    <View style={styles.footerPrice}><Text>总计 ￥2000 </Text></View>
                    <View style={styles.btncontainer}>
                        <TouchableOpacity>
                            <Text style={styles.text}>
                                提交</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </View >


    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    btnShipAddress: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    firstSection: {
        backgroundColor: 'white',
        marginBottom: 10,
    },

    firstSectionOne: {
        margin: 10,
    },
    fristSectionTwo: {
        backgroundColor: 'white',
        marginBottom: 10,


    },

    secondSection: {
        backgroundColor: 'white',
        marginBottom: 10,
    },



    secondDivTwoTwo: {
        borderColor: 'white',
        flex: 12,
        paddingLeft: 10,
    },

    secondDivTwoThree: {
        borderColor: 'white',
        flex: 7,
    },

    addOrMinusBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    footer: {

        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },

    btncontainer: {
        alignItems: 'flex-end',
        borderRadius: 30,

    },
    text: {
        color: '#60c73a',
        padding: 25,
        borderColor: 'white',
        backgroundColor: 'white',
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 10,
        borderRadius: 16
    }
});


export default CartScreen;





