import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState (0)
    const [totalCantidad, setTotalCantidad]=useState(0)

   

    const addItem = (itemCart,cantidad) => {
        
        !isInCart(itemCart.id) ? 
        
        (setCart(prev => [...prev, {...itemCart,cantidad}]),

        setTotal(itemCart.valor*cantidad.toFixed(2) + total),
        
        setTotalCantidad(cantidad+totalCantidad))
        
        : alert('El producto ya fue agregado');
    }


    const removeItem = (itemRemoved,cantidad) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemRemoved.id)
        setCart(cartUpdated),
        setTotalCantidad(totalCantidad-cantidad),
        setTotal(total-itemRemoved.valor*cantidad.toFixed(2))
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