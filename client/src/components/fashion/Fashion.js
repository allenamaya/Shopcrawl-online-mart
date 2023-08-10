import React from 'react'
import {  Container, Carousel } from 'react-bootstrap'
import ProductCard from '../product_card/ProductCard'
import Best from '../../images/best.jpg'
import Favorite from '../../images/favorite.jpg'
import OneWeb from '../../images/oneweb.jpg'

const Fashion = ({fashion}) => {
  return (
    <div>
    <div className='banner'>
      <Carousel fade interval= {1100} wrap>
            <Carousel.Item ><img src={Best} alt=''/></Carousel.Item>
            <Carousel.Item ><img src={Favorite} alt=''/></Carousel.Item>
            <Carousel.Item ><img src={OneWeb} alt=''/></Carousel.Item>     
      </Carousel>
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