import React from 'react'
import {  Container } from 'react-bootstrap'
import ProductCard from '../product_card/ProductCard'

const Electronic = ({electronics}) => {
  return (
    <div>
        <div className='banner'>
            <div className='banner-desc electronics'>
                <h1>Nothing but the best!</h1>
                <p>Make your pick!</p>
            </div>
        </div>
            <Container>
              <div className='fProducts-display'>
                {electronics ? electronics.map(product => <ProductCard fProduct={product}/>) : null}
              </div>  
            </Container>

    </div>
  )
}

export default Electronic