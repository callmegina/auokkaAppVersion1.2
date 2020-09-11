import PRODUCTS from '../../dummy_data_product';

const initialState = {
    availableProducts: PRODUCTS,
};
export default (state = initialState, action) => {
    return state;
};