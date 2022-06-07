CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


SHOW DATABASES;

DESCRIBE Actor ;

DROP TABLE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002",
"Glória Pires",
1200000,
"1963-08-23",
"female");


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Jorge",
  400000,
  "1949-04-18", 
  "male"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);

SELECT name  FROM Actor WHERE gender = "female";

SELECT salary from Actor where name = "Tony Ramos";

SELECT id, name, salary from Actor WHERE salary < 500000;

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;


CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
001,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam 
a rotina do casamento. Um dia eles 
são atingidos por um fenômeno inexplicável e trocam de corpos",
"06/01/2006",
7
); 

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85
 anos, sempre causa grandes confusões. 
 A vida dela e dos seus quatro filhos sofre 
 uma reviravolta depois que Zaida, empregada e amiga de Dona 
Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"27/12/2012",
10);

INSERT INTO Movie(id, title, synopsis, release_Date, rating)
VALUES(
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"02/11/2017",
8);


INSERT INTO Movie(id, title , synopsis, realease_Date, rating)
VALUES(
004,
"Auto da Compadecida",
"Adventure follows two poor souls (Matheus Nachtergaele, Selton Mello) as they find 
a job, scheme to win a girl and face marauding bandits",
"02/11/2000"
);

SELECT id, title, rating FROM Movie WHERE id = "004";

SELECT * FROM Movie WHERE name = "Auto da Compadecida";

SELECT id, title, rating FROM Movie WHERE id = "004";


SELECT id, title, synopsis FROM Movie WHERE rating > 7;


SELECT * FROM Movie
WHERE title LIKE "%vida%";


SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;


SELECT * FROM Movie 
WHERE title LIKE "%dois%" OR synopsis LIKE "%morte%";

SELECT * FROM Movie
WHERE realease_Date <> 2022;


SELECT * FROM Movie 
WHERE(title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") 
AND rating > 7;

-- altera coluna 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- alterando nome e a data de nascimento do ator

UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1936-10-5"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";
 
UPDATE Actor
SET name = "juliana paes"
WHERE id = "003";

UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1958-10-8",
salary = 10000,
gender = "MALE"
WHERE id = "005";

DELETE FROM Actor 
WHERE id = "005";

DELETE FROM Actor 
WHERE gender = "male"
 AND salary > 100000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor 
WHERE gender = "Female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary ASC;

SELECT * FROM Actor
ORDER BY salary ASC LIMIT 3;

SELECT AVG(salary) FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie Change rating rating DOUBLE;

UPDATE Movie
SET
playing_limit_date = "2012-12-27"
WHERE id = "002";

UPDATE Movie 
SET
playing_limit_date = "2023-01-02"
WHERE ID = "001";



DELETE FROM Movie WHERE id = "001";

SELECT * FROM Movie;



