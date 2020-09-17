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
import FruitsComponent from "./fruitsComponent";
import SeafoodComponent from './SeafoodComponent';




export default class HomeEdited extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            counter: 0,
            itemSelected: '',
        }
        this._onClickItem = this._onClickItem.bind(this);
        this.renderFoodCategory = this.renderFoodCategory.bind(this);

    }


    _onClickItem(foodSelected) {

        this.setState({
            itemSelected: String(foodSelected)
        });
        console.log(foodSelected)
    }
    _selectItem(item) {
        return (
            <TouchableOpacity style={styles.itemTextView}
                onPress={() => {
                    this._onClickItem(item)
                }} >

                <Text style={[
                    styles.itemDefaultColor,
                    this.state.itemSelected === item && styles.itemSelectedColor
                ]}  >
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }

    renderFoodCategory(itemSelected) {
        console.log(itemSelected)
        switch (itemSelected) {
            case "水果": return <FruitsComponent />;
            case "海鲜": return <SeafoodComponent />;
            case "乳制品": return <SeafoodComponent />;
            default: return <Text>default page</Text>
        }
    }

    render() {
        return (
            <View style={styles.center}>
                <View style={styles.firstSection}>
                    <Text style={styles.textFirstSection} >特供商品</Text>
                </View>

                <View style={styles.body}>
                    <Container>
                        <View style={styles.mainContainer}>
                            <View style={styles.leftContainer}>
                                <TouchableOpacity
                                    style={styles.itemTextView}>
                                    {this._selectItem('水果')}
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    {this._selectItem('干货')}
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    {this._selectItem('乳制品')}
                                </TouchableOpacity>

                            </View>
                            <View style={styles.rightContainer}>

                                {/* 页面中使用到的state被更新后才会触发re-render， 放在function里面的state的更新不会出发re-render */}
                                {this.renderFoodCategory(this.state.itemSelected)}

                            </View>
                        </View>
                    </Container>
                    <Container>
                        <View style={styles.footer}>
                            <View><Text>总计：
                                {this.state.counter * this.state.price} </Text></View>


                            <View style={styles.container}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ShoppingCart')}>
                                    <Text style={styles.text}>
                                        前往购物车
                                        </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Container>
                </View>
            </View >
        )
    }

}

const styles = StyleSheet.create({

    itemDefaultColor: {
        color: 'black',
    },
    itemSelectedColor: {
        color: '#00bfff'
    },
    firstSection: {
        height: '12%',
        backgroundColor: 'white',
        marginBottom: 10,
    },

    textFirstSection: {
        fontWeight: "bold",
        marginTop: 35,
        marginBottom: 30,
        marginLeft: 65,
        fontSize: 13
    },

    mainContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 5,
    },
    leftContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        flex: 2
    },

    rightContainer: {
        flex: 9,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: '#f2f2f2',

    },

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

