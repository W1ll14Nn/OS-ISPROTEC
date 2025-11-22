export function formatCurrency(v){
  return v ? v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}) : 'R$ 0,00'
}