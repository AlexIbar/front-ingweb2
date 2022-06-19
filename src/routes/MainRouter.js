import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Estado from '../components/estado/Estado'
import BarraNav from '../components/iu/BarraNav'
import Marca from '../components/marca/Marca'
import TipoEquipo from '../components/tipoequipo/TipoEquipo'
import Usuarios from '../components/usuarios/Usuarios'
import Inventario from '../components/inventario/inventario'
import AddInventario from '../components/inventario/addinventario'
export default function MainRouter() {
  return (
    <BrowserRouter>
        <BarraNav />
        <Routes>
            <Route path='/' element={<Estado />}/>
            <Route path='/marcas' element={ <Marca />}/>
            <Route path='/tipoequipos' element={ <TipoEquipo />}/>
            <Route path='/inventario' element={ <Inventario />}/>
            <Route path='/usuarios' element={ <Usuarios />}/>
            <Route path='/agregarInventario' element={ <AddInventario />}/>
        </Routes>
    </BrowserRouter>
  )
}
