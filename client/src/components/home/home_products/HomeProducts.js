import React from 'react'
import SingleProduct from './SingleProduct'

const HomeProducts = ({products}) => {
  return (
    <div className='home-products'>
        {products ? products.map(product => <SingleProduct fProduct= {product}/>) : null}
    </div>
  )
}

export default HomeProducts