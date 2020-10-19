import React, { useState } from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image, ScrollView
} from "react-native";

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert, ActionSheet
} from 'native-base';

import { Feather } from '@expo/vector-icons';
import { render } from "react-dom";
import { red } from "@material-ui/core/colors";

import { useSelector, useDispatch } from 'react-redux';



export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            productQuantity: 0,
            button: true
        };
    }
    ShowHideComponent = () => {
        if (this.state.show == false) {
            this.setState({ show: true });
            button: this.state.button
        }
    };


    render() {

        return (
            <View>
                <ScrollView>
                    <TouchableOpacity>

                        <Card>
                            <CardItem >
                                <View style={styles.secondDivTwo}>
                                    <View style={styles.secondDivTwoOne}>

                                        <Image style={styles.image}
                                            source={{ uri: this.props.pImage }}
                                            style={{
                                                width: 60,
                                                height: 65
                                            }}
                                        />

                                    </View>

                                    <View style={styles.secondDivTwoTwo}>
                                        <TouchableOpacity onPress={this.props.onViewDetail}>
                                            <Text>{this.props.pTitle}</Text>
                                        </TouchableOpacity>


                                        <Text style={{
                                            textDecorationLine: 'line-through',


                                        }}>原价 ￥ {this.props.productOriPrice}</Text>
                                        <Text style={{
                                            color: 'red'

                                        }}>特价 ￥ {this.props.productSalePrice}</Text>


                                    </View>

                                    <View style={styles.secondDivTwoThree}>
                                        <View style={styles.addOrMinusBtn}>


                                            {this.state.show ? (
                                                <View style={styles.showhide}>
                                                    <TouchableOpacity onPress={this.props.decreaseProductItemQuantity}>
                                                        <Feather name='minus-circle' color='#60c73a' size={22} />
                                                    </TouchableOpacity>

                                                    <View>
                                                        <Text style={{
                                                            fontSize: 15,
                                                            paddingLeft: 5,
                                                            paddingRight: 5

                                                        }}> 0 </Text>
                                                    </View>
                                                </View>
                                            ) : <View></View>}


                                            <TouchableOpacity onPress={() => { this.ShowHideComponent; this.props.increaseProductItemQuantity }} >
                                                <Feather name='plus-circle' color='#60c73a' size={22} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )


    }

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

        padding: 12,
        alignSelf: 'flex-start',
        width: '95%',


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
    },
    showhide: {
        flexDirection: 'row',
    }

});
