/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta()
let blackjack = {}

console.log("Bem vindo(a) ao jogo de BlackJack")

if (confirm("Quer iniciar uma nova jogo??")) {
} else {
   console.log("O jogo acabou!!")
}


if (blackjack) { 
let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let carta1Pc = comprarCarta()
let carta2Pc = comprarCarta()

let totalUsuarioPonto = carta1Usuario.valor + carta2Usuario.valor
let totalPcPonto = carta1Pc.valor + carta2Pc.valor

console.log(`Usuário - Cartas :${carta1Usuario.texto}, ${carta2Usuario.texto} - pontuação de ${totalUsuarioPonto}`)
console.log(`Computador - Cartas :${carta1Pc.texto}, ${carta2Pc.texto} - pontuação de ${totalPcPonto}`)



if (totalUsuarioPonto > totalPcPonto) {
   console.log("O usuário venceu")
} else if (totalPcPonto > totalUsuarioPonto) {
   console.log("O computador venceu !!")

} else if (totalUsuarioPonto === totalPcPonto) {
   console.log("Empate!")

}
}else{
   console.log("O jogo acabou!")
}





