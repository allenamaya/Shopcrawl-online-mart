import React from 'react'
import {  Container } from 'react-bootstrap'
import ProductCard from '../product_card/ProductCard'

const Deals = ({deals}) => {
  return (
    <div>
    <div className='banner'>
        <div className='banner-desc deals'>
            <h1>Curious about our deals ???</h1>
            <p>Check out our offers today!</p>
        </div>
    </div>
        <Container>
          <div className='fProducts-display'>
          {deals ? deals.map(product => <ProductCard fProduct={product}/>) : null}
          </div>  
        </Container>

</div>
  )
}

export default Deals