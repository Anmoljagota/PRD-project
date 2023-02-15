import React from 'react'
import {Route,Routes} from "react-router-dom"
import CustomProductPage from '../Pages/ProductPage/CustomProductPage'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import SingleProductPage from '../Pages/SingleProductpage/SingleProductPage'
import Cartlogin from '../Components/Cartlogin'
import Cartdata from '../Pages/Cartdata/Cartdata'
import SingleProduct from '../Pages/SingleProduct'
import AddressPage from '../Pages/AddressPage/AddressPage'
import Checkout from '../Pages/CheckoutPage/Checkout'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<CustomProductPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/singlepage" element={<SingleProductPage/>}></Route>
        <Route path="/cartlogin" element={<Cartlogin/>}></Route>
        <Route path="/nodata" element={<Cartdata/>}></Route>
        <Route path="/singleproduct" element={<SingleProduct/>}></Route>
        <Route path="/address" element={<AddressPage/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
