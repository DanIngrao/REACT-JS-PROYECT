import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const ItemDetail = ({id,sku, nombre, stock, edicion, img, editorial, valor, categoria}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={-1} className='btn btn-war'>Volver</Link>
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
        <Card.Link href="#">Agregar al carrito</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail