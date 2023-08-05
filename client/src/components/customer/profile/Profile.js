import React, { useContext } from 'react'
import ProductsContext from '../../context/ProductsContext'
import { Form, Container } from 'react-bootstrap'

const Profile = () => {
    const {currentCustomer} = useContext(ProductsContext)
  return (
    <div>
        <Container>
            <h3>My Profile</h3>
            <Form className='user-form'>
                <Form.Group>
                    <Form.Label ><img className='profile-image' src='https://storage.prompt-hunt.workers.dev/clf1xfct50006l308toffx3dy_1' alt='Profile pic' /></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label><h4>Name: {currentCustomer.name}</h4></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label><h4>Email: {currentCustomer.email}</h4></Form.Label>
                </Form.Group>
            </Form>
        </Container>
        
    </div>
  )
}

export default Profile