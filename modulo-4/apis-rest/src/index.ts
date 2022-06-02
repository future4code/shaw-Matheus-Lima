import express from "express";
import cors from "cors";
import { error } from "console";

type User = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Para testar se o servidor está tratando os endpoints corretamente

//exercicio 1
//a)Get
//b) /users


app.get("/users", (req, res) => {

  const listUsers = users.find((user) => {
    return user
  });
  res.status(200).send(listUsers)
});

//exercicio 2

//a. Como você passou os parâmetros de type para a requisição? Por quê?
// pathParams, porquê params retorna toda a lista de um valor especifico passado

//b. usando validações pois se passar valores diferentes do que é esperado ele retorna um erro 
// dizendo que a validações tem e quais ele pode passar

app.get("/type/:type", (req, res) => {
  try {
    const typePerson = req.params.type
    if (!typePerson) {
      throw new Error("Type Not Found please write a type")
    }

    if (typePerson !== "ADMIN" && "NORMAL") {
      throw new Error("Please write (ADMIN) or (NORMAL)")
    }

    const listUsers = users.filter((user) => {
      if (user.type === "ADMIN" && typePerson === "ADMIN") {
        return user
      } else if (user.type === "NORMAL" && typePerson === "NORMAL") {
        return user
      }
    });
    res.status(200).send(listUsers)

  } catch (error: any) {
    switch (error.message) {
      case "Type Not Found please write a type":
        res.status(400)
        break;
      case "Please write (ADMIN) or (NORMAL)":
        res.status(400)
        break
      default:
        res.status(500)
        break;
    }
    res.send(error.message)
  }

});


app.get("/names", (req, res) => {
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name === name)
    if (!user) {
      throw new Error("User Not Found")
    }
    res.send(user)
  } catch (error: any) {
    switch (error.message) {
      case "User not Found":
        res.status(400)
        break;
      default:
        res.status(500)
        break;
    }
    res.send(error.message)
  }
})
// a. Mude o método do endpoint para `PUT`. O que mudou? ele cria mas fala  Cannot set headers after they are sent to the client

// b. Você considera o método `PUT` apropriado para esta transação? Por quê? Não pois ele é melhor apra atualizar informações

app.put("/add",(req,res)=>{
  try {
    const idAleatoria =  Math.floor(Date.now() * Math.random())
    const {name,email,type,age}:User = req.body 
    if (!name || !email || !type || !age){
      throw new Error("Some of the fields are missing")
    }
    const newObject = {
      id:idAleatoria,
      name:name,
      email:email,
      type:type,
      age:age
    }
    users.push(...users,newObject)
    res.status(201).send(newObject)
    res.send(users)

  } catch (error:any) {
    switch (error.message) {
      case "Some of the fields are missing":
        res.status(400)
        break;
    
      default:
        res.status(500)
        break;
    }
    res.send(error.message)
    
  }
})

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
