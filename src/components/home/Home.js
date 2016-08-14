import React from 'react'
import ProductMenu from '../product-menu/ProductMenu'
import ProductList from '../product-list/ProductList'
import Carousel from '../carousel/Carousel'

const Home = (props) => {
  return (
    <div className='row'>
      <Carousel />
      <ProductMenu />
      <ProductList />
    </div>
  )
}

export default Home
