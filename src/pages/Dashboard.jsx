import React, { useContext } from 'react'
import { SupabaseContext } from '../supabase'

export default function Dashboard(){
  const supabase = useContext(SupabaseContext)

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-14 mr-4"/>
            <div>
              <h1 className="text-2xl font-bold">ISPROTEC ASSISTÊNCIA</h1>
              <div className="text-sm text-gray-500">Técnica em Impressoras</div>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 border rounded">Novo OS</button>
          </div>
        </header>

        <section className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 border rounded shadow-sm">
            <div className="text-sm text-gray-500">OS Abertas</div>
            <div className="text-2xl font-bold">5</div>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <div className="text-sm text-gray-500">OS Finalizadas</div>
            <div className="text-2xl font-bold">12</div>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <div className="text-sm text-gray-500">Faturamento</div>
            <div className="text-2xl font-bold">R$ 10.500,00</div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-semibold mb-2">Últimas Ordens de Serviço</h3>
            <table className="w-full text-left">
              <thead><tr><th>Nº</th><th>Cliente</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>4</td><td>Maria Pereira</td><td><span className="px-2 py-1 bg-yellow-100 rounded">Em Andamento</span></td></tr>
                <tr><td>3</td><td>João Sousa</td><td><span className="px-2 py-1 bg-green-100 rounded">Fechada</span></td></tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold mb-2">Nova Ordem de Serviço</h3>
            <form className="space-y-3">
              <select className="w-full p-2 border rounded">
                <option>Ana Lima</option>
                <option>Carlos Silva</option>
              </select>
              <input placeholder="Equipamento" className="w-full p-2 border rounded" />
              <textarea placeholder="Defeito" className="w-full p-2 border rounded"></textarea>
              <button className="px-4 py-2 bg-isprotecBlue text-white rounded">Criar OS</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}