import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";


export const Router = ()=> {
    
    return(
        <BrowserRouter>
        <Routes>
          <Route index element= {<HomePage/>}/>
          <Route path="/Inicio/Lista-de-Viagens" element={<ListTripsPage/>}/>
          <Route path="/Inicio/Listade-Viagens/Formulario-de-Inscricao" element={<ApplicationFormPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Area-Adiministrador" element={<AdminHomePage/>}/>
          <Route path="/Area-Adiministrador/Detalhes-Viagens/:id" element={<TripDetailsPage/>}/>
          <Route path="/Area-Adiministrador/Criar-Viagem" element={<CreateTripPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}