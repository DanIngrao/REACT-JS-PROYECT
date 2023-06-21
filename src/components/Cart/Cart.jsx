import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const {cart, clearCart, total, removeItem} = useContext(CartContext)

    return(
        <>
            {total == 0 ? 
                <div>
                   <h2>El carrito se encuentra vacio</h2>
                   <Link to='/'>
                    <Button variant="primary" size="lg">
                        Volver al catalogo
                    </Button>
                    </Link>
                    
                </div> 
                :
                
                <div>
                    {cart.map(p => <CartItem key={p.id}{...p}/>)}
                        
                    <Button variant="primary" onClick={()=> clearCart() }>Vaciar Carrito</Button>
                    <h4>Total :${total}</h4>
                    <Link to='/checkout' >
                        <Button variant="primary">Checkout</Button>
                    </Link> 

                </div>
            }
        </>
    )
}

export default Cart