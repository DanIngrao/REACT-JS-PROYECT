import React, { useContext , useState } from 'react'
import { CartContext } from '../context/CartContext';
import Cart from './Cart/Cart';
import './CartWidget.css';
import Nav from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';

const CartWidget = () => {

  const {totalCantidad} = useContext(CartContext)
  
  let location = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Navbar.Text style={{display: (location.pathname != "/cart") ? '' : 'none'}} onClick={handleShow}>
          {'🛒' + totalCantidad} 
        </Navbar.Text>
      <Offcanvas className="text-bg-dark p-3" show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as={Link} to='/cart'>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='contenedorOffCanvas'>
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default CartWidget