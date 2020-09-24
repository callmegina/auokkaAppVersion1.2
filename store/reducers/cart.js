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
            const prodPrice = parseInt(addedProduct.price);
            const prodTitle = addedProduct.title;
            const productNetWeight = addedProduct.netWeight;
            const productQuantity = addedProduct.productQuantity;
            const productSum = addedProduct.productSum;
            const productImage = addedProduct.imageUrl;


            let updatedOrNewCartItem;
            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].productQuantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].productSum + prodPrice,
                    productNetWeight,
                    productImage
                );

            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice, productNetWeight, productImage)
            } return {

                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                // productQuantity: state.productQuantity,
                //productSum: state.productSum + prodPrice
            };



        case DECREASE_CART_QUANTITY:

            const addedItem = action.product;
            const currentQuantity = addedItem.productQuantity;
            let updatedItem;
            if (currentQuantity >= 1) {
                const updatedItem = new CartItem(
                    addedItem.productQuantity - 1,
                    addedItem.prodTitle,
                    addedItem.productPrice,
                    addedItem.productSum - addedItem.productPrice
                );
                updatedItem = { ...state.items, [action.pid]: updatedItem };
            } else {
                updatedItem = { ...state.items };
                delete updatedItem[action.pid];
            }
            return {
                ...state,
                items: updatedItem,
                totalAmount: state.totalAmount - updatedItem.productPrice
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