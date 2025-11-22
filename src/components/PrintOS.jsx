import React from 'react'
export default function PrintOS({ order, items }){
  function handlePrint(){
    const html = `
      <html><head><title>OS ${order.number}</title></head><body>
      <h1>ISPROTEC ASSISTÊNCIA</h1>
      <h2>Ordem ${order.number}</h2>
      <p>Cliente ID: ${order.customer_id}</p>
      <p>Equipamento: ${order.equipment}</p>
      <p>Defeito: ${order.defect_reported}</p>
      <hr/>
      <h3>Itens</h3>
      <ul>
        ${items.map(i=>`<li>${i.description} - ${i.quantity} x ${i.unit_price || i.total_price}</li>`).join('')}
      </ul></body></html>`
    const w = window.open('','_blank')
    w.document.write(html); w.document.close(); w.print()
  }
  return <button onClick={handlePrint} className="px-3 py-2 bg-blue-600 text-white rounded">Imprimir OS</button>
}