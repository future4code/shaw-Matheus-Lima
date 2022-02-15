//1-Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// resultado
//(a = false)
//(b = false )
//(c = true)
//(d = boolean)


//2-Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

// Nesse caso o prompt sempre retorna strings por isso não está fazendo a função corretamente ele deveria trasnformar as strings em number para assim o prompt poder somar


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


//3 - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)





// 1. Faça um programa que:
    
//     a) Pergunte a idade do usuário
    
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// let idadeUsuario = prompt("Digite a sua idade!")
// let idadeamigo = prompt  ("Digite a idade do seu melhor amigo(a)!")

// let resultado = idadeUsuario > idadeamigo
// console.log("Sua idade é maior do que a do seu melhor amigo(a)",resultado,"A diferença de idade entre você e seu amigo é",idadeUsuario - idadeamigo)




// 2. Faça um programa que:
    
//     a) Peça ao usuário que insira um número **par**
    
//     b) Imprima na console **o resto da divisão** desse número por 2.
    
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// let usuario = Number(prompt("Insira um Numero Par!"))
// console.log (usuario % 2 );

//C - todos os numeros pares que eu digito o resultado são 0
//D - já os numeros impares dão 1





// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas


// let idadeUsuario = prompt ("Qual Sua idade?")
// console.log ("Idade em meses",idadeUsuario*12)
// console.log("Idade do usuário em dias",idadeUsuario*24)
// console.log("Idade do usuário em horas ",idadeUsuario*365*24)

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let num1 = Number(prompt ("Digite um Numero"))
let num2 = Number(prompt("Digite outro Numero!"))
console.log(num1> num2)
console.log(num1=== num2)
console.log(num1 % num2 === 0)
console.log(num2 % num1 === 0)





// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? 