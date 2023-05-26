import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import Catalogo from '../pages/Catalogo'

const Rutas = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/catalogo/:categoryId' element={<ItemListContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas