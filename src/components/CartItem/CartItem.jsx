import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { CartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';

const CartItem = ({nombre,valor,cantidad,img}) => {
  
    const {removeItem} = useContext(CartContext)
    
    return (
       <>
          <Table striped bordered hover variant='dark'>
               <thead>
                 <tr>
                   <th>Imagen</th>
                   <th>Nombre</th>
                   <th>Cantidad</th>
                   <th>Costo</th>
                   <th></th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td><Image src={img} fluid  thumbnail/></td>
                   <td>{nombre}</td>
                   <td>{cantidad}</td>
                   <td>{valor}</td>
                   <td><Button variant="danger" onClick={removeItem}>X</Button></td>
                 </tr>
               </tbody>
           </Table>
       </>
    )
}

export default CartItem