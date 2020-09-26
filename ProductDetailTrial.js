import React, { Component } from 'react';
import {
    Image, View, ImageBackground,
    StyleSheet, TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';


import {
    Container, Header, Content,
    Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';;

const { width } = Dimensions.get('window');
const height = width * 10 / 300;



export default class ProductDetailTrial extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            counter: 0,
            button: true
        };
    }
    IncrementItem = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    DecrementItem = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
            this.setState({ show: false });
            button: !this.state.button
        } else {
            this.setState({ show: true });
            button: !this.state.button
        }
    };


    render() {
        return (


            <View style={styles.container} >
                <View style={styles.topContainer} >
                    <ScrollView>
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
                                            onPress={this.ShowHideComponent}
                                            style={{
                                                width: 200,
                                                backgroundColor: '#60c73a',
                                            }}>
                                            <Text style={{ color: 'white' }}>规格</Text>
                                        </Button>

                                        <Button small rounded transparent
                                            onPress={this.ShowHideComponent}
                                            style={{
                                                width: 200,
                                                backgroundColor: '#60c73a',
                                                alignItems: 'center'
                                            }}>
                                            <Text style={{ color: 'white' }}>介绍</Text>
                                        </Button>
                                    </View>

                                    {this.state.show ? (
                                        <View style={{
                                            borderColor: '#60c73a',
                                            borderWidth: 2
                                        }}>
                                            <CardItem ><Text>面包</Text></CardItem>
                                            <CardItem><Text>原价￥100</Text></CardItem>
                                            <CardItem><Text
                                                style={{
                                                    color: 'red'
                                                }}>促销价￥ 50</Text></CardItem>
                                        </View>
                                    ) : <View style={{

                                    }} >
                                            <Text>火锅</Text>
                                        </View>}

                                </Card>
                            </View>

                        </Container>
                    </ScrollView>
                </View>


                <View style={styles.bottomContainer}>
                    <View style={{
                        alignSelf: 'flex-end',

                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Feather name='shopping-cart' color='#60c73a' size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secondDivTwoThree}>
                        <View style={styles.addOrMinusBtn}>
                            <TouchableOpacity onPress={() => this.DecrementItem()} >
                                <Feather name='minus-circle' color='#60c73a' size={30} />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 17,
                                marginLeft: 7,
                                marginRight: 7,
                            }}>{this.state.counter}</Text>
                            <TouchableOpacity onPress={() => this.IncrementItem()} >
                                <Feather name='plus-circle' color='#60c73a' size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.iconStyle}>

                            <Button rounded
                                onPress={() => this.props.navigation.navigate('ShoppingCart')}
                                style={styles.btnStyle}>
                                <Icon name='cart' size={15} />
                                <Text>加入购物车</Text>
                            </Button>
                        </View>
                    </View>
                </View >
            </View >

        )
    }

}
const styles = StyleSheet.create({
    buttonForItem: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    secondDivTwoThree: {
        borderColor: 'white',
        backgroundColor: '#f2f2f2',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addOrMinusBtn: {
        flexDirection: 'row',
        margin: 10
    },

    buttonStyle: {
        flexDirection: 'row',
        marginBottom: 8,
        alignSelf: 'center',
        alignContent: 'space-around',
    },

    img: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 5,
    },
    swiper: {
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    },
    topContainer: {
        flex: 5
    },
    midContainer: {
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        flex: 3,
        borderColor: 'white'
    },
    bottomContainer: {
        backgroundColor: 'white',
        marginBottom: 14

    },
    btnStyle: {
        marginRight: 20,
        marginTop: 10
    }
});