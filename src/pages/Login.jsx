import React, { useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handle(){
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if(error){ alert('Invalid login credentials'); return }
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">ISPROTEC ASSISTÊNCIA</h1>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-2" />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Senha" className="w-full p-2 mb-4 border" />
        <button onClick={handle} className="w-full bg-blue-600 text-white p-2 rounded">Entrar</button>
      </div>
    </div>
  )
}