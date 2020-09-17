import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Profile from './profileScreen';
import OrderScreen from './myOrderScreen';

import AddShipAddress from './addShipAddressScreen';
import ShipAddressScreen from './shipAddressScreen';


import HomeEdited from './homeEditedScreen';

import FruitsComponent from './fruitsComponent';
import SeafoodComponent from './SeafoodComponent';

import CartScreen from './cartScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#60c73a",
    },
    headerTitleStyle: {
        alignSelf: 'center'
    },
    headerTintColor: "white",
};




const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeEdited} />
            <Stack.Screen name="Fruit" component={FruitsComponent} />
            <Stack.Screen name="Cart Screen" component={CartScreen} />

            <Stack.Screen name="Seafood" component={SeafoodComponent} />

        </Stack.Navigator>
    );
}

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Cart Screen" component={CartScreen} />
            <Stack.Screen name="Add Shipping Address" component={AddShipAddress} />
            <Stack.Screen name="ShipAddress Screen" component={ShipAddressScreen} />
        </Stack.Navigator>
    );
}


const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ShipAddress Screen" component={ShipAddressScreen} />
            <Stack.Screen name="Add Shipping Address" component={AddShipAddress} />
            <Stack.Screen name="Order Screen" component={OrderScreen} />
        </Stack.Navigator>

    );
}


export {
    MainStackNavigator, ProfileStackNavigator,
    CartStackNavigator,
}