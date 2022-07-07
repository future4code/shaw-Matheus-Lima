import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/authenticator";
import { HarshManager } from "../services/hashManager";
import IdGenerator from "../services/idGenerator";
import { CreateDTO } from "../types/createDTO";

export default class PostBusiness {
    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private harshManager: HarshManager
    ) { }

    create = async (input: CreateDTO) => {
        const { photo, descrition, type, author_id } = input

        if(!photo || !descrition ||  !author_id){
            throw new Error("Campos invalidos preencha novamente!")
        }

        const id = this.idGenerator.generateId()
        
       


       const newPost = new Post(
        id,
        photo,
        descrition,
        type,
        author_id
       )

       await this.postData.insert(newPost)




















}

}