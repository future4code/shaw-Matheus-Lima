import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Pages/cart/cart";
import Feed from "../Pages/feed/feed";
import Login from "../Pages/login/login";
import Profile from "../Pages/profile/profile";
import Restaurante from "../Pages/restaurante/restaurante";
import SignUp from "../Pages/signUp/signUp";
import SignUpAdress from "../Pages/signUpAdress/signUpAdress";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
    <Route index element={<Login/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/SignUp/Adress" element={<SignUpAdress/>}/>
    <Route path="/feed" element={<Feed/>}/>
    <Route path="/feed/:restauranteId" element={<Restaurante/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default Router
