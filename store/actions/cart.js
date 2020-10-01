export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY';
export const DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY';

export const INCREASE_PRODUCTITEM_QUANTITY = 'INCREASE_PRODUCTITEM_QUANTITY';

export const DECREASE_PRODUCTITEM_QUANTITY = 'DECREASE_PRODUCTITEM_QUANTITY';


export const addToCart = product => {
    return { type: ADD_TO_CART, product: product };
}
export const decreaseCartQuantity = productId => {
    return { type: DECREASE_CART_QUANTITY, pid: productId };
};

export const increaseCartQuantity = productId => {
    return { type: INCREASE_CART_QUANTITY, pid: productId };
};

export const increaseProductItemQuantity = product => {
    return { type: INCREASE_PRODUCTITEM_QUANTITY, product: product };
};

export const decreaseProductItemQuantity = product => {
    return { type: DECREASE_PRODUCTITEM_QUANTITY, product: product };
};

