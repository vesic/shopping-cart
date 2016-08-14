import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions';
import Cart from '../cart/Cart'

const ProductMenu = ({ filterProducts }) => {
  return (
    <div className="col-sm-3">
      <div className='row'>

        <div className='col-xs-6 col-sm-12'>
          <div className="list-group">
              <a href="#"
                onClick={
                  (e) => {
                    filterProducts('Category 1');
                    e.preventDefault();
                  }
                }
                className="list-group-item">Category 1</a>
              <a href="#"
                onClick={
                  (e) => {
                    filterProducts('Category 2');
                    e.preventDefault();
                  }
                }
                className="list-group-item">Category 2</a>
              <a href="#"
                onClick={
                  (e) => {
                    filterProducts('Category 3');
                    e.preventDefault();
                  }
                }
                 className="list-group-item">Category 3</a>
          </div>
        </div>

        <div className='col-xs-6 col-sm-12'>
          <Cart />
        </div>

      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterProducts: (filter) => dispatch(Actions.filterProducts(filter)),
  }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductMenu)
