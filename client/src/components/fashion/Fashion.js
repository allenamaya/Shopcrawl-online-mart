import React from 'react'
import {  Container } from 'react-bootstrap'
import ProductCard from '../product_card/ProductCard'

const Fashion = ({fashion}) => {
  return (
    <div>
    <div className='banner'>
    <div className='banner-desc fashion'>
        <h1>Fashion that's made just for you!</h1>
        <p>Look like the best you!</p>
    </div>
    {/* <img src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='electronics'/> */}
    </div>
        <Container>
           <div className='fProducts-display'>
          {fashion ? fashion.map(product => <ProductCard fProduct={product} />) : null}
          </div>  
        </Container>

</div>
  )
}

export default Fashion