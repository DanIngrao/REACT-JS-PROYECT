import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = () => {

    const {cart, clearCart, total, removeItem} = useContext(CartContext)

    return(
        <>

            {cart == '' ? 
                <div className='cartvacio'>
                   <h2 style={{color: 'white'}}>El carrito se encuentra vacio</h2>
                   <br></br>
                   <Link to='/'>
                    <Button variant="primary" size="lg">
                        Volver al catalogo
                    </Button>
                    </Link>
                    
                </div> 
                :
                
                <div className='cart'>
                    
                    <Button as={Link} to={-1} variant='danger'className='btn btn-war'>Volver</Button>
                    
                    {cart.map(p => <CartItem key={p.id}{...p}/>)}
                        
                    <Button variant="danger" onClick={()=> clearCart() }>Vaciar Carrito</Button>
                    <h4 style={{color: 'white'}}>Total :${total}</h4>
                    <Button as={Link} to='/checkout' variant="primary">Checkout</Button>

                </div>
            }
        </>
    )
}

export default Cart