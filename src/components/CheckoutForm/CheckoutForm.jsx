import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {
  
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className='formcontainer'>
        <Form onSubmit={handleConfirm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" value={name} onChange={({target})=>setName(target.value)}/>
            
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={({target})=>setEmail(target.value)}/>
            
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="Telefono" value={phone} onChange={({target})=>setPhone(target.value)}/>
    
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar orden
          </Button>
        </Form>
        </div>
    )
}

export default CheckoutForm