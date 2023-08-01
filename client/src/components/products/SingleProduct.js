import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleProduct = ({product}) => {
    if(product.price > 50){
      return (
        <Link to={product.link} target='_blank'>
          <Card style={{width: '18rem'}} className='product'>
            <Card.Img src={product.image} className='product-img'>
            </Card.Img>
            <Card.Body>
            <h5>{product.title}</h5>
            <h5>{product.site}</h5>
            <h4>Ksh {product.price}</h4>
            </Card.Body>
        </Card>
        </Link>
        
      )
    }
      

  }
  

export default SingleProduct