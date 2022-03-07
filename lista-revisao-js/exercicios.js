// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  array = ["Branco", "Vermelho", "Preto", "Amarelo", "Azul", "Ciano"].length

  return array
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array = [0, 1, 2, 3, 4].reverse()
  return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array = [5, 3, 2, 1, 4].sort()
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  array = [1, 2, 3, 4, 5, 6]
  const novoArray = array.filter((array) => {
    return array % 2 == 0
  })
  return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  array = [1, 2, 3, 4, 5, 6, 8]

  const novoArray = array.filter((array) => {
    return array % 2 == 0
    novoArray * 2
  })
  return novoArray

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  array[12, 3, 4, 6, 7]
  return Math.max.apply(null, array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  num1 = 10
  num2 = 4
  objeto = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: num1 % num2 == 0,
    diferenca: num1 == num2,
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  ladoA = 3
  ladoB = 4
  ladoC = 3
  if (ladoA === ladoB == ladoC) {
    console.log("Escaleno")

  } else if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Equilátero")
  } else (console.log("Isósceles"))

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array = [2, 3, 5, 6, 7, 8]
  const arrayMaior = Math.max.apply(null, array)
  const arrayMenor = Math.min.apply(null, array)
  return [arrayMaior, arrayMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci"]

  }
  const assistirFilme = `Venha assistir ao filme${filme.nome} de ${filme.ano} dirigido por ${filme.diretor}, estrelando ${filme.atores}.`
  return assistirFilme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  }
  novaPessoa = {
    ...pessoa, nome: "Anonimo"


  }
  return novaPessoa

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  pessoas = [{
    nome: "Paula", idade: 12, altura: 1.8,
    nome: "Paula", idade: 12, altura: 1.8,
    nome: "Pedro", idade: 15, altura: 1.9,
    nome: "Luciano", idade: 22, altura: 1.8,
    nome: "Artur", idade: 10, altura: 1.2,
    nome: "Soter", idade: 70, altura: 1.9





  }]

  if (pessoas.idade > 14){
    return pessoas
  }
  else if (pessoas.altura >= 1.5){
    return pessoas
  }else if (pessoas.idade < 70){
    return pessoas
  }

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  pessoas = [{
    nome: "Paula", idade: 12, altura: 1.8,
    nome: "Paula", idade: 12, altura: 1.8,
    nome: "Pedro", idade: 15, altura: 1.9,
    nome: "Luciano", idade: 22, altura: 1.8,
    nome: "Artur", idade: 10, altura: 1.2,
    nome: "Soter", idade: 70, altura: 1.9
  }]

  if (pessoas.idade > 70){
    return pessoas
  }else if (pessoas.altura >= 1.5){
    return pessoas
  }else if (pessoas.idade <= 70){
    return pessoas
  }

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}