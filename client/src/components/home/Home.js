import React from 'react'
import Stores from './stores/Stores'
import HomeProducts from './home_products/HomeProducts'
import { Container } from 'react-bootstrap'
import { International, InHome, InBeauty } from './frequently_purchased'
import Carousel from 'react-bootstrap/Carousel';
import Welcome from '../../images/banner1.png'
import Customer from '../../images/banner2.png'
import Weekly from '../../images/banner3.png'
import Onsite from '../../images/banner4.png'


const Home = ({products}) => {
  return (
      <div className='home'>
        <div className='banner home-banner'>
    <Carousel fade interval={1200}>
      <Carousel.Item>
        <img src={Welcome} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Weekly} alt='' />
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={Customer} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Onsite} alt='' />
      </Carousel.Item>
    </Carousel>
 
        </div>
       <div>
       <Container>
          <HomeProducts products={products}/>
        </Container>
        <International />
        <InHome />
        <InBeauty />
        <Stores />
       </div>
        
    </div>
  );
}

export default Home