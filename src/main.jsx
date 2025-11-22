import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Clients from './pages/Clients.jsx'
import Orders from './pages/Orders.jsx'
import OrderDetail from './pages/OrderDetail.jsx'
import OrderEdit from './pages/OrderEdit.jsx'
import Sales from './pages/Sales.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/clients' element={<Clients/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/orders/:id' element={<OrderDetail/>}/>
    <Route path='/orders/:id/edit' element={<OrderEdit/>}/>
    <Route path='/sales' element={<Sales/>}/>
  </Routes>
 </BrowserRouter>
)
