export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY';


export const decreaseProductQuantity = productId => {
    return { type: DECREASE_PRODUCT_QUANTITY, pid: productId };
};

export const increaseProductQuantity = productId => {
    return { type: INCREASE_PRODUCT_QUANTITY, pid: productId };
};