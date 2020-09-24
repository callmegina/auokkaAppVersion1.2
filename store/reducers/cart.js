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

            };


        case DECREASE_CART_QUANTITY:
            const decreaseItem = state.items[action.pid];
            let ItemPrice
            let ItemTotal
            let updatedDecreaseItem;

            if (decreaseItem.productQuantity >= 1) {

                updatedDecreaseItem = new CartItem(
                    decreaseItem.productQuantity - 1,
                    ItemPrice = parseInt(decreaseItem.productPrice),
                    decreaseItem.productTitle,
                    ItemTotal = (ItemPrice * (decreaseItem.productQuantity - 1)),
                    decreaseItem.productNetWeight,
                    decreaseItem.productImage,
                );
                updatedDecreaseItem = { ...state.items, [action.pid]: updatedDecreaseItem };
            }
            else {
                updatedDecreaseItem = { ...state.items };
                delete updatedDecreaseItem[action.pid];
            }
            return {
                ...state,
                items: updatedDecreaseItem,
                totalAmount: state.totalAmount - updatedIncreaseItem.productTotal
            }


        case INCREASE_CART_QUANTITY:
            const increaseItem = state.items[action.pid];
            let productPrice
            let productTotal
            let updatedIncreaseItem;

            updatedIncreaseItem = new CartItem(
                increaseItem.productQuantity + 1,
                productPrice = parseInt(increaseItem.productPrice),
                increaseItem.productTitle,
                productTotal = (productPrice * (increaseItem.productQuantity + 1)),
                increaseItem.productNetWeight,
                increaseItem.productImage,
            );
            updatedIncreaseItem = { ...state.items, [action.pid]: updatedIncreaseItem };
            return {
                ...state,
                items: updatedIncreaseItem,
                totalAmount: state.totalAmount + updatedIncreaseItem.productTotal
            }

    }

    return state;
}