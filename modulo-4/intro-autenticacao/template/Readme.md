Exercicio 1

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

concordo fica mais fácil de variar a id sem aumentar o tamanho, infinitamente.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

###

Exercício 2

const userTableName = "User";

const connection = knex({
client: "mysql",
connection: {
host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_SCHEMA,
},
});

const createUser = async (id: string, email: string, password: string) => {
await connection
.insert({
id,
email,
password,
})
.into(userTableName);
};

a) Explique o código acima com as suas palavras.
Está fazendo uma conexão com o banco de dados e inserindo os dados de id, email e password que vão ser passados por um endpoint na table userTableName

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

CREATE TABLE IF NOT EXISTS User(
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL
);

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

const UserTable = "User";

const connection = knex({
client:"mysql",
connection:{
host:process.env.DB.HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_SCHEMA,

    }

})
const createUser = async (id:string, email:string, password: string)=>{
await connection
.insert({
id,
email,
password,
})
.into(User)
}



### 


Exercicio 3 


a) O que a linha as string faz? Por que precisamos usar ela ali?

ela força uma linha a ser o a tipagem no caso do import ela força tudo a ser jwt


b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.


###


Exercicio 4 