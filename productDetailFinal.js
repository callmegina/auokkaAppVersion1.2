import React, { Component } from 'react';
import {
    Image, View, ImageBackground,
    StyleSheet, TouchableOpacity,
    ScrollView,
    Dimensions,
    FlatList
} from 'react-native';


import {
    Container, Header, Content,
    Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';;

const { width } = Dimensions.get('window');
const height = width * 10 / 300;
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './component/productItem';
import * as cartActions from './store/actions/cart';
import { useNavigation, navigation, params } from '@react-navigation/native';


const ProductDetailFinal = props => {
    //const productId = props.navigation.getParam('productId');

    /*  const editedProduct = useSelector(state =>
         state.products.availableProducts.find(prod => prod.id === productId)
     ); */



    return (



        <ScrollView>
            <View style={styles.container} >
                <View style={styles.topContainer} >

                    <Container>

                        <Swiper
                            style={styles.swiper}
                            height={200}
                            loop={true}
                            autoplay={true}
                            autoplayTimeout={5}
                            horizontal={true}
                            paginationStyle={{ bottom: 10 }}
                            showsButtons={false}
                            showsPagination={true}
                        >
                            <Image source={require('./assets/bread.png')} style={styles.img} />
                            <Image source={require('./assets/milk.png')} style={styles.img} />

                        </Swiper>



                        <View style={styles.midContainer} >
                            <Card>
                                <CardItem>
                                    <Text>特级面包</Text>
                                </CardItem>


                                <View style={styles.buttonStyle}>
                                    <Button small rounded transparent

                                        style={{
                                            width: 200,
                                            backgroundColor: '#60c73a',
                                        }}>
                                        <Text style={{ color: 'white' }}>规格</Text>
                                    </Button>

                                    <Button small rounded transparent

                                        style={{
                                            width: 200,
                                            backgroundColor: '#60c73a',
                                            alignItems: 'center'
                                        }}>
                                        <Text style={{ color: 'white' }}>介绍</Text>
                                    </Button>
                                </View>


                            </Card>
                        </View>

                    </Container>

                </View>


                <View style={styles.bottomContainer}>
                    <View style={{
                        alignSelf: 'flex-end',

                    }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                            <Feather name='shopping-cart' color='#60c73a' size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secondDivTwoThree}>
                        <View style={styles.addOrMinusBtn}>
                            <TouchableOpacity  >
                                <Feather name='minus-circle' color='#60c73a' size={30} />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 17,
                                marginLeft: 7,
                                marginRight: 7,
                            }}>counter</Text>
                            <TouchableOpacity  >
                                <Feather name='plus-circle' color='#60c73a' size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.iconStyle}>

                            <Button rounded
                                onPress={() => props.navigation.navigate('ShoppingCart')}
                                style={styles.btnStyle}>
                                <Icon name='cart' size={15} />
                                <Text>加入购物车</Text>
                            </Button>
                        </View>
                    </View>
                </View >
            </View >
        </ScrollView>
    )
}




const styles = StyleSheet.create({

});

export default ProductDetailFinal;