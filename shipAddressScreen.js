import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity,
    TextInput, Button,
} from 'react-native';

import { Label, Form, Item, Input, Container } from 'native-base';

const ShipAddressScreen = ({ navigation }) => {
    return (

        <View style={styles.screen}>

            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: '#d1cfcf',
                    borderBottomWidth: 1.5,
                }}
                placeholder="收件人"
            />

            <Form>
                <Item inlineLabel style={{
                    paddingLeft: 0, marginLeft: 0,

                }}>
                    <Label>+86 China</Label>
                    <Input placeholder="联系电话" />
                </Item>
            </Form>

            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: '#d1cfcf',
                    borderBottomWidth: 1.5,
                }}
                placeholder="所在地区" />
            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: '#d1cfcf',
                    borderBottomWidth: 1.5,
                }}
                placeholder="街道地址" />
            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: '#d1cfcf',
                    borderBottomWidth: 1.5,
                    marginBottom: 15,
                }}
                placeholder="邮编" />


            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>提交</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainerTwo}>
                <Text style={styles.appButtonText}>取消</Text>
            </TouchableOpacity>

        </View >
    );
};

export default ShipAddressScreen;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#60c73a",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderColor: '#d1cfcf',
        borderWidth: 1,
        width: '97%',
        alignSelf: 'center',
        marginBottom: 15,

    },

    appButtonContainerTwo: {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderColor: '#d1cfcf',
        borderWidth: 1,
        width: '97%',
        alignSelf: 'center',

    },
    appButtonText: {

        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

})
