// entrada
type devendo = {
    cliente:string,
    saldoTotal: number,
    debitos:number[]
}





const clientesBanco:devendo[] =[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const debitos = (banco:Array<devendo>) =>{

    const novoClientes = clientesBanco.filter((cliente)=>{

        const debitoClientes = cliente.debitos.reduce((saldo:number,valorAtual:number)=> saldo + valorAtual,0)
        const valorEmDebito = cliente.saldoTotal - debitoClientes
        console.table(`${cliente.cliente},${valorEmDebito}`)

        
    })
  

    
}

debitos(clientesBanco)