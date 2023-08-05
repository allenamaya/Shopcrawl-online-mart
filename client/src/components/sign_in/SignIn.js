import React, {useContext, useState} from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import ProductsContext from '../context/ProductsContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const {setCurrentCustomer} = useContext(ProductsContext)
  const navigate = useNavigate()
  const [formData, seFormData] = useState({
    email: "",
    password: ""
  })

function handleChange(event){
  seFormData({...formData, [event.target.name]: event.target.value})
}

function signIn(){
  fetch('/login',{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(res => {
    if(res.ok){
      res.json().then(cust => {
        setCurrentCustomer(cust);
        navigate('/');

      })
    }else{
      alert("Error");
      navigate('/')
    }
  }
  )
}
  return (
    <Container>
      <Form className='user-form'>
      <h2><i class="bi bi-person-circle"></i></h2>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name='email' value={formData.email} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' value={formData.password} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <div>
            <Button onClick={signIn} className='user-form-btn'>Sign In</Button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default SignIn