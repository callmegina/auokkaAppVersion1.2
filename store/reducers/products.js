import PRODUCTS from '../../dummy_data_product';


import {
    INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY

} from '../actions/product';
import ProductItem from '../../component/productItem';

const initialState = {
    products: PRODUCTS,
    availableProducts: PRODUCTS,
    items: {},
    totalAmount: 0,

};

export default (state = initialState, action) => {

    switch (action.type) {
        case DECREASE_CART_QUANTITY:

            const selectedProductItem = state.items[action.pid];
            const productQty = selectedProductItem.quantity;
            let updatedProductItems;

            if (productQty > 1) {
                // need to reduce it, not erase it
                const updatedProductItems = new ProductItem(
                    selectedProductItem.quantity - 1,
                    selectedProductItem.price,
                    selectedProductItem.title,
                    selectedProductItem.sum - selectedProductItem.price
                );
                updatedProductItems = { ...state.items, [action.pid]: updatedProductItems };
            } else {
                updatedProductItems = { ...state.items };
                delete updatedProductItems[action.pid];
            }
            return {
                ...state,
                items: updatedProductItems,
                totalAmount: state.totalAmount - selectedProductItem.price
            };


        /*         case INCREASE_CART_QUANTITY:
                    const selectedProductItemTwo = state.items[action.pid];
                    const productQtyTwo = selectedProductItemTwo.quantity;
                    const updatedProductItemsTwo = new ProductItem(
                        productQtyTwo + 1,
                    );
                    updatedProductItemsTwo = { ...state.items, [action.pid]: updatedProductItemsTwo }
                    return {
                        ...state,
                        items: updatedProductItemsTwo,
        
                    };
        
            } */


    }
    return state
}