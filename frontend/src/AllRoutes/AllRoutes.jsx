import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomProductPage from "../Pages/WebsitePages/ProductPage/CustomProductPage";
import HomePage from "../Pages/WebsitePages/HomePage/HomePage";

import Login from "../Pages/WebsitePages/Login/Login";


import Signup from "../Pages/WebsitePages/Login/Signup";

import Cart from "../Pages/WebsitePages/Cart/Cart";
import Cartlogin from "../Components/Website/Cartlogin";
import Cartdata from "../Pages/WebsitePages/Cartdata/Cartdata";
import SingleProduct from "../Pages/WebsitePages/SingleProductpage/SingleProduct";
import AddressPage from "../Pages/WebsitePages/AddressPage/AddressPage";
import Checkout from "../Pages/WebsitePages/CheckoutPage/Checkout";
import DrawerExample from "../Components/Website/FilterDrawer";
import PrivateRoute from "./PrivateRoute";
import Products from "../Components/Website/Checkout component/Products";
// import Members from "../Pages/Website/Members/Members";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<CustomProductPage />}></Route>
        <Route
          path="/login"
          element={
            <Login
              width={"15%"}
              text={"Enter your email to sign in"}
              inputwidth={"20%"}
            />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cartpage" element={<Cart />}></Route>
        <Route path="/cartlogin" element={<Cartlogin />}></Route>
        <Route path="/nodata" element={<Cartdata />}></Route>
        <Route path="/singleproduct" element={<SingleProduct />}></Route>
        <Route path="/address" element={<AddressPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/logindrawer" element={<DrawerExample />}></Route>
      
     
      
      </Routes>
    </div>
  );
};

export default AllRoutes;
