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
                            <Image
                                source={require('../assets/milk.png')}
                                style={{ width: 50, height: 60 }}
                            />
                        </View>

                        <View style={styles.secondDivTwoTwo}>
                            <Text>{props.title}</Text>
                            <View style={{
                                padding: 12,
                                backgroundColor: '#f2f2f2',
                                borderRadius: 30,
                                alignSelf: 'flex-start',
                                width: '95%',
                                marginTop: 5,
                            }} >
                                <Text>{props.amount}</Text>
                            </View>
                        </View>

                        <View style={styles.secondDivTwoThree}>
                            <View style={styles.addOrMinusBtn}>
                                <Feather name='minus-circle' color='#60c73a' size={26} />
                                <Text style={{
                                    fontSize: 15,
                                }}>{props.quantity}</Text>
                                <Feather name='plus-circle' color='#60c73a' size={26} />
                            </View>
                            <View style={{
                                alignSelf: 'flex-end'
                            }}>
                                <Text style={{
                                    color: 'red',
                                }}>{props.price}</Text>
                                <TouchableOpacity ><Text>{props.onRemove}移除</Text></TouchableOpacity>


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
});

export default CartItem;
