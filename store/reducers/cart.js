import {
    ADD_TO_CART, INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY
} from '../actions/cart';
import CartItem from '../../models/cart-item';
import { useState } from 'react';


const initialState = {
    items: {},
    totalAmount: 0,

}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            let updatedOrNewCartItem;
            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice,
                );

            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
            } return {

                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice

            };




        case DECREASE_CART_QUANTITY:

            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.productQuantity;
            let updatedCartItems;

            if (currentQty > 1) {
                // need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    selectedCartItem.productQuantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.productSum - selectedCartItem.productPrice
                );
                updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            };



        case INCREASE_CART_QUANTITY:
            const selectedItem = state.items[action.pid];
            const cartQuantity = selectedItem.productQuantity;
            const updatedCartItem = new CartItem(
                cartQuantity + 1,
            );
            updatedCartItems = { ...state.items, [action.pid]: updatedCartItem }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedItem.productPrice
            };

    }

    return state;
}