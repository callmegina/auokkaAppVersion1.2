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


const ProductDetail = props => {

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
                            <Image source={require('../assets/bread.png')} style={styles.img} />
                            <Image source={require('../assets/milk.png')} style={styles.img} />

                        </Swiper>

                        <View style={styles.midContainer} >
                            <Card>
                                <CardItem>
                                    <Text>{props.description}</Text>
                                </CardItem>

                                <View style={styles.buttonStyle}>
                                    <Button small rounded transparent


                                        onPress={() => props.ShowHideComponent()}
                                        style={{
                                            width: 200,
                                            backgroundColor: '#60c73a',
                                        }}>
                                        <Text style={{ color: 'white' }}>规格</Text>
                                    </Button>

                                    <Button small rounded transparent
                                        onPress={() => props.ShowHideComponent()}
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
                </ScrollView>
            </View>
        </View >

    )
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

export default ProductDetail;