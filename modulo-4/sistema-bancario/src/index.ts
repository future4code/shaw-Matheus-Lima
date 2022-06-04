import express from "express"
import cors from "cors"
import { ListaBanco } from "./data"
import { type } from "os"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("server 3003 is running!")
})

app.get("/hello", (req, res) => {
    res.send("world")
})
// ----- Criar conta 
// Criação de conta só é possivel para o cliente se tiver idade => 18 anos informar "NOME", "CPF" "DATA DE NASCIMENTO"
// conta deve guardar essa informação e uma propriedade para o saldo
// todas as contas começam com saldo = 0 
// array de extrato possuindo valor e data e uma descrição 

// ----- Pegar Saldo
//pegar saldo usuário deve conseguir verificar a conta apenas se passar seu "NOME" E "CPF"


// ---- Adicionar saldo
// O usuário só consegue adicionar saldo a sua conta passando "NOME" , "CPF" e o "VALOR QUE DESEJA ADD"

// ---- Pagar conta 
// usuário consegue pagar uma conta passando um "VALOR" uma "DESCRIÇÃO DO PAGAMENTO" e "DATA DE PAGAMENTO",
// caso não informe a "DATA" deve ser considerado que o pagamento é para ser feito no mesmo dia.
// usuário NÃO pode agendar um PAGAMENTO para dia que já passou ou tentar PAGAR uma CONTA  cujo valor seja maior que seu saldo


//---- Transferencia interna
// Para realizar a transferência USUÁRIO deve informar seu "NOME", "CPF". "NOME DESTINATÁRIO", o "CPF DO DESTINATÁRIO" e o "VALOR"
// transferências não podem ser agendadas e devem respeitar os saldos da conta do remetente.


export type Account = {
    id: string
    name: string,
    cpf: string,
    birth: Date
    saldoDebit: number
    extrato: Saldo

}



export type Saldo = [{
    valorPag: number,
    descrPag: string,
    dayPay: string
}]


// retorna todos os usuários do banco 
app.get("/users", (req, res) => {
    res.send(ListaBanco)
})



// cria usuários do banco
app.post("/users", (req, res) => {
    try {
        const id = Math.floor(Date.now() * Math.random()).toString(36)

        const { name, cpf, birth, saldoDebit, extrato } = req.body

        const newDate = new Date(birth)

        const idade = Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000))

        if (idade < 18) {
            throw new Error("Somente maiores de 18 anos podem criar a conta no banco!")

        }

        // cria novo cliente
        const createClient: Account = {
            id: id,
            name: name,
            cpf: cpf,
            birth: birth,
            saldoDebit: saldoDebit,
            extrato: extrato
        }
        if (!name || !cpf || !birth || !saldoDebit) {
            throw new Error("Campos não foram preenchidos corretamente por favor preencha novamente!")
        }


        ListaBanco.push(createClient)
        res.status(200).send(ListaBanco)
        console.log("Usuário Criado com Sucesso!")


    } catch (error: any) {
        switch (error.message) {
            case "Somente maiores de 18 anos podem criar a conta no banco!":
                res.status(400)
                break;
            case "Campos não foram preenchidos corretamente por favor preencha novamente!":
                res.status(400)
                break

            default:
                break;
        }
        res.send(error.message)

    }
})


app.get("/saldo/:cpf/:name", (req, res) => {
    try {
        const { cpf, name } = req.params

        if (!cpf || !name) {
            throw new Error("Dados em Falta por favor escreva novamente!")
        }

        const filtroSaldo = ListaBanco.filter((user) => {
            if (cpf === user.cpf && name === user.name)
                return user.saldoDebit
        })

        const saldoFiltrado = filtroSaldo.map((saldo) => {
            if (saldo !== undefined) {
                return saldo.saldoDebit
            }
        })
        res.status(200).send(saldoFiltrado)

    } catch (error: any) {
        switch (error.message) {

            case "Dados em Falta por favor escreva novamente!":
                res.status(400)
                break;

            default:
                break;
        }
        res.send(error.message)

    }



})


app.put("/add-saldo", (req, res) => {
    try {
        const { cpf, name, saldoDebit } = req.body
        if (!name || !cpf || !saldoDebit) {
            throw new Error("Alguns dados estão em falta por favor escreva novamente!")
        }

        const addSaldoConta = ListaBanco.map((user) => {
            if (user.name === name && user.cpf === cpf) {
                return user.saldoDebit = user.saldoDebit + saldoDebit
            }
        })

        const addSaldoFiltrado = addSaldoConta.filter((user) => {
            if (user !== undefined) {

                return user
            }
        })

        res.status(200).send("Saldo Adicionado:" + addSaldoFiltrado)

    } catch (error: any) {
        switch (error.message) {
            case "Alguns dados estão em falta por favor escreva novamente!":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)

    }
})


app.put("/pagar-conta", (req, res) => {
    try {

        const { cpf, saldoDebit, birth, descrPag } = req.body

        if (!cpf || !saldoDebit || !descrPag) {
            throw new Error("Dados passados estão em falta por favor Preencha novamente!")
        }
        
       

        const novaOper: any = {
            cpf: cpf,
            saldoDebit: saldoDebit,
            birth: birth,
            descrPag: descrPag
        }

        const extrato = ListaBanco.find((user) => {
            return user.extrato.push(novaOper)
        })
        res.status(200).send(extrato)

    } catch (error:any) {
        switch (error.message) {
            case "Dados passados estão em falta por favor Preencha novamente!":
                res.status(400)
                break;

            default:
                res.status(500)
                break;
        }
        res.send(error.message)

    }
})