import React, { useContext, useState } from 'react'
import ProductsContext from '../../context/ProductsContext'
import { Form, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const {currentCustomer, setCurrentCustomer} = useContext(ProductsContext)
    const [formData, setFormData] = useState({
        name: currentCustomer.name,
        email: currentCustomer.email
    })
    const navigate = useNavigate();

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    async function updateProfile(){
        let response = await fetch(`/customers/${currentCustomer.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        if(response.ok){
            let updatedCustomer = await response.json()
            setCurrentCustomer(updatedCustomer);
            alert("Profile updated!")
            navigate("/profile")
            
        }else{
            console.log(response)
            alert("Sorry, could not update!")
            navigate('/profile')
        }
    }
  return (
    <div>
        <Container>
            <Form className='user-form user-profile'>
                <div className='profile-details'>
                    <Form.Group>
                        <Form.Label><h4>Name: {currentCustomer.name}</h4></Form.Label>
                        <Form.Control name='name' placeholder='Update name' value={formData.name} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h4>Email: {currentCustomer.email}</h4></Form.Label>
                        <Form.Control name='email' value={formData.email} onChange={handleChange} placeholder='Update email'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button className='user-form-btn' variant='warning' onClick={updateProfile}>Update profile</Button>
                    </Form.Group>
                </div>

                <div>
                    <Form.Group>
                        <Form.Label ><img className='profile-image' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='Profile pic' /></Form.Label>
                    </Form.Group> 
                </div>
                
            </Form>
        </Container>
        
    </div>
  )
}

export default Profile