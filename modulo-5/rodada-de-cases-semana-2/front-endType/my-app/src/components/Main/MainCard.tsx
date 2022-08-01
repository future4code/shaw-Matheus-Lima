import React, { useEffect, useState } from "react"
import { getAllUsers } from "../../services/requests"
import { UserCub } from "../../types/UserCubo"
import TableUsers from "../TableUsers/tableUsers"
import { MainContainer,   MainDataPie, MainTableDiv,  PieContainer,  PieDiv } from "./styled"
import { VictoryPie } from "victory"

const MainCard = () => {
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        getAllUsers(setUsers)
    },[])

    let usersOnTable = users.map( (user:UserCub) => {
        const participationUser = ((user.participation as number )).toString();
        return <TableUsers 
                          key={user.id} 
                          firstName = {user.firstName}
                          lastName = {user.lastName}
                          participation = {`${participationUser}%`} />
      })
    
      let pieUsers = users.map( (user:UserCub) => {
        let name = `${user.firstName} ${user.lastName}`; 
        let dataPoint = {x:name, y:user.participation, label: name}
        return dataPoint
      })
    
      return (
        <MainDataPie>
            <h1>DATA</h1>
            <h3> Table</h3>
            <MainContainer>
              <MainTableDiv>
                  <TableUsers 
                  id=""
                  firstName="First Name"
                  lastName = "Last Name" 
                  participation = "Participation"/>
                  {usersOnTable}
              </MainTableDiv>
              <PieDiv>
                  <PieContainer>
                {pieUsers.length > 0 ?     
                <VictoryPie
                  data={pieUsers}
                  innerRadius={45}
                  colorScale="qualitative"
                  labelPlacement={"parallel"}
                  />: <div></div>}
                  </PieContainer>
              </PieDiv>
            </MainContainer>
            </MainDataPie>
      )
    }

export default MainCard