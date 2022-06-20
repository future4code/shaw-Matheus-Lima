*EXERCICIO 1*


a.
ALTER TABLE Actor DROP COLUMN salary;
Remove a coluna de salary

b.
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Altera o gender para gender sex e o valor que recebe de VARCHAR(255) para VARCHAR(6)

c.
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
altera novamente para gender e o que recebe para VARCHAR(255)


*d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*
ALTER TABLE Actor CHANGE gender gender VARCHAR(100); 

##

*EXERCICIO 2*

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1936-10-5"
WHERE id = "003";

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";
 
UPDATE Actor
SET name = "juliana paes"
WHERE id = "003"

c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1958-10-8",
salary = 10000,
gender = "MALE"
WHERE id = "005"

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect. 
ele tenta atualizar todos os dados 

##

*EXERCICIO 3*

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor WHERE id = "003"


b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

DELETE FROM Actor 
WHERE gender = "male"
 AND salary > 100000000

##

*EXERCICIO 5 4*

a. Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor


b. Escreva uma query que pegue o menor salário das atrizes

SELECT MIN(salary) FROM Actor
WHERE gender = "female"

*c. Escreva uma query que pegue a quantidade de atrizes*
SELECT COUNT(*) FROM Actor 
WHERE gender = "Female";

d. Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;

##

*EXERCICIO 5*

*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
Ela faz a contagem e  retorna a quantidade de males e na linha de baixo a quantidade de females.

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
SELECT id, name FROM Actor
ORDER BY name DESC;

*c. Faça uma query que retorne todos os atores ordenados pelo salário*
SELECT * FROM Actor
ORDER BY salary ASC


*d. Faça uma query que retorne os atores com os três maiores salarios*

SELECT * FROM Actor
ORDER BY salary ASC LIMIT 3

*e. Faça uma query que retorne a média de salário por gênero*

SELECT AVG(salary) FROM Actor
GROUP BY gender;


*EXERCICIO 6*

*a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* ALTER TABLE Movie ADD playing_limit_date DATE;

*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
ALTER TABLE Movie Change rating rating DOUBLE;

*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
UPDATE Movie
SET
	playing_limit_date = "2012-12-27"
WHERE id = "002"

UPDATE Movie 
SET
playing_limit_date = "2023-01-02"
WHERE ID = "001"


*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*