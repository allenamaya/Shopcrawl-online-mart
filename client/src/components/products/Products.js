import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import ProductsContext from '../context/ProductsContext'

const Products = () => {
  const {products} = useContext(ProductsContext)
  return (
    <Container>
       <div className='products'>
        {products.map(product => <SingleProduct product={product} />)}
    </div>
    </Container>
   
  )
}

export default Products