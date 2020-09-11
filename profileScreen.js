import React from "react";
import {
    View, StyleSheet, Text, Button,
    Image, TouchableOpacity,
} from "react-native";

import {
    Container, Header,
    Content, ListItem,
    Left, Body, Right, Switch, Icon
} from "native-base";


const Profile = ({ navigation }) => {

    return (
        <View>
            <View style={styles.personContainer}>
                <Image
                    source={require('./assets/person.png')}
                    style={{
                        width: 50, height: 55,
                        margin: 10
                    }}
                />
                <Text style={{
                    marginLeft: 20,
                    marginTop: 28,
                }}>Jason</Text>
            </View>


            <View style={styles.listStyle}>

                <ListItem>

                    <Left>
                        <TouchableOpacity onPress={() => navigation.navigate('OrderScreen',
                            { screen: 'OrderScreen' })}>
                            <Icon name="paper" size={24} color='grey'
                            />
                        </TouchableOpacity>
                        <Text style={{
                            color: 'grey',
                            paddingLeft: 5,
                        }}>我的订单</Text>

                    </Left>

                    <Right>

                        <Icon active name="arrow-forward" />
                    </Right>

                </ListItem>


                <ListItem>
                    <Left>
                        <TouchableOpacity onPress={() => navigation.navigate('AddShipAddress',
                            { screen: 'AddShipAddress' })}>
                            <Icon name="mail" size={24} />
                        </TouchableOpacity>
                        <Text style={{
                            color: 'grey',
                            paddingLeft: 10,
                        }}>收件地址</Text>
                    </Left>
                    <Right>
                        <Icon active name="arrow-forward"
                        />
                    </Right>
                </ListItem>

                <View style={styles.btnStyle}>
                    <Button
                        title="退出登录"
                        color="#60c73a"
                        alignItems='center'
                    />
                </View>
            </View>

        </View >


    )
}




const styles = StyleSheet.create({



    personContainer: {

        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
    },

    btnStyle: {
        marginTop: 20,
        width: '95%',
        alignSelf: 'center'

    }, listStyle: {
        backgroundColor: 'white',
    }



});

export default Profile;