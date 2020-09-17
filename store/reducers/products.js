import PRODUCTS from '../../dummy_data_product';

const initialState = {
    products: PRODUCTS,
    availableProducts: PRODUCTS,
};
const ProductReducer = (state = initialState, action) => {
    return state;
};

export default ProductReducer;