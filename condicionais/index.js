// Tente responder os exercícios dessa seção sem executar o código. 
// Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 



//-1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// // realiza o teste de para saber se o numero é par.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// // somente para numeros pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// para numeros impares.


// 2-O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// para consultar os preços das frutas consultadas

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
// impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// ele executaria todos e não seria nenhuma das frutas acima e retornaria o valor de 5



// 3- Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


// a) O que a primeira linha está fazendo?
// pedindo para o usuario digitar um numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// se for 10 ele ira receber a mensagem que esse numero passou no teste se for -10 ele vai receber que a variavel mensagem não está definida

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// haverá um erro no console dizendo que a mensagem não foi definida no caso teria que ter um else if para difinir a propriedade da mensagem secreta.



// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//     Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`



const idade = Number(prompt("Digite sua idade!!"))

function poder() {
    if (idade >= 18) {
        console.log("Você pode dirigir!")
    } else {
        console.log("Você não pode dirigir.")
    }

}
poder()


// 2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


const turno = prompt("Que turno você estuda digite M para matutino, V para vespertino, e N para Noturno")

function turnoAula(){

    if (turno == "M" ){
        console.log("Bom dia!!");
    }else if(turno == "V"){
        console.log("Boa Tarde!!")
    }else{
        console.log("Boa noite!!")
    }

}

turnoAula(turno)


// 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


// const turno = prompt("Que turno você estuda ? Digite M para matutino, V para vespertino, N para noturno.")






function turnoAula() {

    switch (turno) {
        case "M":
        console.log("Bom dia!")
            break
        case "V":
            console.log("Boa tarde ")
            break;
        default:
            console.log("Boa noite")
            break



    }
}

turnoAula(turno)




//4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um 
// filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário 
// qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

const saberFilme = prompt("Qual gênero de filme você vai assistir ?")
const precoFilme = Number(prompt("Qual preço do filme!!"))
const totalFilme = saberFilme && precoFilme

function filme() {
    if (totalFilme <= 15) {
        console.log("Bom filme!")

    } else if (totalFilme == "Fantasia") {
        console.log("Bom Filme!")

    } else {
        console.log("Escolha outro filme :(!")
    }
}

filme()
