Exercício 1

a. Seria possível imprimir a senha (password) atrelada a essa instância?

sim séria possível imprimir ela

b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
1x chamando construtor da classe foi chamado

###

Exercicio 2 

a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

Foi chamada 1x também Chamando o construtor da classe Customer

b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

Foi chamado 2x o Chamando o construtor da classe User pela forma de validação pois esta reaproveitando informçaões do componente pai ele retorna 2x o "chamando o construtor da classe USER"

###

Exercicio 3

a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

Sim seria possível imprimir essa, pois está public 


### 

Polimorfismo 


Exercicio 1 

a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? 
Por que isso aconteceu

Ele retornou as duas propriedades, mas com a tipagem any, se eu coloco para retornar somente numeros ele retorna um erro falando que a registration não é a assinable ao tipo number mesmo ela já sendo tipada com number no parametro 

### 

Exercico 2 

a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
Cannot create an instance of an abstract class

b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
Apagar o abstract 

c.


###

Exercicio 3

1. O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior) 

Criar um modelo a partir da classe abstrata

2.Por que a Place não é uma interface?

Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces

3.Por que a classe Place é uma Classe Abstrata?
Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

###

Exercicio 4




###

Exercicio 5


a. *Quais as semelhanças dessa classe com a `ResidentialClient`?*
Todos estão implementando um client 

b. *Quais as diferenças dessa classe com a `ResidentialClient`?*

as diferenças do paramêtro na resident client são as quantidades de moradores, já na Commercial Client é a quantidade de pisos.