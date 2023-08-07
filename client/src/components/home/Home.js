import React from 'react'
import Stores from './stores/Stores'
import HomeProducts from './home_products/HomeProducts'
import { Container } from 'react-bootstrap'
import { International, InHome, InBeauty } from './frequently_purchased'



const Home = ({products}) => {
  return (
      <div className='home'>
        <div className='banner home-banner'>
          <h1>Welcome to Shopcrawl!</h1>
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