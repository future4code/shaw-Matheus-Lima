import React from "react";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerHeader } from "../components/Headers/styled";

export const Router = () => {
  return (
    <BrowserRouter>
      <ContainerHeader />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/Login/SignUp" element={<SignUpPage/>} />
        <Route path="/Login/Feed" element={<FeedPage/>} />
        <Route path="/Feed/Post/:id" element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
