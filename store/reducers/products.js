import PRODUCTS from '../../dummy_data_product';

const initialState = {
    availableProducts: PRODUCTS,
    filteredProducts: []
};
const ProductReducer = (state = initialState, action) => {
    return state;
};

export default ProductReducer;