import { performAttack } from "../src/performAttack"
import Character from "../types/character"

describe("funcões mock",()=>{
    test("função mock com retorno true",()=>{
        const attacker:Character={
            name:"cletin",
            def:25,
            life:400,
            str:50
        }
        const defender:Character={
            name:"carlos",
            def:25,
            life:500,
            str:50
        }
        try {
            const validatorMok = jest.fn(()=>{
                return true
            })
            console.log("foi chamado",validatorMok)
            performAttack(attacker,defender,validatorMok as any)
            expect(defender.life).toBe(300)
            expect(validatorMok).toBeCalled()
            expect(validatorMok).toBeCalledTimes(2)
            expect(validatorMok).toHaveReturnedTimes(2)
           
        } catch (error) {
            
        }
        



    })

    test("função mock com retorno false",()=>{
        const attacker:Character={
            name:"",
            def:25,
            life:400,
            str:50
        }
        const defender:Character={
            name:"",
            def:25,
            life:500,
            str:50
        }
        const validatorMok = jest.fn(()=>{
            return true
        })
        try {

            performAttack(attacker,defender,validatorMok as any)
           
            
        } catch (error) {
            expect(error.message).toBe("invalid character")
            expect(validatorMok).toBeCalled()
            expect(validatorMok).toBeCalledTimes(1)
            expect(validatorMok).toHaveReturnedTimes(1)
            
        }
        



    })
})