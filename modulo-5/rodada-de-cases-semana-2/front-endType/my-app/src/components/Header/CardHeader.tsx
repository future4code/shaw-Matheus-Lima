import React, { useEffect, useState } from "react"
import { createUserCube } from "../../services/requests"
import { UserCubo } from "../../types/UserCubo"
import { Header} from "./styled"



const CardHeader = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [participation,setparticipation] = useState('')

 const onSubmitForm = async(event:any)=>{
    event.preventDefault()
    
    let user:UserCubo = {
        firstName,
        lastName,
        participation:Number(participation)
    }
    setFirstName('')
    setLastName('')
    setparticipation('')

    await createUserCube(user)
console.log(user)
    
}


useEffect(()=>{
},[firstName,lastName,participation])

return (

    <div>
        <Header onSubmit={(event)=>onSubmitForm(event)}>
            <form>
            <input placeholder="First-Name" required value={firstName} onChange={(event)=> setFirstName(event.target.value) }></input>
            <input placeholder="Last-Name" required value={lastName} onChange={(event)=> setLastName(event.target.value)}></input>
            <input placeholder="Participation" required value={participation} onChange={(event)=>setparticipation(event.target.value)}></input>
            <button>Send</button>
            </form>
            
            
        </Header>
    </div>
    )

}

export default CardHeader