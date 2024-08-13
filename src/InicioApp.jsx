import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import NoEncontrada from './pages/NoEncontrada'
import Navbar from './components/Navbar'
import Alta from './pages/Alta'
const InicioApp = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
      <div className="container">
      <Routes>

        <Route path='/' element={<Inicio/>}/>    
        <Route path='/nosotros' element={<Nosotros/>}/>   
                <Route path='/alta' element={<Alta/>}/>   

        <Route path='/contacto' element={<Contacto/>}/>    
        <Route path='*' element={<NoEncontrada/>}/>    
      </Routes>
      </div>

      </BrowserRouter>
    </>
  )
}

export default InicioApp