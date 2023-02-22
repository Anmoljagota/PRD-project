import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Members from "../Pages/Members/Members";
import Styles from "../Components/Sidebar/Sidebar.module.css"
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adminproducts" element={<Products />}></Route>
        <Route path="/members" element={<Members />}></Route>
      </Routes>
    </div>
  );
}
