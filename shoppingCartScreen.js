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

const ShoppingCart = ({ navigation }) => {
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




                <Card>
                    <CardItem >
                        <View style={styles.secondDivTwo}>
                            <View style={styles.secondDivTwoOne}>
                                <Image
                                    source={require('./assets/milk.png')}
                                    style={{ width: 50, height: 60 }}
                                />
                            </View>

                            <View style={styles.secondDivTwoTwo}>
                                <Text>牛奶</Text>
                                <View style={{
                                    padding: 12,
                                    backgroundColor: '#f2f2f2',
                                    borderRadius: 30,
                                    alignSelf: 'flex-start',
                                    width: '95%',
                                    marginTop: 5,
                                }} >
                                    <Text>{'1L'}</Text>
                                </View>
                            </View>

                            <View style={styles.secondDivTwoThree}>
                                <View style={styles.addOrMinusBtn}>
                                    <Feather name='minus-circle' color='#60c73a' size={26} />
                                    <Text style={{
                                        fontSize: 15,
                                    }}>1</Text>
                                    <Feather name='plus-circle' color='#60c73a' size={26} />
                                </View>
                                <View style={{
                                    alignSelf: 'flex-end'
                                }}>
                                    <Text style={{
                                        color: 'red',
                                    }}>$20</Text>
                                    <TouchableOpacity ><Text>移除</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>

                <Container>
                    <View style={styles.footer}>

                        <View style={styles.footerPrice}><Text>总计 ￥2000 </Text></View>
                        <View style={styles.btncontainer}>
                            <TouchableOpacity>
                                <Text style={styles.text}>
                                    提交</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Container>
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

export default ShoppingCart;
