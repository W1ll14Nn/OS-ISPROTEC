import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { SupabaseContext, supabase } from './supabase'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import OrderDetails from './pages/OrderDetails'
import EditOS from './pages/EditOS'
import Sales from './pages/Sales'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseContext.Provider value={supabase}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/orders/:id' element={<OrderDetails/>}/>
          <Route path='/orders/:id/edit' element={<EditOS/>}/>
          <Route path='/sales' element={<Sales/>}/>
        </Routes>
      </BrowserRouter>
    </SupabaseContext.Provider>
  </React.StrictMode>
)