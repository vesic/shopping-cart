import React, { Component } from 'react';
import Header from './components/header/Header'
import { connect } from 'react-redux';
import * as Actions from './actions';

class App extends Component {

  componentDidMount() { this.props.getProducts() }

  render() {
    return(
      <div>
        <Header/>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(Actions.getProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
