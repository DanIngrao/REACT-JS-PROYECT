import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock,inicial,onAdd}) => {
  
    const [cantidad, setCantidad] = useState(inicial)
  
    const sumarCantidad = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    };

    const restarCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    };

    return (
        
        <div>
        
            <div>
                <Button variant="dark" onClick={sumarCantidad}>+</Button>
                <h4 className='Number'>{cantidad}</h4>
                <Button variant="dark" onClick={restarCantidad}>-</Button>
            </div>
            <div>
                <Button variant="primary" size="lg" onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</Button>
            </div>

        </div>
    )
}

export default ItemCount