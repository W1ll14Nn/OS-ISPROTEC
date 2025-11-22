import React, { useContext, useEffect, useState } from 'react'
import { SupabaseContext } from '../supabase'

export default function Clients(){
  const supabase = useContext(SupabaseContext)
  const [clients, setClients] = useState([])
  const [name, setName] = useState('')

  useEffect(()=>{ fetchClients() },[])

  async function fetchClients(){
    const { data } = await supabase.from('customers').select('*').order('id',{ascending:false})
    setClients(data||[])
  }
  async function add(){
    if(!name) return
    await supabase.from('customers').insert([{name}])
    setName(''); fetchClients()
  }
  async function remove(id){
    if(!confirm('Excluir cliente?')) return
    await supabase.from('customers').delete().eq('id', id)
    fetchClients()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <div className="flex gap-2 mb-4">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nome" className="border p-2" />
        <button onClick={add} className="px-4 py-2 bg-blue-600 text-white rounded">Adicionar</button>
      </div>
      <table className="w-full border">
        <thead><tr className="bg-gray-100"><th>ID</th><th>Nome</th><th></th></tr></thead>
        <tbody>
          {clients.map(c=>(
            <tr key={c.id}><td className="p-2">{c.id}</td><td className="p-2">{c.name}</td><td className="p-2"><button onClick={()=>remove(c.id)} className="text-red-500">Excluir</button></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}