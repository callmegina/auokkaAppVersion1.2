import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from './profileScreen';

import AddShipAddress from './addShipAddressScreen';
import ShipAddressScreen from './shipAddressScreen';
import HomeEdited from './homeEditedScreen';
import FruitsComponent from './fruitsComponentScreen';
import SeafoodComponent from './seaFoodComponentScreen';
import DriedFoodComponent from './driedFoodComponentScreen';
import DiaryComponent from './diaryComponentScreen';
import CartScreen from './cartScreen';
import OrderScreen from './myOrderScreen';



import ProductDetailTrial from './productDetailFinal';

import EmailAuthScreen from './emailAuth';
import MobileAuthScreen from './mobileAuth';

import LogInScreen from './logInScreen';

import StartingScreen from './startingScreen';

import EditProductScreen from './editedProductScreen';
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
            <Stack.Screen name="StartingScreen" component={StartingScreen} />
            <Stack.Screen name="Fruit" component={FruitsComponent} />
            <Stack.Screen name="Diary" component={DiaryComponent} />
            <Stack.Screen name="Dried Food" component={DriedFoodComponent} />
            <Stack.Screen name="Detail Trial" component={ProductDetailTrial} />
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
            <Stack.Screen name="EditProductScreen" component={EditProductScreen} />

        </Stack.Navigator>
    );
}


const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>

            <Stack.Screen name="LogIn Screen" component={LogInScreen} />
            <Stack.Screen name="MobileAuthScreen" component={MobileAuthScreen} />
            <Stack.Screen name="EmailAuthScreen" component={EmailAuthScreen} />
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