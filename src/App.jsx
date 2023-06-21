import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './routes/Rutas';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <Rutas/>
      <Footer/>
    </div>
  )
}

export default App
