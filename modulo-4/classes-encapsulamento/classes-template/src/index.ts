import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


//a*) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe
// usamos o this para referenciar 

// b) Copie o código abaixo para o seu exercício de hoje; 
// crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). 
// Quantas vezes a mensagem 
// "Chamando o construtor da classe User" foi impressa no terminal?
// 1x


class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value;
        this.date = date;
    }

    public getTrans = () => {
        return {
            description: this.description,
            value: this.value,
            date: this.date
        }

    }
}

const trasaction1 = new Transaction("Pagamento Nu", 200, "25-08-2022")


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions:Array<object> = trasaction1.getTrans();

    constructor(cpf: string, name: string, age: number,) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions
    }
}

const userAccount1: any = new UserAccount("223424123", "Sabrina Pires", 25)

class Bank {
    private Account: UserAccount[]

    constructor(Account: UserAccount[]) {
        this.Account = Account
    }

}

const account1 = new Bank(userAccount1)

console.log(account1)





// console.log(userAccount1 .getName())





// c) Como conseguimos ter acesso às propriedades privadas de uma classe?

// pelos metodos getters



// Exercício 2  Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. 
// Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, 
// todas elas devem ser privadas. Portanto, crie métodos (getters) para a leitura 
// desses valores, tanto para essa classe quanto para a classe UserAccount. 
// Crie uma instância dessa classe e adicione à instância já criada de UserAccount 