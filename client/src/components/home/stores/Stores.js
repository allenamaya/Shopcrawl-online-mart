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
            <Card.Img  src='https://img.freepik.com/free-icon/ebay_318-674223.jpg'></Card.Img>
            
          </Card>
          </Link>
          <Link to='https://www.aliexpress.com/' target='_blank'>
            <Card 
             className='store'>
            <Card.Img  src='https://www.builtbymike.ca/wp-content/uploads/2018/11/AliExpress-315x315.jpg'></Card.Img>
            
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