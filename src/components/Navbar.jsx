import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <nav className="bg-white border-b p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain"/>
        <div className="font-bold text-lg">ISPROTEC ASSISTÊNCIA</div>
      </div>
      <div className="space-x-3">
        <Link to="/dashboard" className="text-gray-700">Dashboard</Link>
        <Link to="/clients" className="text-gray-700">Clientes</Link>
        <Link to="/sales" className="text-gray-700">Vendas</Link>
      </div>
    </nav>
  )
}