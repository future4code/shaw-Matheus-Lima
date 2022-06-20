//Exercicio 1

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela.
//  Tente atribuir um número a esta variável. O que acontece?

// const minhaString:string = 1 // numero não pode atribuida a uma variavel com valor de string

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor? atribuimos |

// let meuNumero:string | number = 1

// meuNumero="string"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos 
// acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.


enum cores{
    vermelho = "vermelho",
    azul = "azul",
    verde = "verde",
    preto = "preto"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}    

const humano1: pessoa = {
    nome: "joao",
    idade: 22,
    corFavorita: cores.verde
}    


const humano2: pessoa = {
    nome: "Jorge",
    idade: 23,
    corFavorita: cores.azul
}    
const humano3: pessoa = {
    nome: "Alice",
    idade: 25,
    corFavorita: cores.preto
}    
// d) Modifique a propriedade corFavorita para que apenas 
// seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.


