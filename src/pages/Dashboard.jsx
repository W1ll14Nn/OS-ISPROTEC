import React, { useContext, useEffect, useState } from 'react'
import { SupabaseContext } from '../supabase'
import { Link } from 'react-router-dom'

export default function Dashboard(){
  const supabase = useContext(SupabaseContext)
  const [summary, setSummary] = useState(null)
  useEffect(()=>{ fetch() },[])
  async function fetch(){
    const { data } = await supabase.from('orders').select('status, total_amount')
    const open = (data||[]).filter(o=>o.status==='Aberta').length
    const closed = (data||[]).filter(o=>o.status==='Finalizada').length
    const total = (data||[]).reduce((s,o)=>s + Number(o.total_amount||0),0)
    setSummary({open, closed, total})
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {summary && (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded"><div className="text-sm text-gray-500">OS Abertas</div><div className="text-2xl">{summary.open}</div></div>
          <div className="p-4 border rounded"><div className="text-sm text-gray-500">OS Finalizadas</div><div className="text-2xl">{summary.closed}</div></div>
          <div className="p-4 border rounded"><div className="text-sm text-gray-500">Faturamento</div><div className="text-2xl">R$ {summary.total.toFixed(2)}</div></div>
        </div>
      )}
    </div>
  )
}