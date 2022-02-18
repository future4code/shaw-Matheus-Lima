


// function minhaFuncao(variavel) {
//     return variavel
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// 10
// 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função 
// `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//2 e // 10


// 2-


// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//     return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// a função deixa o texto em toLowerCasee incluie e verifica se tem cenoura na resposta

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      ii.  `CENOURA é bom pra vista`
//      iii. `Cenouras crescem na terra`

// eu gosto de cenoura.

// 1. Escreva as funções explicadas abaixo:

//     a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//     ```
//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//     ```

//     Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//     b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//     o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma 
//     `string` que unifique todas as informações da pessoa em uma só mensagem com o template:



// const nome = "Matheus"
// const idade = 26
// const estado = "Mato Grosso"
// const estudo = "Estudante"

// function sobreMin() {
//     nome = "Olá meu nome é Matheus"
//     idade = "Tenho 26 anos"
//     estado = "Moro no Mato Grosso"
//     estudo = "Sou estudante da Labenu"
// }

// console.log(sobreMin)

// funcao Sem Retorno (void)
// let variavel = "PâmELa"

// function maiusculo(){
//   variavel = variavel.toUpperCase();
// }
// maiusculo();
// console.log(maiusculo());

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem
//  às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) 
// e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:


// const nome = "Matheus"
// const idade = 26
// const estado = "Mato Grosso"
// const estudo = "Estudante"

// function sobreMin() {
//     nome = "Olá meu nome é Matheus"
//     idade = "Tenho 26 anos"
//     estado = "Moro no Mato Grosso"
//     estudo = "Sou estudante da Labenu"
// }


// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
// Invoque a função e imprima no console o resultado.
// function soma (n1,n2){
//     const somar = n1 + n2

//     return somar


// }
// const resultado = soma(2, 3)

// console.log(resultado)
// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function checando(n1, n2) {
//     let numeros = n1 > n2
//     return numeros

// }
// const totalNumeros = checando(3, 2)
// console.log(totalNumeros);


// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.



// funcao nomeada
// function somar(n1, n2) {
//   const soma = n1 + n2

//   return soma
// }
// const mostraTela = somar(1, 2)
// console.log(mostraTela)


function numeros (n1){
    let num1 = n1 === 0 
    return num1

}
const nu1 = numeros (4)
console.log(nu1)












// 1 Funções são trechos de códigos como quaisquer
// outros mas que podemos acessá-los mais de
//  uma vez ao longo do código através de invocações/chamadas.
//  Então, funções podem chamar/invocar outras funções também.
//  Sua tarefa é escrever duas funções

//a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

// let variavel = () => {
//     "Hello World"
// }

// console.log(variavel)



// b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno.
// Faça a soma entre esses valores e chame a sua primeira função mandando
// este resultado da soma como entrada para imprimi-lo


// const soma = (n1, n2) => n1 + n2

// const somaNaTela = soma(2,3)

// console.log(somaNaTela)


// const olaNumeros = variavel + soma

// console.log(olaNumeros)




// function teorema(n1, n2, a1, b2) {

//     a1 = 4
//     b2 = 5

//     const ca = a1 * a1

//     const co = b2 * b2

//     hipo = (a1 * a1) + (b2 * b2)


//     return hipo
// }

// const mostrarTela = teorema()
// console.log(mostrarTela)


