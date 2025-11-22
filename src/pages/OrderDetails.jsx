import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SupabaseContext } from '../supabase'
import PrintOS from '../components/PrintOS'
import WhatsAppButton from '../components/WhatsAppButton'

export default function OrderDetails(){
  const { id } = useParams()
  const supabase = useContext(SupabaseContext)
  const [order, setOrder] = useState(null)
  const [items, setItems] = useState([])

  useEffect(()=>{ if(id) load() },[id])

  async function load(){
    const { data } = await supabase.from('orders').select('*').eq('id', id).single()
    setOrder(data)
    const { data: its } = await supabase.from('order_items').select('*').eq('order_id', id)
    setItems(its||[])
  }

  async function finalize(){
    await supabase.from('orders').update({ status: 'Finalizada', closed_at: new Date() }).eq('id', id)
    load()
  }

  if(!order) return <div className="p-6">Carregando...</div>

  return (
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold">Ordem #{order.number}</h2>
          <div className="text-sm text-gray-500">Cliente: {order.customer_id}</div>
        </div>
        <div className="space-x-2">
          <Link to={`/orders/${id}/edit`} className="px-3 py-2 border rounded">Editar</Link>
          <button onClick={finalize} className="px-3 py-2 bg-green-600 text-white rounded">Finalizar</button>
          <PrintOS order={order} items={items} />
          <WhatsAppButton phone={order.customer_phone} text={`Sua OS ${order.number} está ${order.status}`} />
        </div>
      </div>
      <section className="p-4 border rounded mb-4">
        <h3 className="font-semibold">Detalhes</h3>
        <p><strong>Equipamento:</strong> {order.equipment}</p>
        <p><strong>Defeito:</strong> {order.defect_reported}</p>
      </section>
      <section className="p-4 border rounded">
        <h3 className="font-semibold">Itens</h3>
        <table className="w-full">
          <thead><tr><th>Descrição</th><th>Qtd</th><th>Preço</th></tr></thead>
          <tbody>
            {items.map(i=> <tr key={i.id}><td>{i.description}</td><td>{i.quantity}</td><td>{i.total_price}</td></tr>)}
          </tbody>
        </table>
      </section>
    </div>
  )
}