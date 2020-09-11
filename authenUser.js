import React from 'react';
import {
    ScrollView,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Button,
} from 'react-native';


import { Card, CardItem, Input } from 'native-base';

const AuthScreen = props => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >

            <Card style={styles.authContainer}>
                <ScrollView>
                    <Input style={styles.inputStyle}
                        id="email"
                        label="E-Mail"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorMessage="Please enter a valid email address."
                        onInputChange={() => { }}
                        initialValue=""
                    />
                    <Input style={styles.inputStyle}
                        id="password"
                        label="Password"
                        keyboardType="default"
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                        errorMessage="Please enter a valid password."
                        onInputChange={() => { }}
                        initialValue=""
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Login" color='#60c73a' onPress={() => { }} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Switch to Sign Up"
                            color='#60c73a'
                            onPress={() => { }}
                        />
                    </View>
                </ScrollView>
            </Card>

        </KeyboardAvoidingView>
    );
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1

    },
    inputStyle: {
        borderWidth: 0.3,
        borderColor: '#A4B0BD',
        marginBottom: 5,
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default AuthScreen;