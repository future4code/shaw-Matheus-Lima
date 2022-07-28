import axios from 'axios'
import { UserCubo } from '../types/UserCubo'

const BASE_URL = "https://cubos-back.herokuapp.com"

export const createUserCube = async (newUser:UserCubo)=>{
    axios.post(`${BASE_URL}/users/signUp`,newUser)
    .then((res)=>{alert("Registered user thanks for participating")}).catch((err)=>{console.log(err)})
}

export const getAllUsers = async (setUsers:Function)=>{
    axios.get(`${BASE_URL}/users/users`)
    .then((res)=>{setUsers(res.data.users)
    })
    .catch((err)=>{console.log(err)})
}



