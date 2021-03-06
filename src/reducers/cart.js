import { ADD_TO_CART , CHECKOUT_REQUEST } from "../constants/ActionTypes";


const initialState = {
  addedIds : [],
  quantityById : {}
}


const addedIds = (state = initialState.addedIds , action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // add to cart
      if(state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state , action.productId]
    default:
      return state;
  }
}

const quantityById = (state = initialState.quantityById , action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      return { ...state , [productId] : ( state[productId] || 0 ) + 1 }
    default:
      return state;
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    default:
      return {
        addedIds : addedIds(state.addedIds, action),
        quantityById : quantityById(state.quantityById, action)
      }
  }
}

export default cart;
