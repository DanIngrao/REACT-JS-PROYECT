import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({id,sku, nombre, stock, edicion, img, editorial, valor, categoria}) => {

  const [cantidadAgregada,setCantidadAgregada] = useState(0)

  const {addItem, cart} = useContext(CartContext)

  const handleOnAdd = (cantidad) => {
    
    setCantidadAgregada(cantidad)

    const itemCart = {id,img,nombre,valor}

    addItem(itemCart,cantidad)
    
  }
  
  return (
    <Card className='ItemDetail'>
      <Button as={Link} to={-1} variant='danger'className='btn btn-war'>Volver</Button>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{nombre}</ListGroup.Item>
        <ListGroup.Item>Edicion: {edicion}</ListGroup.Item>
        <ListGroup.Item>Editorial: {editorial}</ListGroup.Item>
        <ListGroup.Item>Categoria: {categoria}</ListGroup.Item>
        <ListGroup.Item>ISBN: {sku}</ListGroup.Item>
        <ListGroup.Item>Stock: {stock}</ListGroup.Item>
        <ListGroup.Item>Valor: ${valor}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {
          cantidadAgregada > 0 ? (
              <Button as={Link} to='/cart' variant="primary" size="lg" className='btfinalizarcompra'>Finalizar Compra</Button>
            ) : (
            <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
            )
        }
      </Card.Body>
    </Card>
  )
}

export default ItemDetail