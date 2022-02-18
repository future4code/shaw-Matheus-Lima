//Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array) = a

// array = null
// // console.log('b. ', array) = b null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) = O numero de de valores dentro do array são 11 itens.

// let i = 0
// console.log('d. ', array[i]) = 0 undefined


// array[i+1] = 19
// console.log('e. ', array)

//2- Leia o código abaixo com atenção 
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBA NUM ÔNIBUS EM MARROCOS - frase.lenght = 29

//1-Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!


// const nomeDoUsuario = prompt ("Digite o seu Nome!")

// const usuarioEmail = prompt ("Digite o seu e-mail!")

// console.log(`O e-mail, ${usuarioEmail} foi cadastrado com sucesso. Seja Bem vindo(a), ${nomeDoUsuario}`)


// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//     a) Imprima no console o array completo

//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

// const comidasPreferidas = ["Lasanha", "Pizza", "Macarrão", "Sushi", "Cachorro-quente"]
// console.log(comidasPreferidas)

// console.log(`Essas são minhas comidas preferidas ${comidasPreferidas[0]}`)

// console.log(`Essas são minhas comidas preferidas ${comidasPreferidas[1]}`)

// console.log(`Essas são minhas comidas preferidas ${comidasPreferidas[2]}`)

// console.log(`Essas são minhas comidas preferidas ${comidasPreferidas[3]}`)

// console.log(`Essas são minhas comidas preferidas ${comidasPreferidas[4]}`)

// const comidaUsuario = prompt("Qual é sua comida preferida ?")
// const comidaUsuario1 = comidasPreferidas.replaceAll("Pizza")
// console.log(``)
// console.log(comidasPreferidas.replaceAll(1,comidaUsuario),comidasPreferidas)

// replace all


// 3. Faça um programa, seguindo os passos:

//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

//     c) Imprima o array no console

//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

//     e) Remova da lista o item de índice que o usuário escolheu.

//     f) Imprima o array no console

let listaDeTarefas = []

listaDeTarefas = [prompt("Digite a tarefa 1:"), prompt("Digite a tarefa 2"), prompt("Digite a tarefa 3")]

console.log(listaDeTarefas)

let tarefascompeltas = prompt ("Digite um numero de 0 a 2 de tarefas feitas")

listaDeTarefas.splice(tarefascompeltas,1)

console.log(listaDeTarefas)
