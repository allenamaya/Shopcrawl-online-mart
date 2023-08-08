import React from 'react'
import Bible from '../../../images/popular1.png'
import Cap from '../../../images/popular2.png'
import Tshirt from '../../../images/popular3.png'
import Dress from '../../../images/popular4.png'


const international = () => {
  return (
    <div className='popular-container'>
        <h3>Trending Globally items</h3>
        <div className='popular-products'>
        <img src={Bible} alt='' />
        <img src={Cap} alt='' />
        <img src={Tshirt} alt='' />
        <img src={Dress} alt='' />
        </div>
    </div>
  )
}

export default international