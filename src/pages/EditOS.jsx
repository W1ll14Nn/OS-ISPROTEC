import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SupabaseContext } from '../supabase'

export default function EditOS(){
  const { id } = useParams()
  const supabase = useContext(SupabaseContext)
  const [order, setOrder] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{ if(id) load() },[id])

  async function load(){
    const { data } = await supabase.from('orders').select('*').eq('id', id).single()
    setOrder(data)
  }
  async function save(e){
    e.preventDefault()
    await supabase.from('orders').update({ equipment: order.equipment, defect_reported: order.defect_reported, diagnosis: order.diagnosis }).eq('id', id)
    navigate('/orders/'+id)
  }
  if(!order) return <div className="p-6">Carregando...</div>
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Editar OS #{order.number}</h1>
      <form onSubmit={save} className="space-y-3">
        <input value={order.equipment||''} onChange={e=>setOrder({...order, equipment: e.target.value})} className="w-full p-2 border rounded" />
        <textarea value={order.defect_reported||''} onChange={e=>setOrder({...order, defect_reported: e.target.value})} className="w-full p-2 border rounded" />
        <textarea value={order.diagnosis||''} onChange={e=>setOrder({...order, diagnosis: e.target.value})} className="w-full p-2 border rounded" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Salvar</button>
      </form>
    </div>
  )
}