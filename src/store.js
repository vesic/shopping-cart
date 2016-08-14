import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk'

const products = (state = {products: [], filtered: []}, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': return {...state, products: state.products.concat(action.payload) }
    case 'FILTER_PRODUCTS': return {...state, filtered: state.products.filter(p => p.category === action.filter) }
    default: return state;
  }
}

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, Object.assign({}, action.payload)]
    case 'CLEAR_CART':
      return [];
    default: return state;
  }
}

const reducers = combineReducers({
  all: products,
  cart
})

const store = createStore(reducers, applyMiddleware(ReduxThunk, logger()));

export default store;
