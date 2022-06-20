import { Account } from "./index";


export const ListaBanco: Account[] = [
    {   id:"cliente1",
        name: "João",
        cpf: "223.112.225.12",
        birth: new Date("1958-05-22"),
        saldoDebit:13.000,
        extrato: [{
            valorPag: 200,
            dayPay: "22/12/2022",
            descrPag: "Pagar a conta de luz"
        }]


    },
    {   id:"cliente1",
        name: "Jorge",
        cpf: "613.903.400-07",
        birth: new Date("1958-05-22"),
        saldoDebit:600,
        extrato: [{
            valorPag: 500,
            dayPay: "25/09/2022",
            descrPag: "Pagar a conta de água"
        }]
    },
    {   id:"cliente1",
        name: "Luana",
        cpf: "057.209.190-74",
        birth: new Date("1958-05-22"),
        saldoDebit:500,
        extrato: [{
            valorPag: 13.000,
            dayPay: "19/11/2022",
            descrPag: "pagar a passagem para europa"
        }]
    }

]


