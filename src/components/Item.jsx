import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({id,sku, nombre, stock, edicion, img, editorial, valor, categoria}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{nombre}</ListGroup.Item>
        <ListGroup.Item>Valor: ${valor}</ListGroup.Item>
        <ListGroup.Item>Stock: {stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/item/${id}`}>
          <Button variant="primary" size="lg" className='btn btn-war'>Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item