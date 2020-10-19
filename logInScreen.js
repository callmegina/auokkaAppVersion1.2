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
                onPress={() => navigation.navigate('EmailAuthScreen')}
                style={{
                    width: 200,
                    backgroundColor: '#60c73a',
                    alignSelf: "center",
                    marginTop: 20,
                }}>
                <Text style={styles.center}>邮件登录</Text>
            </Button>
            <Button small rounded transparent
                onPress={() => navigation.navigate('MobileAuthScreen')}
                style={{
                    width: 200,
                    backgroundColor: '#60c73a',
                    alignSelf: "center",
                    marginTop: 20,
                }}>
                <Text style={styles.center}>手机登录</Text>
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