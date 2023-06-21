import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { CartProvider } from '../context/CartContext'
import Cart from '../components/Cart/Cart'

const Rutas = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default Rutas