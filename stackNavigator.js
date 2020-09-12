import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Profile from './profileScreen';
import OrderScreen from './myOrderScreen';
import ShoppingCart from './shoppingCartScreen';
import AddShipAddress from './addShipAddressScreen';
import ShipAddressScreen from './shipAddressScreen';
import ProductDetailScreen from './productDetailScreen';
import ProductsOverviewScreen from './productOverviewScreen';
import HomeEdited from './homeEditedScreen';



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



const MainStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="ProductOverview" component={HomeEdited} />
            <Stack.Screen name="Home" component={ProductsOverviewScreen} />
            <Stack.Screen name="ShoppingCart" component={CartStackNavigator} />
        </Stack.Navigator>
    );
}

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="ShoppingCar" component={ShoppingCart} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="AddShipAddress" component={AddShipAddress} />
            <Stack.Screen name="ShipAddressScreen" component={ShipAddressScreen} />
        </Stack.Navigator>
    );
}


const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ShipAddressScreen" component={ShipAddressScreen} />
            <Stack.Screen name="AddShipAddress" component={AddShipAddress} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>

    );
}


export {
    MainStackNavigator, ProfileStackNavigator,
    CartStackNavigator,
}