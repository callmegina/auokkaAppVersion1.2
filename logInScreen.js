import React from "react";
import {
    View, Text, StyleSheet
    , TextInput, TouchableOpacity, Image,
    ScrollView,
} from "react-native";

import {
    Card, CardItem,
    Icon, Container,
    Button

} from 'native-base';

import { Feather } from '@expo/vector-icons';

const LogInScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>

            <Text>使用购物车前请登录</Text>
            <Button small rounded transparent
                onPress={() => navigation.navigate('Wechat LogIn Screen')}

                style={{
                    width: 200,
                    backgroundColor: '#60c73a',
                    alignSelf: "center",


                }}>
                <Text style={styles.center}>登录</Text>
            </Button>

        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default LogInScreen;