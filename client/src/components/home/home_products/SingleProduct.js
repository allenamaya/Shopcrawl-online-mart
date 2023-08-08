import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import {useNavigate, Link } from 'react-router-dom'
import ProductsContext from '../../context/ProductsContext'
import Gaming from '../../../images/frame11.png'
 import Fashion from '../../../images/frame12.png'
 import Dining from '../../../images/frame13.png'
 import Electronics from '../../../images/frame14.png'
 import Health from '../../../images/frame15.png'
 import Cosmetics from '../../../images/frame16.png'
 import Fitness from '../../../images/frame17.png'


const SingleProduct = ({fProduct}) => {
  const navigate = useNavigate()
  const {setProducts} = useContext(ProductsContext)

  let imageSource = null;

  if (fProduct.name ==="fashion"){
    imageSource = Fashion
  }
  else if(fProduct.name ==="dining"){
    imageSource = Dining
  }  else if(fProduct.name ==="electronics"){
    imageSource = Electronics
  }  else if(fProduct.name ==="health"){
    imageSource = Health
  }  else if(fProduct.name ==="gaming"){
    imageSource = Gaming
  }  else if(fProduct.name ==="cosmetics"){
    imageSource = Cosmetics
  }else if(fProduct.name ==="fitness"){
    imageSource = Fitness
  }else{
    imageSource = fProduct.image
   }

 
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

          <Card.Img src={imageSource} ></Card.Img>
          {/* <Card.Body>
            <Card.Title>{fProduct.name}</Card.Title>
          </Card.Body> */}
      </Card>
    </Link>
    
  )
}

export default SingleProduct