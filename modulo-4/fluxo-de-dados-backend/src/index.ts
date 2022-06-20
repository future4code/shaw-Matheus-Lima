import express from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("servidor 3003 is running")
})

//exercicio1
app.get("/test", (req, res) => {
    res.send("teste funcionando")
})

export type ProdutosLoja = {
    id: string,
    name: string,
    price: number
}

//exercicio 3
app.post("/test/criar-produto", (req, res) => {
    try {
        const idAleatoria = Math.floor(Date.now() * Math.random()).toString(36)
        const { name, price }: ProdutosLoja = req.body
        if (!name || !price) {
            throw new Error("Name ou Prince do produto estão faltando!")

        }
        const newProduct = {
            id: idAleatoria,
            name: name,
            price: price
        }

        produtos.push(...produtos, newProduct)
        res.status(201).send(newProduct)

    } catch (error: any) {
        switch (error.message) {
            case "Name ou Prince do produto estão faltando!":
                res.status(400)
                break;

            default:
                res.status(500)
                break;

        }

    }

})

//exercicio 4
app.get("/teste/produtos", (req, res) => {
    try {
        const todosProdutos = produtos.map((produto) => {
            return produto
        })
        res.status(200).send(todosProdutos)
        if (!todosProdutos) {
            throw new Error("Não tem uma lista de produtos!")

        }

    } catch (error: any) {
        switch (error.message) {
            case "Não tem uma lista de produtos!":
                res.status(400)
                break;
            default:
                res.status(500)
        }

    }

})
//exercicio 5
app.put("/teste/editarProduto/:id", (req, res) => {

    try {

        const {price} = req.body
        const idProduto = req.params.id
        if (!idProduto) {
            throw new Error("Id do Produto não foi passado!")
        }
        const novoProdutos = produtos.find((produto) => {
          

            if (idProduto === produto.id) {
                return produto.price = price
            }
            
            if (!novoProdutos?.price) {
                throw new Error("Preço do produto não foi passado!")
            }
            if (produto.price = novoProdutos.price) {
                throw new Error("Preço do produto  já existente!")
            }

        })
        res.send(novoProdutos)

    } catch (error: any) {
        switch (error.message) {
            case "Id do Produto não foi passado!":
                res.status(400)
                break;
            case "Preço do produto não foi passado!":
                res.status(400)
            case "Preço do produto  já existente!":
                res.status(403)

            default:
                res.status(500)
                break;
        }

    }




})






//exercicio6
app.delete("/delete/:id", (req, res) => {
    try {
        const IdProduto = req.params.id

        const listaAtualizada = produtos.map((produto) => {
            if (IdProduto === produto.id) {
                return {
                    ...produto,
                    produto: []
                }
            } else {
                return produto
            }
        })
        res.status(200).send(listaAtualizada)
        if (!IdProduto) {
            throw new Error("a Id não foi passada ou não existe na lista de produtos!")
        }

    } catch (error: any) {
        switch (error.message) {
            case "a Id não foi passada ou não existe na lista de produtos!":
                res.status(400)
                break;

            default:
                res.status(500)
                break;
        }

    }



})

