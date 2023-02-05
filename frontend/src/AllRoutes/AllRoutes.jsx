import React from 'react'
import {Route,Routes} from "react-router-dom"
import CustomProductPage from '../Pages/ProductPage/CustomProductPage'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<CustomProductPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
