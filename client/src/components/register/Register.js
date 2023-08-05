import React, {useContext, useState} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import ProductsContext from '../context/ProductsContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const {setCurrentCustomer} = useContext(ProductsContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  function register(){
    fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(res => {
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
      if(res.ok){
        res.json().then(newCust => {
          setCurrentCustomer(newCust)
          navigate("/")
        })
      }else{
        alert("Wrong credentials!")
        navigate("/register")
      }
    })
  }
  return (
    <Container>
      <Form className= 'user-form'>
      <h2><i class="bi bi-person-circle"></i></h2>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name="name" value={formData.name} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name='email' value={formData.email} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' value={formData.password} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type='password' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <div>
            <Button className='user-form-btn' onClick={register}>Register</Button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Register