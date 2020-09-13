import PRODUCTS from '../../dummy_data_product';

const initialState = {
    products: PRODUCTS,
    availableProducts: PRODUCTS,
    filteredProducts: PRODUCTS,
    selectedProducts: []

};
const ProductReducer = (state = initialState, action) => {
    return state;
};

export default ProductReducer;