import React from "react";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";


export const Router = () => {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<LoginPage/>} />
        <Route path="/Login/SignUp" element={<SignUpPage/>} />
        <Route path="/Login/Feed" element={<FeedPage/>} />
        <Route path="/Feed/Post/:id" element={<PostPage/>} />
      </Routes>
      </BrowserRouter>
  );
};
