import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({cartwidget}) => {

    const {cart, clearCart, total, removeItem} = useContext(CartContext)

    return(
        <>

            {cart == '' ? 
                <div className='cartvacio'>
                   <h2 style={{color: 'white'}}>El carrito se encuentra vacio</h2>
                   <br />
                    <Button style={{display: (cartwidget) ? 'none' : ''}} as={Link} to='/' variant="primary" size="lg">
                        Volver al catalogo
                    </Button> 
                </div> 
                :
                
                <div className='cart'>
                    
                    <Button style={{display: (cartwidget) ? 'none' : ''}} as={Link} to={-1} variant='danger'className='btn btn-war'>Volver</Button>
                    
                    {cart.map(p => <CartItem key={p.id}{...p}/>)}
                        
                    <Button variant="danger" onClick={()=> clearCart() }>Vaciar Carrito</Button>
                    <br />
                    <br />
                    <h4 style={{color: 'white'}}>Total: ${total.toFixed(2)}</h4>
                    <br />
                    <Button as={Link} to='/checkout' variant="primary">Checkout</Button>

                </div>
            }
        </>
    )
}

export default Cart