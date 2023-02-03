import React from 'react'
import {Route,Routes} from "react-router-dom"
import CustomProductPage from '../Pages/ProductPage/CustomProductPage'
import HomePage from '../Pages/HomePage'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<CustomProductPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
