import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState (0)

    useEffect(()=>{},[cart])

    console.log(cart)
    console.log(total)

    const addItem = (itemCart,cantidad) => {
        
        !isInCart(itemCart.id) ? 
        
        (setCart(prev => [...prev, {...itemCart,cantidad}]),
        
        setTotal(itemCart.valor*cantidad + total))
        
        : alert('El producto ya fue agregado');
    }


    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        setTotal(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id == itemId)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, total, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}