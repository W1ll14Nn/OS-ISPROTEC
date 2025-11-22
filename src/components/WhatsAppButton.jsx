import React from 'react'
export default function WhatsAppButton({ phone, text, className }){
  if(!phone) return null
  const number = phone.replace(/[^0-9]/g,'')
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text||'Olá')}`
  return <a href={url} target="_blank" rel="noreferrer" className={className||'inline-block px-3 py-1 bg-green-500 text-white rounded'}>WhatsApp</a>
}