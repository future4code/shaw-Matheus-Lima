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

//  8 - Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente.


usuario = []
computador = []







let embaralharCartas = false

while (embaralharCartas !== false){
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   computador.push(comprarCarta())
   if (usuario[0].valor === 11 && usuario[1].valor === 11) (computador[0].valor === 11 && computador.valor[1]=== 11), usuario = []
   computador = []
}

