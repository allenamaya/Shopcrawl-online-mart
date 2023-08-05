import React, { useContext } from 'react'
import { Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import ProductsContext from '../context/ProductsContext'
import _ from 'lodash'

const Products = () => {
  const {products, setProducts} = useContext(ProductsContext)

  function sortPriceHighToLow(){
    setProducts(_.sortBy(products, 'price').reverse())
  }

  function sortPriceLowToHigh(){
    setProducts(_.sortBy(products, 'price'))
  }

  return (
    <div>
         <div className='search-display'>
          <Container>
        <h3>Results</h3>
          <div className='sort-nav'>
          <Nav className='justify-content-center'>
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
          </div>

          <div className='products-container'>
            {products.map(product => <SingleProduct product={product} />)}
        </div>
        </Container>
      </div>
      
    </div>
     
 
  )
}

export default Products