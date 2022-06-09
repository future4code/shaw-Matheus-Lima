*Exercicio 1*

*a. Explique o que é uma chave estrangeira*

Ela se relaciona a primary key puxando informações para uma outra tabela


*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
"001",
"Bom filme",
7,
"005"
);

c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Error Code: 1452. Cannot add or update a child row: 
a foreign key constraint fails ele não adiciona nada só retorna esse erro

d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movie DROP COLUMN rating;

e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
Error Code: 1054. Unknown column 'rating' in 'where clause'

desconhece a coluna rating pois ela foi apagada e não tem como apagar um filme por rating


*EXERCICIO 2*

a. Explique, com as suas palavras, essa tabela

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

Uma tabela de id para filmes e atores, que tem chaves filhos para os dois valores que referência dos atores e filmes da tabela de Movie


b. Crie, ao menos, 6 relações nessa tabela 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "002",
    "003",
    "004",
    "005",
    "006"
)


c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails

A tabela filho não pode criar ou dar update na tabela pai elas tem que estar relacionadas.

d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

Não é possível por conta das relações que o ator possui.

##

*Exercicio 3*

a. Explique, com suas palavras, a query acima. O que é o operador ON?

É o operador que define a condição para fazer o join entre as tabelas.

b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT movie_id, rating FROM Movie 
INNER JOIN Rating ON movie_id = Rating.movie_id;