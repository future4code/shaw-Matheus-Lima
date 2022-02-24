// 1 exercicio 1

// Matheus Nachtergaele
// Virginia Cavendish
// Globo e horario as 14horas



//exercicio 2 

// Juca 
// idade = 3 
// raça = SRD

// Juba
// idade = 3 
// raça = SRD

// Jubo
// idade = 3 
// raça = SRD

//b 
// a sintaxe de ... puxa toda a informação de outro objeto criado

// exercicio 3 

// pergunta (a)
// false
// undefined pois a altura não foi definida dentro do objeto

// pergunta (b)
// undefined pois a altura não foi definida dentro do objeto


// //1 - a) Crie um objeto. Ele deve conter duas propriedades:
//  nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"




const pessoa = {
    nome: "Daniel",
    apelidos: ["Z ", "Zenas ", " Vilão"]



}


function minhaFuncao(pessoa) {
    const eusou = (`Eu sou o Daniel mas pode me chamar de ${pessoa.apelidos}`)
    return eusou

}

//   console.log(minhaFuncao(pessoa))


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novapessoa = {
    ...pessoa,
    novoapelido: ["Z1", "z2", "z3"]





}

// console.log(minhaFuncao(pessoa))

//2 - a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 


const pessoa1 = {

    nome: "Jorge",
    idade: 25,
    profissao: "Dev"

}

const pessoa2 = {
    ...pessoa1,
    nome: "Cleiton",
    idade: "18"
}


// console.log(pessoa2)

// b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`



function minhaFuncao(pessoa1){
    
    const pessoaNome = pessoa1.nome
    const pessoaIdade = pessoa1.idade
    const pessoaProfiss = pessoa1.profissao
const pessoaGeral1 = [pessoaNome,pessoaNome.length, pessoaIdade, pessoaProfiss, pessoaProfiss.length]
return pessoaGeral1
}
// console.log(minhaFuncao(pessoa1))



function minhaFuncao(pessoa2){
    
    const pessoaNome = pessoa2.nome
    const pessoaIdade = pessoa2.idade
    const pessoaProfiss = pessoa2.profissao
const pessoaGeral2 = [pessoaNome,pessoaNome.length, pessoaIdade, pessoaProfiss, pessoaProfiss.length]
return pessoaGeral2
}
// console.log(minhaFuncao(pessoa2))




// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    


     
//         💡 Aqui você deve usar o método **push()**
        
//      
        
    
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**


const carrinho = []

const objeto1 = {
    disponibilidade1:true,
    nome: "Pera"

}

const objeto2 = {
    disponibilidade2:true,
    nome2: "Caju"
}


const objeto3 = {
    disponibilidade3: true,

    nome3:"Jabuticaba"

}


function frutas (objeto1){

    const frutaArray = carrinho.push(objeto1)
    
    console.log(frutaArray)

}

frutas(objeto1)
frutas(objeto2)
frutas(objeto3)


console.log(carrinho)