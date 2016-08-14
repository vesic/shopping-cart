import React, { Component } from 'react'
import axios from 'axios'
import * as Actions from '../../actions';
import { connect } from 'react-redux'
import _ from 'lodash';

class Product extends Component {
  constructor() {
    super();

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    let id = this.props.params.id;

    this.getProduct(id)
      .then((res) => {
        this.setState({ product: res.data })
      })
  }

  getProduct(id) {
    return axios.get(`https://polar-temple-55189.herokuapp.com/products/${id}`)
  }

  render() {
    const { addToCart } = this.props;

    return (
      <div className='row'>
        <div className='col-xs-12'>
            <div className="thumbnail">
              <img className="img-responsive" src={this.state.product.largeImgUrl} alt="" />
              <div className="caption-full">
                <h4 className="pull-right">${this.state.product.price}</h4>
                <h4><a href="#">{this.state.product.name}</a>
              </h4>
              <p>{this.state.product.info}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="ratings">
              <p className='pull-right'
                onClick={ () => addToCart(this.state.product) }
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
              <p>
                {
                  _.times(this.state.product.stars, (index) => <span key={index} className="glyphicon glyphicon-star"></span>)
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => { dispatch(Actions.addToCart(item)) }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Product)
