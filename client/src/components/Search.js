import React, { useContext, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Products from './products/Products'
import ProductsContext from './context/ProductsContext'

const Search = () => {
  const {products, setProducts} = useContext(ProductsContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState(
      {
        search_term: " "
      }
    )
  async function searchItem(event){
    event.preventDefault();
    navigate('/loading')
    let response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    if(response.ok){
     let  data = await response.json();
     console.log(data)
     setProducts([...data])
    }
  }

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }
    
  return (
    <div>
      <Form onSubmit={searchItem}>
        <Form.Group>
          <Form.Control type='text' value={formData.search_item} name="search_term"  onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button onClick={searchItem}>Search</Button>
        </Form.Group>
      </Form>
      {products ? <Products /> : <h1>No data</h1>}
      
    </div>
  )
}

export default Search