//a) process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log("Olá meu nome é ",nome, "E minha idade é",idade+7,"anos")

