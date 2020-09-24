export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY';
export const DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY';




export const addToCart = product => {
    return { type: ADD_TO_CART, product: product };
}
export const decreaseCartQuantity = productId => {
    return { type: DECREASE_CART_QUANTITY, pid: productId };
};

export const increaseCartQuantity = productId => {
    return { type: INCREASE_CART_QUANTITY, pid: productId };
};