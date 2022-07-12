import Character from "../types/character";
import { validateCharacter } from "./validateCharacter";


export const performAttack = (attacker:Character, defender:Character,
    validator:(input:Character)=> boolean ) =>{
    if(!validator(attacker) || !validator(defender)){
        throw new Error("invalid character")
    }

    if(attacker.str > defender.def){
        defender.life -= defender.str - defender.def
    }

}

