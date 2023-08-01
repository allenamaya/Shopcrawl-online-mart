import React, { useContext, useState } from 'react'
import {Form, Button, Navbar, Offcanvas, Nav, NavDropdown} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import _ from 'lodash'

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
    formData.search_term = " "
  }
  

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function sortPriceHighToLow(){
    setProducts(_.sortBy(products, 'price').reverse())
  }

  function sortPriceLowToHigh(){
    setProducts(_.sortBy(products, 'price'))
  }
    
  return (
    <div>
    <Navbar expand="lg" fixed='top'>
      <Navbar.Brand className='app-brand'><h2>Shopcrawl</h2></Navbar.Brand>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Offcanvas>
      <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Shopcrawl
                </Offcanvas.Title>
              </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-center flex-grow-1">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Sort"
                    id={`offcanvasNavbarDropdown-expand}`}
                  >
                    <NavDropdown.Item >
                      <Button variant="warning" onClick={sortPriceHighToLow}>Price High To Low</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Button variant="warning" onClick={sortPriceLowToHigh}>Price Low To High</Button> 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                      <Button variant='warning'>Rating</Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>
          <Form onSubmit={searchItem} className='d-flex'>
          <Form.Control
                    type="search"
                    placeholder="Search"
                    value={formData.search_term}
                    onChange={handleChange}
                    name="search_term"
                    className="me-2"
                    aria-label="Search"
                  />
          <Button variant="warning" onClick={searchItem}>Search</Button>
        </Form>
  
           <Nav >
           <Button className='account-btn'>
                <i class="bi bi-person-fill"></i>
                  <NavDropdown
                  title="Account"
                  id="navbarScrollingDropdown"
                  >
                  <NavDropdown.Item>
                    <Button variant='warning'>Sign In</Button>
                  </NavDropdown.Item>

                  </NavDropdown>
                  </Button>
           </Nav>
        </Offcanvas.Body>
        
      </Navbar.Offcanvas>
        
    </Navbar>
      
    </div>
  )
}

export default Search