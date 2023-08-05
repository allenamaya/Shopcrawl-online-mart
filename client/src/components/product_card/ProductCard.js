import React, {useContext} from 'react'
import { Card } from 'react-bootstrap'
import ProductsContext from '../context/ProductsContext'
import { useNavigate, Link } from 'react-router-dom'

const ProductCard = ({fProduct}) => {

  const {setProducts} = useContext(ProductsContext)
  const navigate = useNavigate()

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
    <Link to='/loading' onClick={searchItem} className='fProduct-link'>
      <Card>
        <Card.Img src={fProduct.image} className='fProduct-image'></Card.Img>
        <Card.Body>
          <Card.Title>{fProduct.name}</Card.Title>
        </Card.Body>
    </Card>
    </Link>
    
  )
}

export default ProductCard