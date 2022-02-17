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




function teorema(n1,n2,a1,b2) {
    
    a1 = 4
    b2 = 5

    const ca = a1 * a1 
    
    const co = b2 * b2
    
   hipo = (a1* a1)+ (b2* b2)

    
    return hipo
}

const mostrarTela = teorema()
console.log(mostrarTela)


