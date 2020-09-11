import React from "react";
import {
    StyleSheet,
    View, TouchableOpacity, Button, Text
} from 'react-native';


const AddShipAddress = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('ShipAddressScreen'
                )}>
                    <Text style={styles.text}>
                        添加收件地址
            </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{
                    alignSelf: 'center',
                    color: 'black'
                }}>您还未添加任何地址，请点击右上角 “添加收件地址”</Text>
            </View>
        </View>
    );
};

export default AddShipAddress;

const styles = StyleSheet.create({


    mainContainer: {
        backgroundColor: '#f2f2f2',
    },
    appButtonContainer: {
        alignSelf: 'center',
    },
    appButtonText: {
        alignSelf: "flex-end",
    },

    container: {
        alignItems: 'flex-end',
    },
    text: {
        color: '#60c73a',
        padding: 25,
        borderColor: 'white',
        backgroundColor: '#f2f2f2',
        fontWeight: "bold"

    }
})