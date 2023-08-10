import React from 'react'
import {  Container, Carousel } from 'react-bootstrap'
import ProductCard from '../product_card/ProductCard'
import Wallet from '../../images/wallet.jpg'
import Watchout from '../../images/watchout.jpg'
import Favorite from '../../images/favorite.jpg'


const Electronic = ({electronics}) => {
  return (
    <div>
        <div className='banner'>
        <Carousel fade interval= {1100} wrap>
            <Carousel.Item ><img src={Favorite} alt=''/></Carousel.Item>
            <Carousel.Item ><img src={Wallet} alt=''/></Carousel.Item>
            <Carousel.Item ><img src={Watchout} alt=''/></Carousel.Item>
               
      </Carousel>
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