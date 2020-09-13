import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Profile from './profileScreen';
import OrderScreen from './myOrderScreen';
import ShoppingCart from './shoppingCartScreen';
import AddShipAddress from './addShipAddressScreen';
import ShipAddressScreen from './shipAddressScreen';
import ProductDetailScreen from './productDetailScreen';
import ProductDetailDraft from './ProductDetailDraft';
import HomeEdited from './homeEditedScreen';

import FruitsComponent from './fruitsComponent';
import SeafoodComponent from './SeafoodComponent';
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
            <Stack.Screen name="Seafood" component={SeafoodComponent} />

            <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
            <Stack.Screen name="Product Detail Draft" component={ProductDetailDraft} />
            <Stack.Screen name="Shopping Cart" component={CartStackNavigator} />
        </Stack.Navigator>
    );
}

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
            <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
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