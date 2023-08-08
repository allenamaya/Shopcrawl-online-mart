import React from 'react'
import Stores from './stores/Stores'
import HomeProducts from './home_products/HomeProducts'
import { Container, Carousel } from 'react-bootstrap'
import { International, InHome, InBeauty } from './frequently_purchased'
import Welcome from '../../images/welcome.jpg'
import Weekly from '../../images/weekly.jpg'
import OneSite from '../../images/onesite.jpg'
import Customer from '../../images/customer.jpg'


const Home = ({products}) => {
  return (
      <div className='home'>
        <div className='banner home-banner'>
          <Carousel fade interval= {1200} >
            <Carousel.Item ><img src={Welcome} alt=''/></Carousel.Item>
            <Carousel.Item ><img src={Weekly} alt=''/></Carousel.Item>
            <Carousel.Item ><img src={OneSite} alt=''/></Carousel.Item>
            <Carousel.Item><img src={Customer} alt=''/></Carousel.Item>
          </Carousel>
        </div>
       <div>
       <Container>
          <HomeProducts products={products}/>
          <International />
          <InHome />
          <InBeauty />
          <Stores />
        </Container>
      
       </div>
        
    </div>
  );
}

export default Home