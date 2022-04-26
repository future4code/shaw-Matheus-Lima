import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../Pages/LoginPage/LoginPage"
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage"
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage"
import TripDetailsPage from "../Pages/TripDetalisPage/TripDetailsPage";
import Home from "../Pages/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";



const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            
        <Route index element={ <Home />}/>
        <Route path="ListTripsPage" element={<ListTripsPage />}/>
        <Route path="ApplicationFormPage" element={<ApplicationFormPage/>}/>
        <Route path="LoginPage" element={<LoginPage />}/>
        <Route path="AdminHomePage" element={<AdminHomePage />}/>
        <Route path="CreateTripPage" element={<CreateTripPage />}/>
        <Route path="TripDetailsPage" element={<TripDetailsPage/>}/>
    
        </Routes>
        </BrowserRouter>

    )
}


export default Router