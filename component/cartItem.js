import React from "react";
import {
    View, Button, Text, StyleSheet
    , TextInput, TouchableOpacity, Image,
    ScrollView
} from "react-native";

import {
    Card, CardItem,
    Icon, Container
} from 'native-base';

import { Feather } from '@expo/vector-icons';


const CartItem = props => {
    return (
        <View style={styles.container}>
            <Card>
                <CardItem >
                    <View style={styles.secondDivTwo}>
                        <View style={styles.secondDivTwoOne}>
                            <Image style={styles.image}
                                source={{ uri: props.productImage }}
                                style={{
                                    width: 50,
                                    height: 50
                                }}
                            />

                        </View>

                        <View style={styles.secondDivTwoTwo}>
                            <Text>{props.productTitle}</Text>
                            <View style={{
                                padding: 12,
                                backgroundColor: '#f2f2f2',
                                borderRadius: 30,
                                alignSelf: 'flex-start',
                                width: '95%',
                                marginTop: 5,
                            }} >
                                <Text>{props.productNetWeight}</Text>
                            </View>
                        </View>

                        <View style={styles.secondDivTwoThree}>
                            <View style={styles.addOrMinusBtn}>
                                <TouchableOpacity onPress={props.onRemove}>
                                    <Feather name='minus-circle' color='#60c73a' size={26} />
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                }}>{props.productQuantity}</Text>
                                <TouchableOpacity onPress={props.onAdd}>
                                    <Feather name='plus-circle' color='#60c73a' size={26} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                alignSelf: 'flex-end'
                            }}>
                                <Text style={{
                                    color: 'red',
                                }}>单价：￥{props.productPrice}</Text>
                                <TouchableOpacity >
                                    <Text>总共：￥{props.productSum}</Text></TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </CardItem>
            </Card>

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

    secondDivTwo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
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
        height: 50,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 236
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
    ,
    image: {
        width: '30%',
        height: '40%'
    }

});

export default CartItem;