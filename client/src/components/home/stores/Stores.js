import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Stores = () => {
  return (
    <div className='stores-container'>
        <h3>Stores our members love</h3>
        <div className='stores'>
        <Link to='https://www.jumia.co.ke/' target='_blank'>
          <Card 
           className='store'>
            <Card.Img  src='https://play-lh.googleusercontent.com/K02ShY9ODJ9xGxXVqYKbDUOXczHHdKUnE9YRyurDdPkXe_THCWy-Fpo417seGIsMchA'></Card.Img>
           
          </Card>
        </Link>
          <Link to='https://www.ebay.com/' target='_blank'>
            <Card 
             className='store'>
            <Card.Img  src='https://cdn.wallpapersafari.com/60/57/QpR2ol.jpg'></Card.Img>
            
          </Card>
          </Link>
          <Link to='https://www.aliexpress.com/' target='_blank'>
            <Card 
             className='store'>
            <Card.Img  src='https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png'></Card.Img>
            
          </Card>
          </Link>
          <Link to='https://jiji.co.ke/' target='_blank'>
            <Card 
             className='store'>
            <Card.Img  src='https://play-lh.googleusercontent.com/-HLCFfuHHbMpYg4nRK9e1LOFK5tv-2LtsoP-3pLAj0uRLWh8SnBfdUS7EN8EA5an-8o'></Card.Img>
          </Card>
          </Link>
          
        </div>
    </div>
  )
}

export default Stores