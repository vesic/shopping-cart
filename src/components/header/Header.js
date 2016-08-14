import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import _ from 'lodash'

const Header = ({ cart }) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Shopping Cart</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li><Link to="/about">About</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <p className="navbar-text">
            <span className='glyphicon glyphicon-shopping-cart'></span>
            <strong> {cart.length} Items</strong>
            <strong> Total ${ (_.reduce(cart, (sum, item) => { return sum + +item.price }, 0)).toFixed(2) }</strong>
          </p>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(
    mapStateToProps,
)(Header)
