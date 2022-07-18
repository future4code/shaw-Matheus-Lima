// import { validateCharacter } from "../src/validateCharacter"
// import Character from "../types/character"


// describe("teste unitário validate character", () => {

//     test("teste verificar func com o nome vazio", () => {
//         const query: Character = {
//             name: "",
//             def: 5,
//             life: 10,
//             str: 20
//         }
//         const result = validateCharacter(query)
//         expect(result).toBe(false)
//     })

//     test("verifique o comportamento da função com um personagem com o vida = 0", () => {
//         const query: Character = {
//             name: "Jorge",
//             def: 5,
//             life: 0,
//             str: 20
//         }
//         const result = validateCharacter(query)
//         expect(result).toBe(false)

//     })

//         test("teste de personagem com a defesa = 0",()=>{
//             const query:Character= {
//                 name:"Cleber",
//                 def:0,
//                 life:20,
//                 str:35
//             }
//             const result = validateCharacter(query)
//             expect(result).toBe(false)
//         })

//         test("teste de personagem com a str ou def ou vida com valor negativo",()=>{
//             const query:Character={
//                 name:"Cleiton",
//                 def:-30,
//                 life:20,
//                 str:35
//             }
//             const result = validateCharacter(query)
//             expect(result).toBe(false)
//         })

//         test("teste de personagem com as info validas",()=>{
//             const query:Character={
//                 name:"Natalia",
//                 def:14,
//                 life:20,
//                 str:35
//             }
//             const result = validateCharacter(query)
//             expect(result).toBe(true)
//         })
        
//         test("teste de personagem com a força = 0", () => {
//             const query: Character = {
//                 name: "sabrina",
//                 def: 9000,
//                 life: 10000,
//                 str: 0
//             }
//             const result = validateCharacter(query)
//             expect(result).toBe(false)
//         })


//     })







