import React from "react"
import { Pagination } from "@mui/material"
import { PaginationContainer } from "./styled"

const MoviesPagination = (props) => {

  return (
    <PaginationContainer>
      <Pagination count={10} page={props.page} onChange={props.changePage} showLastButton />
    </PaginationContainer>
  )
}

export default MoviesPagination