export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY';
export const GO_TO_PRODUCT_DETAIL = 'GO_TO_PRODUCT_DETAIL'

export const decreaseProductQuantity = productId => {
    return { type: DECREASE_PRODUCT_QUANTITY, pid: productId };
};

export const increaseProductQuantity = productId => {
    return { type: INCREASE_PRODUCT_QUANTITY, pid: productId };
};

export const GoToProductDetail = productId => {
    return { type: GO_TO_PRODUCT_DETAIL, pid: productId };
};

