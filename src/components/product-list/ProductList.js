import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import _ from 'lodash';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="col-sm-9">
      {
        _.map(products, (p) => {
          return (
            <div key={p._id} className="col-sm-6 col-lg-3 col-md-4">
            <div className="thumbnail">
              <Link to={`/product/${p._id}`}><img src={p.imgUrl} alt="" /></Link>
              <div className="caption">
                <h4 className="pull-right">${p.price}</h4>
                <h4><Link to='/'>{p.name}</Link></h4>
                <p>{p.info}</p>
              </div>
              <div
                className="ratings">
                <div className="pull-right">
                  <p
                    onClick={ () => addToCart(p) }
                    style={{
                      background: '#4449A6',
                      color: '#ffffff',
                      boxShadow: '1px 1px 3px black',
                      padding: 5,
                      cursor: 'pointer',
                    }}>
                    <span className='glyphicon glyphicon-shopping-cart'></span>
                    <span> Add to cart</span>
                  </p>
                </div>
                <p>
                  {
                    _.times(p.stars, (index) => <span key={index} className="glyphicon glyphicon-star"></span>)
                  }
                </p>
              </div>
            </div>
          </div>
          )
        })
      }

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.all.filtered
  }
}
//
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(Actions.addToCart(item))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)
