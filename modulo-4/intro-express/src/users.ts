import { Usuarios } from "./index"


export const users:Usuarios[] = [
    {
        id: "jorgin-noite",
        name:"jorgin da calada da noite",
        phone:"123123321",
        email:"protetordaNoite@gmail.com",
        website:"www.contrateSeuProtetor.com.br",
        posts: [{
            id:1,
            title:"na escuridão da noite",
            body:"achou que eu tava brincando é ?",
            userId:"jorgin-noite"

        }]

    },
    {
        id:"luana da lua",
        name:"luana moonknight",
        phone:666555666,
        email:"euSouAvingança@gmail.com",
        website:"contrateJaSuaVinganca.com",
        posts:[{
            id:2,
            title:"quem é batman?",
            body:"pronta para a vingança",
            userId:"luana da lua"
        }]

    },
    {
        id:"hokage",
        name:"naruto da folha",
        phone:"123321444",
        email:"tocertoDattebayo@gmail.com",
        website:"narutoParaHokage@gmail.com",
        posts:[{
            id:3,
            title:" grupo folhas de konoha",
            body:"recrutando musicos para o grupo",
            userId:"hokage"
        }]



    },

    {
        id:"chave",
        name:"cleitinho",
        phone:"77707777",
        email:"cleitinhodograu@gmail.com",
        website:"www.empinaNoGrau.com",
        posts:[{
            id:4,
            title:"separei do clésio",
            body:"se empinar não der bom agora sou cleitin do teclado",
            userId:"chave"
        }]

    },
   
]