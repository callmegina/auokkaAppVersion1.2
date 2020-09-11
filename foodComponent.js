import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image
} from "react-native";

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card, Alert
} from 'native-base';

import { Feather } from '@expo/vector-icons';

export default class FoodComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    IncrementItem = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    DecrementItem = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <View>
                <Card>
                    <CardItem >
                        <View style={styles.secondDivTwo}>
                            <View style={styles.secondDivTwoOne}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetailScreen',
                                    { screen: 'ProductDetailScreen' })}>
                                    <Image
                                        source={require('./assets/bread.png')}
                                        style={{ width: 50, height: 60 }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.secondDivTwoTwo}>
                                <Text>{this.props.detail.title}</Text>
                                <View style={{
                                    padding: 12,
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: 30,
                                    alignSelf: 'flex-start',
                                    width: '95%',
                                    marginTop: 5,
                                }} >
                                    <Text>{this.props.detail.quantity}</Text>
                                </View>
                            </View>


                            <View style={styles.secondDivTwoThree}>
                                <View style={styles.addOrMinusBtn}>

                                    <TouchableOpacity onPress={() => this.DecrementItem()} >
                                        <Feather name='minus-circle' color='#60c73a' size={26} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 15,
                                    }}>{this.state.counter}</Text>
                                    <TouchableOpacity onPress={() => this.IncrementItem()} >
                                        <Feather name='plus-circle' color='#60c73a' size={26} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    alignSelf: 'flex-end'
                                }}>
                                    <Text style={{
                                        color: 'red',
                                    }}>{this.props.detail.price}</Text>
                                    <TouchableOpacity ><Text>移除</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>

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
    }

});
