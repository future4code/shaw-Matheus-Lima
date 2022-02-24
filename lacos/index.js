// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// um laço repetindo o valor até chegar o i a 10 


// 2-

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// a) O que vai ser impresso no console?

// numero 19, 21, 23 ,25 ,27,30 todos os numeros maiores que o 18 pois o numero iria adicionando 

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// o for of já faz a função do indice dentro dele mais seria com  .length

// 3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// // seria 4 *




// 1-Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array


//     ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
//     Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

    
// c) Por fim, imprima o array com os nomes dos bichinhos no console


const pets1 = Number(prompt("Digite o nome dos seus pets!"))
const pets = Number(prompt("Quantos pets você tem?"))


if (pets === 0){
    console.log("Que pena! Você pode adotar um pet")

}

if(pets > 0){
      let arraypets = []
      for(let i = 0; i < pets; i++){     arraypets.push(prompt("diga o nome do seu pet"))
          }

        }


        // 2. Considere que você tenha acesso a um `array`
//(chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo,
// realizando as operações pedidas:

const arrayOriginal =  [8, 27, 55, 112, 10]

//a) Escreva um programa que **imprime** cada um dos valores do array original.

function valorDoArrayOriginal (arrayOriginal) {
  for(let valor of arrayOriginal){
    console.log(valor)
  }
}
valorDoArrayOriginal(arrayOriginal)

//b) Escreva um programa que **imprime** cada um dos valores
//do array original divididos por 10.

function valorDoArrayOriginal (arrayOriginal) {
  for(let valor of arrayOriginal){
    console.log(valor/10)
  }
}
valorDoArrayOriginal(arrayOriginal)

//c) Escreva um programa que **crie** um novo array contendo,
//somente, os números pares do array original e **imprima**
//esse novo array.

function valoresPares (arrayOriginal) {
  let arrayNumerosPares = []
  for(let valor of arrayOriginal){
    if(valor % 2 === 0){
      arrayNumerosPares.push(valor)
    }

  }
  console.log(arrayNumerosPares)
}
valoresPares(arrayOriginal)


//d) Escreva um programa que **crie** um novo array contendo
//strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.

function imprimirArrayDeStrings (arrayOriginal){
  let arrayDeStrings = []
  let i = 0
  for(let valor of arrayOriginal){
    arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
    i++
  }
  console.log(arrayDeStrings)
}
imprimirArrayDeStrings (arrayOriginal)

//e) Escreva um programa que imprima no console o maior e
// o menor números contidos no array original.

