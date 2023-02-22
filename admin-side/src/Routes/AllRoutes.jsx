import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}
