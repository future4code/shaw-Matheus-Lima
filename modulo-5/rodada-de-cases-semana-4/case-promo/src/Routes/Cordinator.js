export const goToHome = (navigate)=>{
    navigate('/')
}

export const goToPages = (navigate,pages)=>{
    navigate(`/pages/${pages}`)
}

export const goToDetailsMovie = (navigate,id)=>{
    navigate(`/details/${id}`)
}