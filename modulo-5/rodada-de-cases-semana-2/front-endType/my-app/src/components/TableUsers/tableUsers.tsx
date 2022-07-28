import React from 'react'
import { TableDiv, TableFirstNameDiv, TableLastNameDiv, TableParticipationDiv } from './styled'

const TableUsers = (props:any) => {
  return (
    <TableDiv>
        <TableDiv>{props.id}</TableDiv>
        <TableFirstNameDiv>{props.firstName}</TableFirstNameDiv>
        <TableLastNameDiv>{props.lastName}</TableLastNameDiv>
        <TableParticipationDiv>{props.participation}</TableParticipationDiv>
        </TableDiv>
  )
}

export default TableUsers 