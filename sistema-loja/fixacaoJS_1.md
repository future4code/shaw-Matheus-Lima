
ˋˋˋ 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 salario = 2000
     qtdeCarrosVendidos = 3
     valorTotalVendas = 130000
    const valorTodasasVendas = valorTotalVendas * 0.05 + 100 * 3 + salario
    return valorTodasasVendas
   }
   console.log(calculaSalario())
ˋˋˋ 
ˋˋˋ 
   function calculaPrecoTotal(quantidade) {
  macasCompradas = 2 
  if (macasCompradas <= 12){
    return macasCompradas * 1.30
    
}

console.log(calculaPrecoTotal())
ˋˋˋ 
ˋˋˋ 
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let media = (ex  + (p1 * 2) + (p2 * 3)) / 6
  if (media >= 9) {
    return "A"
  } else if (media < 9 && media >= 7.5) {
    return "B"
  } else if (media < 7.5 && media >= 6) {
    return "C"

  } else if (media < 6) {
   return "D"
  } else { return "invalido" }

}

console.log(calculaNota(10,5,6))
ˋˋˋ 