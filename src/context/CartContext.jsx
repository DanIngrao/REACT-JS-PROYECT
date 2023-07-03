import React, { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState (0)
    const [totalCantidad, setTotalCantidad]=useState(0)

   

    const addItem = (itemCart,cantidad) => {
        
        !isInCart(itemCart.id) ? 
        
        (setCart(prev => [...prev, {...itemCart,cantidad}]),

        setTotal(itemCart.valor*cantidad + total),
        
        setTotalCantidad(cantidad+totalCantidad))
        
        : Swal.fire({
            tittle:'Error',
            text:'El producto ya ha sido agregado al carrito',
            icon:'error',
            confirmButtonColor: '#dc3545'
        })
    }


    const removeItem = (itemRemoved,cantidad) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemRemoved.id)
        setCart(cartUpdated),
        setTotalCantidad(totalCantidad-cantidad),
        setTotal(total-itemRemoved.valor*cantidad)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
        setTotalCantidad(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id == itemId)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, total, totalCantidad, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}