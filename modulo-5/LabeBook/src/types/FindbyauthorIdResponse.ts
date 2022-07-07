import { POST_ROLES } from "./createDTO"

export type FindByEmailResponse ={
    photo:string,
    descrition:string,
    type:POST_ROLES,
    created_at:string,
    author_id:string
}[]