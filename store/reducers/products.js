import PRODUCTS from '../../dummy_data_product';


const initialState = {
    products: PRODUCTS,
    availableProducts: PRODUCTS,
    items: {},
    totalAmount: 0,

};

export default (state = initialState, action) => {


    return state;
}



