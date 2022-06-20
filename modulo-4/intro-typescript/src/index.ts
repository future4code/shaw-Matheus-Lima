// console.log("Hello World")


//exercicio 1 
// function checaTriangulo(a:number, b:number, c:number):string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

//   console.log(checaTriangulo(2,3,4))

//   exercicio 2

//   function imprimeTresCoresFavoritas():void{
//     const cor1:string =("vermelho")
//     const cor2:string = ("azul")
//     const cor3:string = ("roxo")
//     console.log([cor1, cor2, cor3])
//  }



// imprimeTresCoresFavoritas()

//exercicio 3


// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

//  console.log(checaAnoBissexto(2020))









//exercicio 4

// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

//   console.log(comparaDoisNumeros(2,10))

//exercicio 5


// function checaRenovacaoRG():boolean {
//     const anoAtual = Number(2022)
//     const anoNascimento = Number(1995)
//     const anoEmissao = Number(2021)
 
//     const idade: number = anoAtual - anoNascimento
//     const tempoCarteira: number = anoAtual - anoEmissao
 
//     const cond1 = idade <= 20 && tempoCarteira >= 5
//     const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3 = idade > 50 && tempoCarteira >= 15
 
//     return (cond1 || cond2 || cond3)
//  }
 

//  console.log(checaRenovacaoRG())