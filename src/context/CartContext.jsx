import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState (0)
    const [totalCantidad, setTotalCantidad]=useState(0)

    useEffect(()=>{},[cart])

    const addItem = (itemCart,cantidad) => {
        
        !isInCart(itemCart.id) ? 
        
        (setCart(prev => [...prev, {...itemCart,cantidad}]),
        
        setTotal(itemCart.valor*cantidad + total),
        
        setTotalCantidad(cantidad+totalCantidad))
        
        : alert('El producto ya fue agregado');
    }


    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        setTotalCantidad()
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