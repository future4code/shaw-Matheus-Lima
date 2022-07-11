export enum UserRole{
    NORMAL = "Normal",
    ADMIN = "Admin"
}


export type user = {
   id: string
   name: string
   email: string
   password: string
   role: UserRole
}
export interface AuthenticatorData {
    id: string,
    role : UserRole
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    createdat: string,
    recipe_id:string

}