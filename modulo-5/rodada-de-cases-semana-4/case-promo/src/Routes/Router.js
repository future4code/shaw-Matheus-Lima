import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Details from "../Pages/Details/Details"
import Movie from "../Pages/Movie/Movie"

const Router = () =>{
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="/pages/:pages" element={<Details/>}/>
        </Routes>
    )
}

export default Router