// /* Exercício 1
//     Considere que a gente só possa fazer três operações 
//     com `string`: adicionar um caractere ao final dele, 
//     remover um caractere do final dele ou substituir um caractere por outro. 
//     Dizemos que uma `string` é 'one edit' de outra se ela for o resultado da original a 
//     partir de UMA SÓ dessas operações. 
//     Escreva um método que determine se uma `string` é  'one edit' de outra.
//     */



// const isOneEdit = (stringA: string, stringB: string): boolean => {
//     // se a diferença entre as duas for maior por 1 caractere 
//     // math.abs retorna um valor absoluto e não é um constructor

//     if (Math.abs(stringB.length - stringA.length) > 1) return false

//     if (stringA > stringB) {
//         return (stringA.includes(stringB))
//     }

//     let charsDiff = 0
//     for (let i = 0; i < stringA.length; i++) {
//         if(stringA[i] !== stringB[i]) charsDiff++
        
//     }
//     return charsDiff === 1


// }


// console.log(isOneEdit("laranja","laranj"))