``array = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let count = 0;
    arrayDeNumeros.forEach((x) => (x === numeroEscolhido));
    return `O número ${numeroEscolhido} aparece  ${count}x`;
  }
  
  console.log(contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5],4))




  contaOcorrencias(4)``