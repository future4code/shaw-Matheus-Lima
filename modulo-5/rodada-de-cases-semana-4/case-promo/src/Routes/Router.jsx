import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../Pages/Home/Home"
import Details from "../Pages/Details/Details"

const Router = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="Details/:id" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router