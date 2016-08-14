import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash'
import * as Actions from '../../actions';

const Cart = ({ cart, clearCart }) => {
  let total = _.reduce(cart, (sum, item) => { return sum + +item.price }, 0);

  return (cart.length === 0)
  ?
  (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3>Empty Cart</h3>
      </div>
      <div className="panel-body">
        <h4>Add Items</h4>
      </div>
    </div>
  )
  :
  (
    <div className="panel panel-default">
      <div className="panel-heading">``
        <div className="panel-title">
          <h3>Total <span className="label label-default pull-right">${ total.toFixed(2) }</span></h3>
        </div>
      </div>
      <ul className="list-group">
        {
          _.map(cart, p => <li key={p._id} className="list-group-item">
            <strong>{p.name}</strong>
            <span className="badge">${p.price}</span>
          </li>)
        }
        <li className='list-group-item'>
          <button
            onClick={() => clearCart() }
            className='btn btn-info btn-block'>clear</button>
        </li>
        <li className='list-group-item'>
          <button className='btn btn-danger btn-block'>Checkout</button>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => { dispatch(Actions.clearCart()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
