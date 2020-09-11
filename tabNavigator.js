
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    MainStackNavigator, ProfileStackNavigator,
    CartStackNavigator,

} from "./stackNavigator";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#60c73a',
                inactiveTintColor: 'gray',
            }}
        >

            <Tab.Screen name="主页" component={MainStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={24} />
                    ),

                }}
            />
            <Tab.Screen name="购物车" component={CartStackNavigator}

                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="cart" color={color} size={24}
                        />
                    ),
                }}
            />
            <Tab.Screen name="账号" component={ProfileStackNavigator}

                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="account" color={color} size={24}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;