import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image, ScrollView
} from "react-native";

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import { render } from "react-dom";

const ProductItem = props => {

    return (
        <View>
            <ScrollView>
                <Card>
                    <CardItem >
                        <View style={styles.secondDivTwo}>
                            <View style={styles.secondDivTwoOne}>

                                <Image style={styles.image}
                                    source={{ uri: props.image }}
                                    style={{
                                        width: 60,
                                        height: 65
                                    }}
                                />

                            </View>

                            <View style={styles.secondDivTwoTwo}>
                                <TouchableOpacity onPress={props.onViewDetail}>
                                    <Text>{props.title}</Text>
                                </TouchableOpacity>
                                <View style={{
                                    padding: 12,
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: 30,
                                    alignSelf: 'flex-start',
                                    width: '95%',
                                    marginTop: 5,
                                }} >

                                    <Text>{props.netWeight}</Text>
                                </View>
                            </View>

                            <View style={styles.secondDivTwoThree}>
                                <View style={styles.addOrMinusBtn}>

                                    <TouchableOpacity onPress={props.onRemove}>
                                        <Feather name='minus-circle' color='#60c73a' size={22} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 15,
                                        paddingLeft: 5,
                                        paddingRight: 5

                                    }}>  quantity </Text>
                                    <TouchableOpacity onPress={props.onAdd}>
                                        <Feather name='plus-circle' color='#60c73a' size={22} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-end'
                                }}>
                                    <Text style={{
                                        color: 'red',
                                    }}>${props.price}</Text>
                                    <TouchableOpacity onPress={props.onAddToCart}><Text>加入购物车</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({



    footer: {
        height: 100,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
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
        flex: 11,
        paddingLeft: 10,
    },

    secondDivTwoThree: {
        borderColor: 'white',
        flex: 8,
    },

    addOrMinusBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    footer: {
        height: 60,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        height: '100%',

    },
    container: {
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
    },
    image: {
        width: '30%',
        height: '40%'
    }

});

export default ProductItem;