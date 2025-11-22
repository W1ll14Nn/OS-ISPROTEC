import React, { useContext, useEffect, useState } from 'react'
import { SupabaseContext } from '../supabase'

export default function Sales(){
  const supabase = useContext(SupabaseContext)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{ fetch() },[])
  async function fetch(){
    const { data } = await supabase.from('products').select('*')
    setProducts(data||[])
  }
  function add(p){ setCart(prev=>[...prev, {...p, quantity:1}]) }
  async function checkout(){
    const total = cart.reduce((s,i)=>s + Number(i.price||0), 0)
    const { data } = await supabase.from('sales').insert([{ total_amount: total }]).select().single()
    const saleId = data.id
    const items = cart.map(c=> ({ sale_id: saleId, product_id: c.id, description: c.name, quantity: c.quantity, unit_price: c.price, total_price: c.price }))
    await supabase.from('sale_items').insert(items)
    alert('Venda registrada')
    setCart([])
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vendas</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-3">
            {products.map(p=>(
              <div key={p.id} className="p-3 border rounded">
                <div className="font-semibold">{p.name}</div>
                <div>R$ {Number(p.price).toFixed(2)}</div>
                <button onClick={()=>add(p)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Adicionar</button>
              </div>
            ))}
          </div>
        </div>
        <div className="border p-3 rounded">
          <h3 className="font-semibold">Carrinho</h3>
          <ul>{cart.map((c,i)=><li key={i}>{c.name} - {c.quantity}</li>)}</ul>
          <button onClick={checkout} className="mt-3 px-3 py-2 bg-green-600 text-white rounded">Finalizar</button>
        </div>
      </div>
    </div>
  )
}