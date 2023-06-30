import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

const ItemCount = ({stock,inicial,onAdd}) => {
  
    const [cantidad, setCantidad] = useState(inicial)
  
    const sumarCantidad = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    };

    const restarCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    };

    return (
        
        <>
        
            <div className='contador'>
                <Button variant="dark" style={{width:40}} onClick={restarCantidad}>-</Button>
                <h4 className='Number'>{cantidad}</h4>
                <Button variant="dark" style={{width:40}} onClick={sumarCantidad}>+</Button>
            </div>
            <div className='addCart'>
                <Button variant="primary" size="lg" onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</Button>
            </div>

        </>
    )
}

export default ItemCount