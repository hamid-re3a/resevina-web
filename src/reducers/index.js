import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

export default combineReducers({
    products,
    cart
});


const getAddedIs = state => state.cart.addedIds;
const getProduct = (state , id) => state.products.byId[id];
const getQuantity = (state , id) => state.cart.quantityById[id] || 0;



export const getCartProducts = state =>
  getAddedIs(state).map(id => ({ ...getProduct(state,id) , quantity : getQuantity(state,id) }))

export const getTotal = state =>
  getAddedIs(state).reduce((total , id) => total + getProduct(state,id).price * getQuantity(state,id) , 0).toFixed(2)
