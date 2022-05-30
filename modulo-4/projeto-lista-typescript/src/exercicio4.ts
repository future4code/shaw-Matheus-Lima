// enum setores{
//     MARKETING = "marketing",
//     VENDAS = "VENDAS",
//     FINCANCEIRO = "FINCANCEIRO"
// }

// type pessoas = {
//     nome:string
//     salario:number
//     presencial:boolean
//     setor:setores
// }


// const emprego:pessoas[] = [
// 	{ nome: "Marcos", salario: 2500, setor: setores.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salario: 1500, setor: setores.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salario: 2200, setor: setores.FINCANCEIRO, presencial: true},
// 	{ nome: "João" ,salario: 2800, setor: setores.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salario: 5500, setor: setores.FINCANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salario: 4700, setor: setores.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salario: 3500, setor: setores.MARKETING, presencial: true }
// ]


// function pessoasPres (empPres:Array<pessoas>):object[]{
//     const novaPessoas:pessoas[] = empPres.filter((pessoas)=>{
//         return pessoas.presencial === true && setores.MARKETING === pessoas.setor
//     })

// return novaPessoas

// }

// console.log(pessoasPres(emprego))

