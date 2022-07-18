export type CreateDTO = {
    photo:string,
    descrition:string,
    type:POST_ROLES,
  
    author_id:string
}

export enum POST_ROLES {
    NORMAL="NORMAL",
    ADMIN="ADMIN"
}