import { combineReducers } from 'redux';
import * as types from "../constants/ActionTypes";

const products = (state , action) => {
    switch (action.type) {
        case types.ADD_TO_CART :
            return {
                ...state,
                inventory : state.inventory - 1
            };
        default :
            return state;
    }
};

const byId = (state = {} , action) => {
    switch (action.type) {
        case types.RECEIVE_PRODUCTS :
            return {
                ...state,
                ...action.products.reduce((obj , product) => {
                    obj[product.id] = product;
                    return obj;
                }, {})
            };
        default:
            const  { productId } = action ;
            if(productId) {
                return {
                    ...state,
                    [productId] : products(state[productId] , action)
                }
            }
            return state;
    }
};

export default combineReducers({
    byId
})
