import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./tabNavigator";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});


const store = createStore(rootReducer);


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
