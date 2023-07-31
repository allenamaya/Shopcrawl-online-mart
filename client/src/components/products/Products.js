import React, { useContext } from 'react'
import SingleProduct from './SingleProduct'
import ProductsContext from '../context/ProductsContext'

const Products = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div className='products'>
        {products.map(product => <SingleProduct product={product} />)}
    </div>
  )
}

export default Products