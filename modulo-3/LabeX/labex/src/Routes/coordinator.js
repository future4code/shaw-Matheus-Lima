export const goToListTripsPage = (navigate) =>{
    navigate("/Inicio/Lista-de-Viagens")
  }

export const goToLoginPage = (navigate) => {
    navigate("/Login")
  }

export const goBack = (navigate) =>{
    navigate(-1)
  }

export  const goToCreateTripPage = (navigate) => {
    navigate("/Area-Adiministrador/Criar-Viagem")
  }

export const goToTripDetailsPage = (navigate) => {
    navigate("/Area-Adiministrador/Detalhes-Viagens")
  }

export const goToApplicationFormPage = (navigate) => {
    navigate("/Inicio/Listade-Viagens/Formulario-de-Inscricao")
  }

export const goToAdiminHomePage = (navigate) =>{
    navigate("/Area-Adiministrador", {replace:true})
  }

export const goToHomePage = (navigate) =>{
    navigate("/Inicio")
  }