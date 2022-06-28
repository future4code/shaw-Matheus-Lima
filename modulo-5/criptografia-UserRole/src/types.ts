export enum UserRole{
    NORMAL = "Normal",
    ADMIN = "Admin"
}


export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: UserRole
}
export interface AuthenticatorData {
    id: string,
    role : UserRole
}