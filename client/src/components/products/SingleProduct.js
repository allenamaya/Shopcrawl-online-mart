import React from 'react'

import { Link } from 'react-router-dom'
import {Rating} from 'react-simple-star-rating'

const SingleProduct = ({product}) => {
    if(product.price > 50){
      return (
          <Link to={product.link} target='_blank' className={'product-link'}>
          <div className='product'>
            <div className='product-image'><img alt={product.name} src={product.image}/></div>
            <div className='product-details'>
              <div>{product.title}</div>
              <div>{product.site}</div>
              <div><Rating initialValue={4} size={18}></Rating></div>
              <div><h4>Ksh {product.price}</h4></div>
            </div>
          </div>
          </Link>
      );
    }
      

  }
  

export default SingleProduct