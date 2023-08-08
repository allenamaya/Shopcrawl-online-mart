import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import {useNavigate, Link } from 'react-router-dom'
import ProductsContext from '../../context/ProductsContext'
import Cosmetics from "../../../images/cosmetics.jpg"
import Dining from "../../../images/dining.jpg"
import Fashion from "../../../images/fashion.jpg"
import Fitness from "../../../images/fitness.jpg"
import Groceries from "../../../images/groceries.jpg"
import Health from "../../../images/health.jpg"
import Snacks from "../../../images/snacks.jpg"
import Technology from "../../../images/technology.jpg"
import Toys from "../../../images/toys.jpg"
import PalyStation from "../../../images/playstation.jpg"

const SingleProduct = ({fProduct}) => {
  const navigate = useNavigate()
  const {setProducts} = useContext(ProductsContext)
  let imageSource = null

  if(fProduct.name === "snacks"){
    imageSource = Snacks
  }else if(fProduct.name === "cosmetics"){
    imageSource = Cosmetics
  }else if(fProduct.name === "dining"){
    imageSource = Dining
  }else if(fProduct.name === "fashion"){
    imageSource = Fashion
  }else if(fProduct.name === "fitness"){
    imageSource = Fitness
  }else if(fProduct.name === "groceries"){
    imageSource = Groceries
  }else if(fProduct.name === "health"){
    imageSource = Health
  }else if(fProduct.name === "technology"){
    imageSource = Technology
  }else if(fProduct.name === "toys"){
    imageSource = Toys
  }else if(fProduct.name === "playstation"){
    imageSource = PalyStation
  }else{
    imageSource = null
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
      </Card>
    </Link>
    
  )
}

export default SingleProduct