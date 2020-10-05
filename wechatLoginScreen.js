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

const WeChatLoginScreen = ({ navigation }) => {
    return (
        <View style={styles.center}>

            <Text>使用完整功能，需要微信或者邮件登录，点击以下按钮登录相关页面</Text>
            <Button transparent
                onPress={() => navigation.navigate('Auth Screen')}
                style={{
                    marginTop: 20,
                    width: 200,
                    backgroundColor: '#60c73a',
                    alignSelf: "center",


                }}>
                <Text style={styles.center}>邮件登录</Text>
            </Button>
            <Button transparent

                style={{
                    marginTop: 20,
                    width: 200,
                    backgroundColor: '#60c73a',
                    alignSelf: "center",


                }}>
                <Text style={styles.center}>微信登录</Text>
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

export default WeChatLoginScreen;