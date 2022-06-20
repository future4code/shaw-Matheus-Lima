import Express from "express";
import cors from "cors"
import { users } from "./users";


const app = Express()


app.use(Express.json())
app.use(cors())

export type Usuarios = {
    id: string | number,
    name: string,
    phone: string | number
    email: string,
    website: string,
    posts: Posts[]


}

type Posts = {
    id: number,
    title: string,
    body: string ,
    userId: string
}



app.get("/users/:userId",(req,res)=>{
    const userId = req.params.userId
    const pegaPostId = users.find((user)=>{
        if(user.id === userId){
            return user.posts
        }
        
    })
    
    res.send(pegaPostId)
})

app.get("/", (req, res) => {
    res.send("Hello express")
})

app.get("/users:userId", (req, res) => {
    const pegaUsers = users.map((user) => {
        return user

    }).flat(1)

    const pegaPost = pegaUsers.map((post) => {
        return post.posts
    }).flat(1)

    
    res.send(pegaUsers)
    res.send(pegaPost)

})



app.listen(3003, () => {
    console.log("servidor 3003 está rodando!")
})