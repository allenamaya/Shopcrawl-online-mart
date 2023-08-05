import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import {useNavigate, Link } from 'react-router-dom'
import ProductsContext from '../../context/ProductsContext'

const SingleProduct = ({fProduct}) => {
  const navigate = useNavigate()
  const {setProducts} = useContext(ProductsContext)

 
async function searchItem(){
      let response = await fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          search_term: fProduct.name
        })
      })
      if(response.ok){
      let  data = await response.json();
      console.log(data)
      navigate('/products')
      setProducts([...data])
      }else{
        navigate("/error")
      }
    
  
}
    
  
  return (
    <Link onClick={searchItem} to={'/loading'} className='fProduct-link'>
      <Card className='home-product' >
          <Card.Img src={fProduct.image} ></Card.Img>
          <Card.Body>
            <Card.Title>{fProduct.name}</Card.Title>
          </Card.Body>
      </Card>
    </Link>
    
  )
}

export default SingleProduct