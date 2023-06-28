import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { CartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount';
import './CartItem.css'

const CartItem = ({nombre,valor,cantidad,img}) => {
  
    const {removeItem} = useContext(CartContext)
    
    return (
       <>
          <Table striped bordered hover variant='dark' className='tablacarrito'>
               <thead>
                 <tr>
                   <th>Imagen</th>
                   <th>Nombre/Costo</th>
                   <th>Cantidad</th>
                   <th></th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td><Image className='imgcarrito' src={img} fluid  thumbnail/></td>
                   <td>{nombre} {'$'+ valor}</td>
                   <td>{cantidad}</td>
                   <td>
                    <Button variant="danger" onClick={removeItem}>X</Button>
                   </td>
                 </tr>
               </tbody>
           </Table>
       </>
    )
}

export default CartItem