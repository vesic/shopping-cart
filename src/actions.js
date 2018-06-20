import axios from 'axios'

export function filterProducts(term) {
  return {
    type: 'FILTER_PRODUCTS',
    filter: term
  }
}

export function getProducts() {
  return dispatch => {
    axios.get('https://polar-temple-55189.herokuapp.com/products')
    // axios.get('http://localhost:3333/products')
      .then((res) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: res.data,
        });
        dispatch(filterProducts('Category 1'))
      })
  }
}

export function addToCart(item) {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export function clearCart() {
  return {
    type: 'CLEAR_CART'
  }
}
