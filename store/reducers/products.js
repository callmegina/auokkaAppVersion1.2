import PRODUCTS from '../../dummy_data_product';

import { useState } from 'react';
import ProductItem from '../../models/product-item';

import {

    INCREASE_PRODUCT_QUANTITY,
    DECREASE_PRODUCT_QUANTITY
} from '../actions/product';


const initialState = {
    products: PRODUCTS,
    availableProducts: PRODUCTS,
    items: {},
    totalAmount: 0,
    pQuantity: 0
};

export default (state = initialState, action) => {

    /*  switch (action.type) {
 
         case DECREASE_PRODUCT_QUANTITY:
 
             const decreaseHomeItem = state.products.items[action.pid];
             let HomeItemPrice
             let HomeItemTotal
             let updatedDecreaseHomeItem
             let pQuantity = 0;
 
             if (decreaseHomeItem.pQuantity >= 1) {
 
                 updatedDecreaseHomeItem = new ProductItem(
                     decreaseHomeItem.pQuantity - 1,
                     HomeItemPrice = parseInt(decreaseHomeItem.pPrice),
                     decreaseHomeItem.pTitle,
                     HomeItemTotal = (HomeItemPrice * (decreaseHomeItem.pQuantity - 1)),
                     decreaseHomeItem.pNewWeight,
                     decreaseHomeItem.pImage,
                 );
 
 
                 updatedDecreaseHomeItem = { ...state.items, [action.pid]: updatedDecreaseHomeItem };
             }
             else {
                 updatedDecreaseHomeItem = { ...state.items };
 
             }
             return {
                 ...state,
                 items: updatedDecreaseHomeItem,
                 //  totalAmount: state.totalAmount - updatedIncreaseItem.productTotal
             }
 
 
         case INCREASE_PRODUCT_QUANTITY:
             const increaseHomeItem = state.items[action.pid];
             let HomeItemPriceOne
             let HomeItemTotalOne
             let updatedIncreaseHomeItem;
 
             updatedIncreaseHomeItem = new ProductItem(
                 increaseHomeItem.pQuantity + 1,
                 HomeItemPriceOne = parseInt(increaseHomeItem.pPrice),
                 increaseHomeItem.pTitle,
 
                 HomeItemTotalOne = (HomeItemPriceOne * (increaseHomeItem.pQuantity + 1)),
                 increaseHomeItem.pNewWeight,
                 increaseHomeItem.pImage,
             );
 
 
 
 
 
             updatedIncreaseHomeItem = { ...state.items, [action.pid]: updatedIncreaseHomeItem };
             return {
                 ...state,
                 items: updatedIncreaseHomeItem,
                 // totalAmount: state.totalAmount + updatedIncreaseItem.productTotal
             }
  */

    return state;
}
