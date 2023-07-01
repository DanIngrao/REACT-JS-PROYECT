import React, { useContext , useState } from 'react'
import Cart from '../Cart/Cart';
import './CartWidget.css';
import Nav from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {totalCantidad} = useContext(CartContext)
  
  let location = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartwidget = true

  return (
    <>
        <Navbar.Text style={{display: (location.pathname != "/cart") ? '' : 'none'}} onClick={handleShow}>
          {'🛒' + totalCantidad} 
        </Navbar.Text>
      <Offcanvas className="text-bg-dark p-3" show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as={Link} to='/cart' className='gocart'>🛒 IR AL CARRITO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='contenedorOffCanvas'>
          <Cart cartwidget={cartwidget}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default CartWidget