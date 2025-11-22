import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SupabaseContext } from '../supabase'

export default function Login(){
  const supabase = useContext(SupabaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({email, password})
    if(error){ alert(error.message); return }
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 border rounded shadow">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="logo" className="h-20" />
        </div>
        <h2 className="text-xl font-semibold mb-4">Acesse o Painel</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full p-3 border rounded" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full p-3 bg-isprotecBlue text-white rounded">Entrar</button>
        </form>
      </div>
    </div>
  )
}