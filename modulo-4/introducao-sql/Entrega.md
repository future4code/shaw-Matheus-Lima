##
*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

VARCHAR - strings de no máximo n caracteres
DATE  - representa uma data (YYYY-MM-DD)


*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

ele retorna os bancos de dados e a mesa que eu criei para esse exercicio 


*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
Ele retorna os valores de campo : id, type, Null, default e extra

##
*Exercicio 2*
b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' ele diz que o id está duplicado e só pode ter um unico id 002


C) ele não segue o padrão citado no parametro para criação dos valores assim passando mais valores sem o parametro
Error Code: 1136. Column count doesn't match value count



d) o parametro de nome não pode ser null por isso retornou o erro Error Code: 1364. Field 'name' doesn't have a default value


e) o valor passado na data está em number e tem que ser passado por string por isso o erro 
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' 
##
*Exercicio 3*

 a) Escreva uma query que retorne todas as informações das atrizes
SELECT name  FROM Actor WHERE gender = "female"


b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*


c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
SELECT * from Actor WHERE gender = "invalid";


d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

Select id, name , salary from Actor  WHERE salary = < 500

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
Error Code: 1054. Unknown column 'nome' nome não existe na mesa de colunas 

##
*Exercicio 4*

a) Explique com as suas palavras a query acima
selecionando todos os valores de atores onde o nome é = a o inicio da palavra com "a" ou ao inicio da palavra com "j" e o salário é menor que 30000

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000


c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");


d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
##
*Exercicio 5*

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

##
*EXERCICIO 6*

a) SELECT id, title, rating FROM Movie WHERE id = "004";

b) SELECT * FROM Movie WHERE name = "Deus é Brasileiro";

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

*EXERCICIO 7*

a) SELECT * FROM Movie
WHERE title LIKE "%vida%"; 

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. 
Utilize qualquer `TERMO DE BUSCA` para exemplificar.

c) Procure por todos os filmes que já tenham lançado
SELECT * FROM Movie
WHERE realease_Date <> 2022


d) Procure por algum filme que já tenha lançado, com o termo de busca 
contido no título ou sinopse e com a avaliação maior do que 7.

SELECT * FROM Movie 
WHERE(title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") 
AND rating > 7