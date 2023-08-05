import React from 'react'
import Stores from './stores/Stores'
import HomeProducts from './home_products/HomeProducts'


import { Container } from 'react-bootstrap'

const Home = ({products}) => {
  return (
      <div className='home'>
        <div className='banner home-banner'>
          <h1>Welcome to Shopcrawl!</h1>
        </div>
        
       <div>
        <Container>
          <HomeProducts products={products}/>
          <Stores />
        </Container>
       </div>
        
    </div>
    
    
  )
}

export default Home