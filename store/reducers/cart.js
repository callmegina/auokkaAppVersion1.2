import {
    ADD_TO_CART, INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY, INCREASE_PRODUCTITEM_QUANTITY,
    DECREASE_PRODUCTITEM_QUANTITY

} from '../actions/cart';


import { ADD_ORDER } from '../actions/orders';
import CartItem from '../../models/cart-item';
import ProductItem from '../../models/product-item';
import { useState } from 'react';

const initialState = {
    items: {},
    totalAmount: 0,
    productQuantity: 0,
    productSum: 0

}

export default (state = initialState, action) => {

    switch (action.type) {


        //add to cart 
        case ADD_TO_CART:
            const addedProduct = action.product;
            console.log(addedProduct);
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            const productNetWeight = addedProduct.netWeight;
            const productImage = addedProduct.imageUrl;
            let totalAmount, productSum, productQuantity;

            let updatedOrNewCartItem;
            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    productQuantity = state.items[addedProduct.id].productQuantity + 1,
                    prodPrice,
                    prodTitle,
                    productSum = state.productSum + (prodPrice * productQuantity),
                    productNetWeight,
                    productImage,
                );

            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, productSum, productNetWeight, productImage)

            } return {

                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + updatedOrNewCartItem.productSum,

            };


        //cart quantity - decrease 
        case DECREASE_CART_QUANTITY:
            const decreaseItem = state.items[action.pid];
            let updatedDecreaseItem;

            if (decreaseItem.productQuantity >= 1) {
                updatedDecreaseItem = new CartItem(
                    decreaseItem.productQuantity - 1,
                    parseInt(decreaseItem.productPrice),
                    decreaseItem.productTitle,
                    decreaseItem.productSum = (decreaseItem.productQuantity - 1) * (parseInt(decreaseItem.productPrice)),
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
                totalAmount: state.totalAmount - decreaseItem.productSum
            }

        // cart quantity - increase 
        case INCREASE_CART_QUANTITY:
            const increaseItem = state.items[action.pid];

            let updatedIncreaseItem;

            updatedIncreaseItem = new CartItem(
                increaseItem.productQuantity + 1,
                parseInt(increaseItem.productPrice),
                increaseItem.productTitle,
                increaseItem.productSum = (increaseItem.productQuantity + 1) * (parseInt(increaseItem.productPrice)),
                increaseItem.productNetWeight,
                increaseItem.productImage,
            );

            updatedIncreaseItem = { ...state.items, [action.pid]: updatedIncreaseItem };
            return {
                ...state,
                items: updatedIncreaseItem,
                totalAmount: state.totalAmount + increaseItem.productSum
            }

        //product item quantity - increase 
        case INCREASE_PRODUCTITEM_QUANTITY:
            let increaseProductItem = action.product;
            console.log(increaseProductItem);
            let iProductItemPrice = parseInt(increaseProductItem.pPrice)


            let iProductItemTotal;
            let updatedIncreaseProductItem;
            updatedIncreaseProductItem = new ProductItem(

                console.log(iProductItemQuantity),
                iProductItemPrice = parseInt(increaseProductItem.pPrice),
                iProductItemTotal = (iProductItemPrice * iProductItemQuantity),

            );
            updatedIncreaseProductItem = { ...state.items, [action.product]: updatedIncreaseProductItem };
            return {
                ...state,
                iProductItemQuantity,
                iProductItemPrice,
                totalAmount: state.totalAmount + updatedIncreaseProductItem.iProductItemTotal,
                pQuantity: state.pQuantity + 1
            }

        //product item quantity - decrease 
        case DECREASE_PRODUCTITEM_QUANTITY:

            let decreaseProductItem = action.product;
            let dProductItemPrice = parseInt(decreaseProductItem.pPrice)
            let dProductItemTotal;

            let updatedDecreaseProductItem;
            updatedDecreaseProductItem = new ProductItem(

                console.log(dProductItemQuantity),
                dProductItemPrice = parseInt(decreaseProductItem.pPrice),
                dProductItemTotal = (dProductItemPrice * dProductItemQuantity),
            )
            updatedDecreaseProductItem = { ...state.items, [action.product]: updatedDecreaseProductItem };
            return {
                ...state,

                dProductItemPrice,
                totalAmount: state.totalAmount + updatedDecreaseProductItem.dProductItemTotal,
                pQuantity: state.pQuantity - 1

            }

        case ADD_ORDER:
            return initialState;


    }

    return state;
}