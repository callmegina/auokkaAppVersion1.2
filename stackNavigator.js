import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Profile from './profileScreen';
import OrderScreen from './myOrderScreen';

import AddShipAddress from './addShipAddressScreen';
import ShipAddressScreen from './shipAddressScreen';


import HomeEdited from './homeEditedScreen';

import FruitsComponent from './fruitsComponentScreen';
import SeafoodComponent from './seaFoodComponentScreen';
import DriedFoodComponent from './driedFoodComponentScreen';

import CartScreen from './cartScreen';
import ProductDetailScreen from './productDetailScreen';
import ProductDetailFinal from './productDetailFinal';

import AuthScreen from './AuthScreen';

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
            <Stack.Screen name="Detail Final" component={ProductDetailFinal} />
            <Stack.Screen name="Cart Screen" component={CartScreen} />
            <Stack.Screen name="Product Detail Screen" component={ProductDetailScreen} />
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
            <Stack.Screen name="Authentification Screen" component={AuthScreen} />
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