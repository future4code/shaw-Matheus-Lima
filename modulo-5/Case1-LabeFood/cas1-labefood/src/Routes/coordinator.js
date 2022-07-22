export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goToSignUp = (navigate) =>{
    navigate("/signUp")
}

export const goToSignUpAdress = (navigate)=>{
    navigate("/signup/adress")
}

export const goToRestaurant = (navigate,id)=>{
  navigate(`/feed/${id}`)
}

export const goToBack = (navigate)=>{
  navigate(-1)
}