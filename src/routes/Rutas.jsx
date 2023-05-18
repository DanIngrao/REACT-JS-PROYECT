import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Catalogo from '../pages/Catalogo'
import NavBar from '../components/NavBar'
import ItemDetail from '../components/ItemDetail'

const Rutas = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/item/:id' element={<ItemDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas