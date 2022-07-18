

// b. Crie uma função validateCharacter 
// que valide as informações de um personagem 
// (devolvendo true se for válida ou false caso contrário). 
// Nenhuma das propriedades pode ser vazia. 
// Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.

import Character from "../types/character";

export const validateCharacter = (input:Character):boolean =>{

    if(!input.name || 
        input.life === undefined ||
        input.def === undefined ||
        input.str === undefined
        ){
            return false
        }
        if(input.life <=0 || input.def <= 0 || input.str <= 0){
            return false
        }

            return true
}





