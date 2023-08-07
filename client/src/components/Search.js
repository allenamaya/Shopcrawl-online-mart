import React, { useContext, useState } from 'react'
import {Form, Button, Navbar, Offcanvas, Nav, Dropdown} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

import Logo from '../images/logo.png'


import ProductsContext from './context/ProductsContext'

const Search = () => {
  const { setProducts, currentCustomer, setCurrentCustomer} = useContext(ProductsContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState(
      {
        search_term: " "
      }
    )
  async function searchItem(event){
    event.preventDefault();
    if(formData.search_term === " "){
      alert("Enter a search term")
      navigate("/error")
    }else{
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
    
  }
  
  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  async function logOut(){
    let response = await fetch("/logout", {method: "DELETE"})
    setCurrentCustomer(null);
    console.log(response)
    navigate("/");
  }

  
      return (
        <div>
        <Navbar expand="lg" fixed='top'>
          
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Offcanvas className='me-auto'>
          <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                      Shopcrawl
                    </Offcanvas.Title>
          </Offcanvas.Header>
            <Offcanvas.Body>
            {currentCustomer ? (
            <Navbar.Brand className='app-brand'>
              <h1><i class="bi bi-person-check"></i> {currentCustomer.name}</h1>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand className='app-brand'>
            <Nav>
              <img src={Logo} alt='Logo' className='brand-img'/>
              <h3 className='logo-title'>Shopcrawl</h3>
            </Nav>
            
            </Navbar.Brand>
          )}
          
            <Nav className="justify-content-center flex-grow-1">
                {/* */}
                  <Form onSubmit={searchItem} className='d-flex' style={{width: "50%", height: '80%'}}>
                  <Form.Control
                            type="search"
                            placeholder="Search"
                            value={formData.search_term}
                            onChange={handleChange}
                            name="search_term"
                            className="me-2"
                            aria-label="Search"
                          />
                  <Button variant="warning" onClick={searchItem} style={{fontWeight: "bold"}}><i class="bi bi-search"></i></Button>
                </Form>
              </Nav>
             
      
               
               {currentCustomer ? (
                <>
                  
                    <LinkContainer to="/profile">
                      <Nav.Link>
                      <Button style={{marginRight: "20px", background: "rgb(43,16,55)", border: "none"}} >Profile</Button></Nav.Link>
                    </LinkContainer>
 
                    <LinkContainer to='/history' >
                    <Nav.Link>
                       <Button variant='warning' style={{marginRight: "20px"}}>My History</Button>
                    </Nav.Link>
                  </LinkContainer>
                  
                  
                  <Button variant='success' onClick={logOut} style={{background: "rgb(128,122,5)"}}>Logout</Button>
               </>
                
               ) : (<Nav className='me-auto'>
                {/* <Button className='account-btn' variant='warning'> */}
                    {/* <i class="bi bi-person-fill"></i> */}
                    <Dropdown >
                    <Dropdown.Toggle className='account' variant='dark'><i class="bi bi-person" ></i>Account</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                        <LinkContainer to='/sign-in'>
                          <Nav.Link>
                            Sign In
                          </Nav.Link>
                        </LinkContainer>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <LinkContainer to='/register'>
                          <Nav.Link>
                            Register
                          </Nav.Link>
                        </LinkContainer>
                      </Dropdown.Item>
                      </Dropdown.Menu>
                      
                      </Dropdown>
                {/* </Button> */}
                </Nav>
               )}
               
               
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
            
        </Navbar>
        <Nav
      activeKey="/"
      className='nav-home'
    >
      <Nav.Item>
        <LinkContainer to='/'>
            <Nav.Link><i class="bi bi-house"></i>Home</Nav.Link>
        </LinkContainer>
            
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/deals'>
            <Nav.Link><i class="bi bi-fire"></i>Deals</Nav.Link>
        </LinkContainer> 
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/electronics'>
            <Nav.Link><i class="bi bi-laptop"></i>Electronics</Nav.Link>
        </LinkContainer> 
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/fashion'>
            <Nav.Link><i class="bi bi-handbag"></i>Fashion</Nav.Link>
        </LinkContainer> 
      </Nav.Item>
    </Nav>
        </div>
      )
    
  
}

export default Search