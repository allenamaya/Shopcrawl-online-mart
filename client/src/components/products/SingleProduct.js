import React from 'react'
import {Card} from 'react-bootstrap'

const SingleProduct = ({product}) => {
  return (
    <Card style={{width: '18rem'}}>
        <Card.Img src={product.image}>

        </Card.Img>
        <Card.Body>
        <h5>{product.title}</h5>
        <h5>{product.site}</h5>
        </Card.Body>
    </Card>
  )
}

export default SingleProduct