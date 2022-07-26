/*
Implemente um método que 
performe uma compressão de 
string usando a contagem dos caracteres 
repetidos em sequência. 
Caso o resultado final tenha um 
tamanho maior do que a string inicial, 
seu programa deve retornar a string inicial

*/


//contar os caracteres repetidos em sequencias (for)

// caso resultado final for maior que a string inicial retornar a string inicial(if length)



const compression = (input:any)=>{

    const compString = []
    let lastChar = input[0]
    let charCount = 0 

    for(const char of input){
        if(char !== lastChar){
            compString.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount++
    }

    compString.push(lastChar + charCount)
    let result = ""
    for(const key of compString){
        result += key
    }
    return result.length > input.length ? input: result
}


console.log(compression("aabbb"))



